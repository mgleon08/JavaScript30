# Javascript30 - 003. CSS + JS Clock

![](https://mgleon08.github.io/JavaScript30/003.Playing-with-CSS-Variables-and-JS/images/thumbnail.png)

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/003.Playing-with-CSS-Variables-and-JS/index.html) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/003.Playing-with-CSS-Variables-and-JS)

利用 js 來更新 css 的效果!

# range input

* `data-sizing`: 自行新增屬性，用來判斷 size 的單位

```html
<label for="spacing">Spacing:</label>
<input type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">
```

# dataset

透過 js 抓取 `this.dataset`，就可以拿到自行新增屬性的值，回傳一個 object 回來，可以多個

```js
function handleUpdate() {
  this.dataset
}
```

也可以用 getAttribute

```js
function handleUpdate(){
  this.getAttribute('data-sizing')
}
```


# color input

在 browser 上產生，color 選擇器

```html
<!-- value 一開始預設的值 -->
<label for="base">Base Color</label>
<input type="color" name="base" value="#ffc600">
```

# :root

css 原生變數定義

```css
:root {
/* 定義變數的方法 */
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}

img {
/* 變數的使用方式 */
  padding: var(--spacing);
}
```

* [SASS, LESS 退散，原生 CSS 可以使用變數啦！](http://muki.tw/tech/native-css-variables/)

# filter

css 的濾鏡效果

```css
img {
  filter: blur(10px); /* blur 模糊 */
}
```

* [MDN filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)

# querySelectorAll

可抓取節點上的 dom，並且回傳值會是 `NodeList` 不是 `array`

> NodeList 不是 Array，但仍可以使用 forEach() 方法來進行迭代，但有些還是只有 Array 才會有

```js
document.querySelectorAll('.controls input')
```

* [MDN NodeList](https://developer.mozilla.org/zh-TW/docs/Web/API/NodeList)
* [將 Node List 轉換成陣列](http://www.jstips.co/zh_tw/javascript/converting-a-node-list-to-an-array/)

# setProperty

更改屬性

```js
function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  // 更改 style 的屬性，
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}
```
