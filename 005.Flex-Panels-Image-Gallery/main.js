const panels = document.querySelectorAll('.panel')
let lastPanel

function toggleOpen(){
  console.log('Hello');
  if (lastPanel !== this) {
    if(lastPanel !== undefined){
      lastPanel.classList.remove('open')
    }
    lastPanel = this
  }

  this.classList.toggle('open')
}

function toggleActive(e) {
  console.log(e.propertyName)
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))
