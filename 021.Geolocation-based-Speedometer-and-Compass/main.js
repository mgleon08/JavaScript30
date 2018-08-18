const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')

// watchPosition 可以取得地理位置資訊
navigator.geolocation.watchPosition((data) => {
  console.log(data)
  // 取得速度
  speed.textContent = data.coords.speed
  // 取得方位角度
  arrow.style.transform = `rotate(${data.coords.heading}deg)`
}, (err) => {
  console.error(err)
})
