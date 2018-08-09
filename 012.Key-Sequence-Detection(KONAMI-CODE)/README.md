# Javascript30 - 012. Key Sequence Detection (KONAMI CODE)

![](https://mgleon08.github.io/JavaScript30/012.Key-Sequence-Detection(KONAMI-CODE)/images/thumbnail.png)

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/012.Key-Sequence-Detection(KONAMI-CODE)/index.html) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/012.Key-Sequence-Detection(KONAMI-CODE))

利用 js 打造自己的 video player

```js
const pressed = []
const secretCode = 'js30'

window.addEventListener('keyup', (e) => {
  console.log(e.key)
  pressed.push(e.key)
  // 始終保留 secretCode 的長度，當超過就切斷前面
  // -4-1 = -5
  // 如果輸入 js30h  5 - 4 = 1
  // pressed.splice(-5, 1) 所以就會拿掉第一個 j
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
  if (pressed.join('').includes(secretCode)) {
    console.log('DING DING!')
    cornify_add()
  }
  console.log(pressed)
})
```

# Array.prototype.splice()

```js
// 從索引 2 的位置開始，刪除 1 個元素並插入「trumpet」
var myFish = ['angel', 'clown', 'drum', 'sturgeon']
var removed = myFish.splice(2, 1, 'trumpet')
// myFish 為 ["angel", "clown", "trumpet", "sturgeon"]
// removed 為 ["drum"]

// 從索引 -2 的位置開始，刪除 1 個元素
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
var removed = myFish.splice(-2, 1)
// myFish 為 ["angel", "clown", "sturgeon"]
// removed 為 ["mandarin"]
```

* [Array.prototype.splice()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
