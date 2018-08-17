# Javascript30 - 020. Native Speech Recognition

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/020.Native-Speech-Recognition/) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/020.Native-Speech-Recognition)

利用 js 來玩內建在 Chrome 瀏覽器裡面的語音辨識 API

# 安裝套件

跟之前一樣會用到 browser-sync

```js
npm install browser-sync
npm start
```

# contenteditable

可以讓 class 像是 input 一樣

```html
<div class="words" contenteditable></div>
```

# JS

```js
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
```

* [[JS30] Day20: Native Speech Recognition](https://hackmd.io/s/BkB9_qzYb)
