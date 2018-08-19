# Javascript30 - 022. Follow Along Links

![](https://mgleon08.github.io/JavaScript30/022.Follow-Along-Links/images/thumbnail.png)

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/022.Follow-Along-Links/) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/022.Follow-Along-Links)

透過 js 與 CSS 來達成 hightlight 跟著 link 位置移動~

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
const triggers = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

function highlightLink() {
  // 透過 getBoundingClientRect 取得 link 的座標
  const linkCoords = this.getBoundingClientRect()
  console.log(linkCoords)
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  }

  // 設定 highlight 寬高跟指到的一樣
  highlight.style.width = `${coords.width}px`
  highlight.style.height = `${coords.height}px`
  // 將 highlight 移到指到的位置
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`

}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))
```

[Element.getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)
