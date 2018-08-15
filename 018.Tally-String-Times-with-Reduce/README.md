# Javascript30 - 018. Tally String Times with Reduce

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/018.Tally-String-Times-with-Reduce/index.html) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/018.Tally-String-Times-with-Reduce)

透過 js 加總所有 video 的秒數

# JS

```js
// 先在 html 設定 data-time 這個屬性
// 透過 querySelectorAll 取得所有的 data-time
// Array.from 轉成 array 之前有提到用 querySelectorAll 取得的會是 NodeList
const timeNodes = Array.from(document.querySelectorAll('[data-time]'))

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
     // 將取得的 value 5:43 猜成 分 & 秒，再將 分 * 60 轉成秒加起來
    // const [mins, secs] = timeCode.split(':').map(function(str){ return parseFloat(str) }
    // const [mins, secs] = timeCode.split(':').map(str => parseInt(str))
    const [mins, secs] = timeCode.split(':').map(parseFloat)
    return (mins * 60) + secs
  })
  .reduce((total, vidSeconds) =>  total + vidSeconds) // 加總

  // 將總秒數在轉換成時間
  let secondsLeft = seconds
  const hours = Math.floor(secondsLeft / 3600)
  secondsLeft = secondsLeft % 3600

  const mins = Math.floor(secondsLeft / 60)
  secondsLeft = secondsLeft % 60

  console.log(hours, mins, secondsLeft)
```

* [Array.prototype.reduce()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
* [Array.prototype.map()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
