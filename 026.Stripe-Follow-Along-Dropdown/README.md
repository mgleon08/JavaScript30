# Javascript30 - 026. Stripe Follow Along Dropdown

![](https://mgleon08.github.io/JavaScript30/026.Stripe-Follow-Along-Dropdown/images/thumbnail.png)

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/026.Stripe-Follow-Along-Dropdown/) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/026.Stripe-Follow-Along-Dropdown)

用 JS + CSS 處理下拉選項


# CSS

```css
.trigger-enter .dropdown {
  display: block;
}

.trigger-enter-active .dropdown {
  opacity: 1;
}

.dropdownBackground {
  width:100px;
  height:100px;
  position: absolute;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
  transition:all 0.3s, opacity 0.1s, translate 0.2s;
  transform-origin: 50% 0%;
  display: flex;
  justify-content: center;
  opacity:0;
}

.dropdownBackground.open {
  opacity: 1;
}
```

# JS

```js
const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

function handleEnter() {
  // 當滑鼠移進來，給予 trigger-enter class
  this.classList.add('trigger-enter')
  // 150 ms 後如果有 trigger-enter 再給予 trigger-enter-active class
  // 因為有可能 trigger-enter-active 還沒加進來滑鼠就離開了
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150)
  // 新增下拉的背景
  background.classList.add('open')

  // 滑鼠移入的下拉
  const dropdown = this.querySelector('.dropdown')
  // 取得 dropdown 的大小及其相對的位置
  const dropdownCoords = dropdown.getBoundingClientRect()
  // 取得 nav 的大小及其相對的位置
  const navCoords = nav.getBoundingClientRect()

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  }

  // 更改下拉背景的寬高，位置
  background.style.setProperty('width', `${coords.width}px`)
  background.style.setProperty('height', `${coords.height}px`)
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)
}

function handleLevave() {
  //滑鼠離開就移除 'trigger-enter', 'trigger-enter-active'
  this.classList.remove('trigger-enter', 'trigger-enter-active')
  background.classList.remove('open')
}

triggers.forEach(trigger => trigger.addEventListener("mouseenter", handleEnter))
triggers.forEach(trigger => trigger.addEventListener("mouseleave", handleLevave))
```

* [getBoundingClientRect](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)
