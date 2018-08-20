# Javascript30 - 023. Speech Synthesis

![](https://mgleon08.github.io/JavaScript30/023.Speech-Synthesis/images/thumbnail.png)

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/023.Speech-Synthesis/index.html) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/023.Speech-Synthesis)

透過 js 來控制語音

# CSS

```css
.highlight {
  transition: all 0.2s;
  border-bottom:2px solid white;
  position: absolute;
  top:0;
  background:white;
  left:0;
  z-index: -1;
  border-radius:20px;
  display: block;
  box-shadow: 0 0 10px rgba(0,0,0,0.2)
}
```

# JS

```js
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
```

* [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance)
* [JS30-Day23-Speech Synthesis](https://ithelp.ithome.com.tw/articles/10196799)
