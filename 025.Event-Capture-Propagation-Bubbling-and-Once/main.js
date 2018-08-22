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
