function setDate(){
  const now = new Date()

  const hourHand = classSelector('hour-hand')
  const hours = now.getHours()
  const hoursDegress = ((hours/12) * 360)
  hourHand.style.transform = setDeg(hoursDegress)

  const minHand = classSelector('min-hand')
  const mins = now.getMinutes()
  const minsDegress = ((mins/60) * 360)
  minHand.style.transform = setDeg(minsDegress)

  const secHand = classSelector('sec-hand')
  const secs = now.getSeconds()
  const secsDegress = ((secs/60) * 360)
  secHand.style.transform = setDeg(secsDegress)

  console.log("secs:"  + secs)
  console.log("mins:"  + mins)
  console.log("hours:" + hours)
}

function classSelector(klass) {
  return document.querySelector(`.${klass}`)
}

function setDeg(Degress){
  return `rotate(${Degress}deg)`
}

setInterval(setDate, 1000)
