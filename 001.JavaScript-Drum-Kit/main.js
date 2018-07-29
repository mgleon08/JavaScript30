function playSound(e) {
  let keyCode = e.keyCode || this.getAttribute('data-key')
  const key = document.querySelector(`.key[data-key="${keyCode}"]`)
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return // skip it if it's not a transform
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
window.addEventListener('keydown', playSound)
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition)
  key.addEventListener('click', playSound)
})
