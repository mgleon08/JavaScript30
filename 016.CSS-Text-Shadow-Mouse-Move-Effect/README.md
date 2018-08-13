# Javascript30 - 016. CSS Text Shadow Mouse Move Effect

![](https://mgleon08.github.io/JavaScript30/016.CSS-Text-Shadow-Mouse-Move-Effect/images/thumbnail.png)

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/016.CSS-Text-Shadow-Mouse-Move-Effect/index.html) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/016.CSS-Text-Shadow-Mouse-Move-Effect)

# contenteditable

使元素可編輯

```html
<div class="hero">
  <h1 contenteditable>🔥WOAH!</h1>
</div>
```

* [contenteditable](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Content_Editable)

# JS

```js
const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const walk = 300 // 100px

function shadow(e) {
  // const width = hero.offsetWidth
  // const height = hero.offsetHeight
  // const { offsetWidth: width, offsetHeight: height }  = { offsetWidth: hero.offsetWidth, offsetHeight: hero.offsetHeight }

  const { offsetWidth: width, offsetHeight: height } = hero
  let { offsetX: x, offsetY: y } = e

  // this 被監聽的物件
  // e.target 事件被觸發時的物件，有可能不是 element 本身 e.g. 當滑鼠移到中間字體
  if (this !== e.target) {
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2))
  const yWalk = Math.round((y / height * walk) - (walk / 2))

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `
}

hero.addEventListener('mousemove', shadow)
```
