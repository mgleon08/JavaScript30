# Javascript30 - 029. Countdown Clock

![](https://mgleon08.github.io/JavaScript30/029.Countdown-Clock/images/thumbnail.png)

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/029.Countdown-Clock/index.html) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/029.Countdown-Clock)

做一個倒數計時器

# HTML

* 自定 data-time 設定每個 button 應該倒數的秒數

```html
<div class="timer">
  <div class="timer__controls">
    <button data-time="20" class="timer__button">20 Secs</button>
    <button data-time="300" class="timer__button">Work 5</button>
    <button data-time="900" class="timer__button">Quick 15</button>
    <button data-time="1200" class="timer__button">Snack 20</button>
    <button data-time="3600" class="timer__button">Lunch Break</button>
    <form name="customForm" id="custom">
      <input type="text" name="minutes" placeholder="Enter Minutes">
    </form>
  </div>
  <div class="display">
    <h1 class="display__time-left"></h1>
    <p class="display__end-time"></p>
  </div>
</div>
```

# CSS

```css
html {
  box-sizing: border-box; /* 元素的內距和邊框將不會增加元素本身的寬度 */
  font-size: 10px; /* 設定 root 的大小，其他子元素用 rem 參照 */
  background: #8e24aa;
  background: linear-gradient(45deg, #42a5f5 0%, #478ed1 50%, #0d47a1 100%); /* 設定背景漸層 */
}

*,
*:before,
*:after {
  box-sizing: inherit; /* 繼承上層的 box-sizing 設定 */
}

body {
  margin: 0;
  text-align: center;
  font-family: 'Inconsolata', monospace;
}

.display__time-left {
  font-weight: 100;
  font-size: 20rem;
  margin: 0;
  color: white;
  text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.05);
}

.timer {
  display: flex;
  min-height: 100vh;
  flex-direction: column; /* 所有 button 垂直排列 */
}

.timer__controls {
  display: flex;
}

.timer__controls > * {
  flex: 1; /* 設定底下所有元素長度分配平均 */
}

.timer__controls form {
  flex: 1;
  display: flex;
}

.timer__controls input {
  flex: 1;
  border: 0;
  padding: 2rem;
}

.timer__button {
  background: none;
  border: 0;
  cursor: pointer;
  color: white;
  font-size: 2rem;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
  font-family: 'Inconsolata', monospace;
}

.timer__button:hover,
.timer__button:focus {
  background: rgba(0, 0, 0, 0.2);
  outline: 0;
}

.display {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.display__end-time {
  font-size: 4rem;
  color: white;
}
```

# JS

```js
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
```

* [js計數器方法setInterval()、clearInterval()、setTimeout()和clearTimeout()](https://segmentfault.com/a/1190000002475127)
