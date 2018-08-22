# Javascript30 - 025. Event Capture, Propagation, Bubbling and Once

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/025.Event-Capture-Propagation-Bubbling-and-Once/index.html) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/025.Event-Capture-Propagation-Bubbling-and-Once)

了解 event 的事件冒泡 & 事件捕獲

# JS

```js
const divs = document.querySelectorAll('div')
const button = document.querySelector('button')

function logText(e) {
  console.log(this.classList.value)
  // e.stopPropagation() // stop bubbling!
  // console.log(this)
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false, // true 為由外到內，false 為冒泡由內到外，預設都為冒泡
  once: true // 可以設定只執行一次
}))

button.addEventListener('click', () => {
  console.log('Click!!!')
}, {
  once: true
})
```


* [DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)
* [JavaScript event bubbling (事件冒泡)& capture (事件捕獲)的處理](https://medium.com/@shihKai/javascript-event-bubbling-%E4%BA%8B%E4%BB%B6%E5%86%92%E6%B3%A1-capture-%E4%BA%8B%E4%BB%B6%E6%8D%95%E7%8D%B2-%E7%9A%84%E8%99%95%E7%90%86-34abdbd69397)
