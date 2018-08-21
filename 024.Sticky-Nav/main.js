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
