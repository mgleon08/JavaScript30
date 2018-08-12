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
  // 將資料存取在 localStorage，當整個瀏覽器關掉時才會被清空
  localStorage.setItem('items', JSON.stringify(items))
  // 表單的內容全部清空
  this.reset()
}

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

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)

// refresh 第一次先將 localStorage 的資料轉成 html
populateList(items, itemsList)
