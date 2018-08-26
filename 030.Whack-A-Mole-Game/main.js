const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')
// 最後一個洞
let lastHole
// 是否結束時間
let timeUp = false
// 分數
let score = 0

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

// 隨機出現老鼠的洞
function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length)
  const hole = holes[idx]
  // 避免連續出現同樣的洞，如果再出現就在重新 randomHole
  if (hole === lastHole) {
    console.log('Ah nah thats the same one bud')
    return randomHole(holes)
  }
  lastHole = hole
  return hole
}

// 地鼠出現
function peep() {
  // 隨機時間
  const time = randomTime(200, 1000)
  // 隨機出現在某個洞
  const hole = randomHole(holes)
  // 加上 up class 讓老鼠出現
  hole.classList.add('up')
  // 出現幾秒後出下去
  setTimeout(() => {
    hole.classList.remove('up')
    if (!timeUp) peep()
  }, time)
}

function startGame() {
  // 分數歸零
  scoreBoard.textContent = 0
  score = 0
  // 時間重算
  timeUp = false
  // 開始出現老鼠
  peep()
  // 設定十秒後結束
  setTimeout(() => (timeUp = true), 10000)
}

// 打地鼠
function bonk(e) {
  // isTrusted 避免腳本攻擊
  if (!e.isTrusted) return // cheater!
  score++
  this.classList.remove('up')
  scoreBoard.textContent = score
}

moles.forEach(mole => mole.addEventListener('click', bonk))
