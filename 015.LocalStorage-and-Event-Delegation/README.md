# Javascript30 - 015. LocalStorage and Event Delegation

![](https://mgleon08.github.io/JavaScript30/015.LocalStorage-and-Event-Delegation/images/thumbnail.png)

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/015.LocalStorage-and-Event-Delegation/index.html) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/015.LocalStorage-and-Event-Delegation)

了解 LocalStorage and Event Delegation


# custom checkbox

```css
/* 將原本的 checkbox display:none */
input[type="checkbox"] {
    display: none;
}

input[type="checkbox"] + label:before {
    content: '⬜️';
    margin-right: 10px;
}

/* 利用 偽元素pseudoElement 新增假的 checkbox */
input[type="checkbox"]:checked + label:before {
    content: '🌮';
}
```

# addItem

> `localStorage` 儲存的資料必須先用 `JSON.stringify` 轉成 `string` 否則回變成 `[object Object]`

```js
const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem('items')) || []

function addItem(e){
  // form submit 後會自動 reload，因此要加上 e.preventDefault() 防止 submit 的時候 reload page
  e.preventDefault()
  // this 指的就是 <form>
  const text = this.querySelector('[name=item]').value
  const item = {
    text: text,
    done: false
  }
  items.push(item)
  populateList(items, itemsList)
  // 將資料存取在 localStorage
  localStorage.setItem('items', JSON.stringify(items))
  // 表單的內容全部清空
  this.reset()
}
```

* [詳說 Cookie, LocalStorage 與 SessionStorage](http://jerryzou.com/posts/cookie-and-web-storage/)


# populateList

```js
// 將 items 轉成 html 塞在 platesList class 裡面
function populateList(plates = [], platesList){
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `
  }).join('')
}
```

# toggleDone

當 checkbox 被勾選後，把資料存回 `LocalStorage`

原本可以這樣做，但這樣後來新增的 item 就不會被監聽到

```js
const checkBoxes = document.querySelectorAll('input')
checkBoxes.forEach(input => input.addEventListener('click', () => alert('hi') ) )
```

因此改監聽整個 `ul`

```js
function toggleDone(e) {
  // 監聽 input 這個 event
  if (!e.target.matches('input')) return // skip this unless it's an input
  // 取得 checkbox 的 data-index 值
  const el = e.target
  const index = el.dataset.index
  // 切換 done true/false
  items[index].done = !items[index].done
  // 將更新後的 items 在儲存到 localStorage
  localStorage.setItem('items', JSON.stringify(items))
  // 重新渲染 list
  populateList(items, itemsList)
}

itemsList.addEventListener('click', toggleDone)
```
