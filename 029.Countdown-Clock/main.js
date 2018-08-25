let countdown
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
// 取所有有 data-time 屬性的元素
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown)

  const now = Date.now()
  const then = now + seconds * 1000

  displayTimeLeft(seconds)
  displayEndTime(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    // check if we should stop it!
    if (secondsLeft < 0) {
      clearInterval(countdown)
      return
    }
    // display it
    displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainderSeconds = seconds % 60
  // remainderSeconds = 01, 02, 03 前面的 0
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
  // 更改網頁 tiltle
  document.title = display
  // 更改文字
  timerDisplay.textContent = display
}

function displayEndTime(timestamp) {
  // 毫秒數轉換成時間
  const end = new Date(timestamp)
  // 小時
  const hour = end.getHours()
  // 調整 24 小時改成 12 小時制
  const adjustedHour = hour > 12 ? hour - 12 : hour
  // 分鐘
  const minutes = end.getMinutes()
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`
}

function startTimer() {
  // 字串轉成數字
  const seconds = parseInt(this.dataset.time)
  timer(seconds)
}

// 設定 click 觸發 click event 並執行 data-time 的時間
buttons.forEach(button => button.addEventListener('click', startTimer))

// 自行輸入秒數
document.customForm.addEventListener('submit', function(e) {
  // 停止 form 預設行為
  e.preventDefault()
  // 取 input 進來的 value，以分鐘為單位
  const mins = this.minutes.value
  // 轉成秒數並執行
  timer(mins * 60)
  // 清空input
  this.reset()
})
