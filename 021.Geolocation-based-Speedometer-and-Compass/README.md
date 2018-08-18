# Javascript30 - 021. Geolocation based Speedometer and Compass
<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/021.Geolocation-based-Speedometer-and-Compass/index.html) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/021.Geolocation-based-Speedometer-and-Compass)

利用 js 來玩內建在 Chrome 瀏覽器裡面的語音辨識 API

# 安裝套件

跟之前一樣會用到 browser-sync

```js
npm install browser-sync
npm start
```

# JS

```js
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
```

* [地理位置定位 (Geolocation)](https://developer.mozilla.org/zh-TW/docs/Web/API/Geolocation/Using_geolocation)
