# Javascript30 - 013. Slide In on Scroll

![](https://mgleon08.github.io/JavaScript30/013.Slide-In-on-Scroll/images/thumbnail.png)

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/013.Slide-In-on-Scroll/index.html) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/013.Slide-In-on-Scroll)

利用 js + css 控制滑入圖片效果

# 圖片左右排版

利用 float 去做排版

```css
.align-left {
  float:left;
  margin-right:20px;
}

.align-right {
  float:right;
  margin-left:20px;
}
```

# 圖片滑入效果

```css
.slide-in {
  opacity:0; /* 一開始設定透明度為 0 */
  transition:all .5s;
}

/* 將左右側圖片，各往左右移動 30 % */
.align-left.slide-in {
  transform:translateX(-30%) scale(0.95);
}

.align-right.slide-in {
  transform:translateX(30%) scale(0.95);
}

/* 滾動到該圖片，給予 .active class 並且讓透明度為1，位置移到原本地方 */
.slide-in.active {
  opacity:1;
  transform:translateX(0%) scale(1);
}
```


# js

利用 js 控制，當滑到特定位置時，讓圖片滑入

```js
// debounce function
// 讓某函式在一定時間內只能觸發一次，目的是提升效能

function debounce(func, wait = 20, immediate = true) {
  var timeout
  return function() {
    var context = this, args = arguments
    var later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
```

* `window.scrollY` 取的瀏覽器視窗捲軸 Y 的高度（捲軸在最上方時是 0）
* `window.innerHeight` 瀏覽器內視窗的高度
* `element.offsetTop` 元素相對於 `offsetParent` 的距離，如果外層元素沒設定 `position` 那就會是 body
* `element.height` 元素的高度

```js
const sliderImages = document.querySelectorAll('.slide-in')

function checkSlide(e) {
  sliderImages.forEach(sliderImage => {
    // half way through the image
    // (捲動的長度 + 視窗的高度) - 圖片一半的位置
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2
    // bottom of the image
    // 可以用 sliderImage.offsetParent 來看 offsetTop 是相對於哪的高度
    const imageBottom = sliderImage.offsetTop + sliderImage.height
    // slideInAt 滑入圖片頂端 > image 的頂端
    const isHalfShown = slideInAt > sliderImage.offsetTop
    // 捲動的長度還沒到 image 底端
    const isNotScrolledPast = window.scrollY < imageBottom
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active')
    } else {
      sliderImage.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide))
```
