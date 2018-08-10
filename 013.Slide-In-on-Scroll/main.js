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
