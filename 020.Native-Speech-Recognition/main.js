// 啟動語音，根據不同瀏覽器
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

// 初始化語音辨識 API
  const recognition = new SpeechRecognition()
  recognition.interimResults = true // 講話的當下即時辨識

  let p = document.createElement('p')
  const words = document.querySelector('.words')
  words.appendChild(p)

  // 監聽語音並回傳
  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')
      // 遇到特定文字代換成圖案
      const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩')
      p.textContent = poopScript

      // 判斷內容結束，就給予新的 <p></p>
      if (e.results[0].isFinal) {
        p = document.createElement('p')
        words.appendChild(p)
      }
  })

  // 監聽語音結束後，在開啟一段語音辨識
  recognition.addEventListener('end', recognition.start)

  recognition.start()