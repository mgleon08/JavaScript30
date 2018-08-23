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