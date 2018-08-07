# Javascript30 - 010. Hold Shift to Check Multiple Checkboxes

![](https://mgleon08.github.io/JavaScript30/010.Hold-Shift-to-Check-Multiple-Checkboxes/images/thumbnail.png)

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/010.Hold-Shift-to-Check-Multiple-Checkboxes/index.html) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/010.Hold-Shift-to-Check-Multiple-Checkboxes)

用 js 選取多個 checkbox

# Selector

```js
// inbox class 底下的 input type 為 checkbox
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
```

# shiftKey

當觸發 event 時，shiftKey 是否為按住

```js
function handleCheck(e) {
  console.log(e.shiftKey)
  console.log(this.checked) // input 是否被勾選
}
```


# 概念

```js
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
let lastChecked
function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox)
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
        console.log('STarting to check them inbetween!')
      }

      if (inBetween) {
        checkbox.checked = true
      }
    })
  }

  lastChecked = this
}

checkboxes.forEach(check => check.addEventListener('click', handleCheck))
```

1. 每次都會紀錄 `lastChecked`
2. 直到按住 shift 點擊其中一個 checked
3. 重頭到尾片例整個 `checkbox`，如果碰到 `checkbox === this || checkbox === lastChecked` 就把 `inBetween = true` （相當於一個開一個關)
4. 只要是 `inBetween = true` 就把 `checkbox` 勾選起來

> 但實際上還是有些問題

> * e.g. 最後一個  `lastChecked` 是關閉，在 `shift` 去按別的 checkbox 應該就不能去選才對

* [CSS 選擇器參考手冊](http://www.w3school.com.cn/cssref/css_selectors.ASP)
