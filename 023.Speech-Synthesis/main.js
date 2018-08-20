const msg = new SpeechSynthesisUtterance()
let voices = []
const voicesDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"], [name="text"]')
const speakButton = document.querySelector('#speak')
const stopButton = document.querySelector('#stop')
msg.text = document.querySelector('[name="text"]').value

function populateVoices() {
  // 取得 speechSynthesis 中所有的聲音檔
  voices = this.getVoices()
  voicesDropdown.innerHTML = voices
  // 塞選出 TW 和 en 的語音
    .filter(voice => voice.lang.includes('TW') || voice.lang.includes('en'))
  // 組成 voicesDropdown 的 option
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('')
}

// 切換語音
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value)
  toggle()
}

function toggle(startOver = true) {
  speechSynthesis.cancel()
  if (startOver) {
    // 語音說話
    speechSynthesis.speak(msg)
  }
}

function setOption() {
  console.log(this.name, this.value)
  // 聲音的設定，速率, 音調, s切換語言等等
  msg[this.name] = this.value
  toggle()
}

speechSynthesis.addEventListener('voiceschanged', populateVoices)
voicesDropdown.addEventListener('change', setVoice)
options.forEach(option => option.addEventListener('change', setOption))
speakButton.addEventListener('click', toggle)
stopButton.addEventListener('click', () => toggle(false))
