# Javascript30 - 027. Click and Drag to Scroll

![](https://mgleon08.github.io/JavaScript30/027.Click-and-Drag-to-Scroll/images/thumbnail.png)

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/027.Click-and-Drag-to-Scroll/index.html) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/027.Click-and-Drag-to-Scroll)

用 JS 做拖拉效果

# CSS

```css
html {
  box-sizing: border-box;
  background: url('https://source.unsplash.com/NFs6dRTBgaM/2000x2000') fixed;
  background-size: cover;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  font-size: 20px;
  margin: 0;
}

.items {
  height:800px;
  padding: 100px;
  width:100%;
  border:1px solid white;
  box-shadow: 0 0 10px 7px rgba(0, 0, 0, 0.09);
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  transform: scale(0.98);
  position: relative;
  background: rgba(255,255,255,0.1);
  font-size: 0;
  perspective: 500px;
}

.items.active {
  background: rgba(255,255,255,0.3);
  cursor: grabbing;
  cursor: -webkit-grabbing;
  transform: scale(1);
}

.item {
  width:200px;
  height: calc(100% - 40px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  font-weight: 100;
  color:rgba(0,0,0,0.15);
  box-shadow: inset 0 0 0 10px rgba(0,0,0,0.15);
}

.item:nth-child(9n+1) { background: dodgerblue;}
.item:nth-child(9n+2) { background: goldenrod;}
.item:nth-child(9n+3) { background: paleturquoise;}
.item:nth-child(9n+4) { background: gold;}
.item:nth-child(9n+5) { background: cadetblue;}
.item:nth-child(9n+6) { background: tomato;}
.item:nth-child(9n+7) { background: lightcoral;}
.item:nth-child(9n+8) { background: darkslateblue;}
.item:nth-child(9n+9) { background: rebeccapurple;}

.item:nth-child(even) { transform: scaleX(1.31) rotateY(40deg); }
.item:nth-child(odd) { transform: scaleX(1.31) rotateY(-40deg); }

.wrap {
  width: auto;
  border:2px solid green;
  height: 100%;
}
```

# JS

```js
const slider = document.querySelector('.items')
let isDown = false
let startX
let scrollLeft

// 監聽滑鼠在 items 點下去的時候
slider.addEventListener('mousedown', (e) => {
  isDown = true
  slider.classList.add('active')
  // 設定滑鼠下去離 items 最左邊的距離
  startX = e.pageX - slider.offsetLeft
  // items 向左滑動的距離
  scrollLeft = slider.scrollLeft
})

// 監聽滑鼠在 items 離開的時候
slider.addEventListener('mouseleave', () => {
  isDown = false
  slider.classList.remove('active')
})

// 監聽滑鼠在 items 按鍵放開的時候
slider.addEventListener('mouseup', () => {
  isDown = false
  slider.classList.remove('active')
})

// 監聽滑鼠在 items 移動的時候
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return  // stop the fn from running
  e.preventDefault()
  // 設定滑鼠離 items 最左邊的距離
  const x = e.pageX - slider.offsetLeft
  // 設定要 scroll 移動的距離，(滑鼠離 items 最左邊的距離 - 一開始點下去離左邊的距離(固定)) * 3
  // 數字越大滑動的越快
  const walk = (x - startX) * 3
  // 移動
  slider.scrollLeft = scrollLeft - walk
})
```
