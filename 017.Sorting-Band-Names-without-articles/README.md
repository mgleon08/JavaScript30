# Javascript30 - 017. Sorting Band Names without articles

![](https://mgleon08.github.io/JavaScript30/017.Sorting-Band-Names-without-articles/images/thumbnail.png)

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/017.Sorting-Band-Names-without-articles/index.html) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/017.Sorting-Band-Names-without-articles)

# JS

```js
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog']

function strip(bandName) {
 // 透過 regex 把開頭為 a the an 切換成空白，再去比對
  return bandName.replace(/^(a |the |an )/i, '').trim()
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1)

document.querySelector('#bands').innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('')

console.log(sortedBands)
```
