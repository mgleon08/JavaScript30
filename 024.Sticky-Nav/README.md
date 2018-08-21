# Javascript30 - 024. Sticky Nav

![](https://mgleon08.github.io/JavaScript30/024.Sticky-Nav/images/thumbnail.png)

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/024.Sticky-Nav/index.html) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/024.Sticky-Nav)

透過 css fixed 來做置頂功能

# CSS

```css
body.fixed-nav nav {
  position: fixed;
  box-shadow:0 5px 0 rgba(0,0,0,0.1);
}
```

# JS

```js
// Not a ton of code, but hard to
const nav = document.querySelector('#main')
let topOfNav = nav.offsetTop

function fixNav() {
  // 捲軸高度大於 nav 的 top
  if(window.scrollY >= topOfNav) {
    console.log(nav.offsetHeight)
    // 讓 nav 被 fixed 住時，body 上方不會被遮住，加上與 nav 一樣高的 paddingTop
    document.body.style.paddingTop = nav.offsetHeight + 'px'
    // 在 body 新增 fixed-nav class
    document.body.classList.add('fixed-nav')
  } else {
    document.body.classList.remove('fixed-nav')
    document.body.style.paddingTop = 0
  }
}

window.addEventListener('scroll', fixNav)
```
