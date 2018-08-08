Javascript30 - 011. Custom HTML5 Video Player

![](https://mgleon08.github.io/JavaScript30/011.Custom-HTML5-Video-Player/images/thumbnail.png)

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/011.Custom-HTML5-Video-Player/index.html) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/011.Custom-HTML5-Video-Player)

利用 js 打造自己的 video player

# player

```js
<div class="player">
  <video class="player__video viewer" src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164"></video>

  <div class="player__controls">
    <div class="progress">
      <div class="progress__filled"></div>
    </div>
    <button class="player__button toggle" title="Toggle Play">►</button>
    <input type="range" name="volume" class="player__slider" min=0 max="1" step="0.05" value="1">
    <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
    <button data-skip="-10" class="player__button">« 10s</button>
    <button data-skip="25" class="player__button">25s »</button>
  </div>
</div>
```

# togglePlay

透過偵測 `video.paused` 去切換要播放還是暫停

```js
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')

function togglePlay() {
  const method = video.paused ? 'play' : 'pause'
  video[method]()
  // 等同於 video.play()
}

video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)
```


# updateButton

點擊更換 button 圖案

```js
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'
  toggle.textContent = icon
}

video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
```

# skip

透過 `video.currentTime` 調整影片時間

```js
function skip() {
  // this.dataset.skip 抓取 html 上 data-skip 的值
  video.currentTime += parseFloat(this.dataset.skip);
 }
skipButtons.forEach(button => button.addEventListener('click', skip))
```

# handleRangeUpdate

透過 html 上定義好的 name `volume` `playbackRate`，來抓取這兩個 video 的屬性，進而改變它的值

```js
function handleRangeUpdate() {
  video[this.name] = this.value
}
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))
```


# handleProgress

影片自動前進時的進度條

* video 特殊的 event `timeupdate`，只要 currentTime update 就會被觸發
* `flexBasis` Set the initial length of a flex-item

> (目前時間 / 影片長度) * 100 = 目前的進度百分比


```js
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}
```

* [Style flexBasis Property](https://www.w3schools.com/jsref/prop_style_flexbasis.asp)

# scrub

移動進度條，影片跟著調整

* 透過 `let mousedown` 偵測只要在滑鼠點擊時移動，才會觸發 `scrub function`


> (點擊進度條位置的長度 / 進度條總長度) * 影片長度 = 目前進度的百分比

```js
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}

let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)
```

* [JavaScript 事件參考手冊](http://www.w3school.com.cn/js/jsref_events.asp)
