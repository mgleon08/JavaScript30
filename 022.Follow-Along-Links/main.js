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