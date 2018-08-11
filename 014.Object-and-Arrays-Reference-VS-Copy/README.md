# Javascript30 - 014. Object and Arrays - Reference VS Copy

<!-- more -->

# [Demo](https://mgleon08.github.io/JavaScript30/014.Object-and-Arrays-Reference-VS-Copy/index.html) | [Github](https://github.com/mgleon08/JavaScript30/tree/master/014.Object-and-Arrays-Reference-VS-Copy)

講解 js 中 Object 和 Array 的 reference & copy


# string & numbers

string & numbers 是用 copy 的方式

```js
// start with strings, numbers and booleans
let age = 100
let age2 = age
console.log(age, age2)
// 100 100
age = 200
console.log(age, age2)
// 200 100

let name = 'Wes'
let name2 = name
console.log(name, name2)
// Wes Wes
name = 'wesley'
console.log(name, name2)
// wesley Wes
```

# array

array 是用 reference 的方式

```js
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']

// and we want to make a copy of it.
const team = players
console.log(players, team)
// ["Wes", "Sarah", "Ryan", "Poppy"]
// ["Wes", "Sarah", "Ryan", "Poppy"]

// You might think we can just do something like this:
team[3] = 'Lux'
console.log(players, team)
// ["Wes", "Sarah", "Ryan", "Lux"]
// ["Wes", "Sarah", "Ryan", "Lux"]
```

## Copy array

### slice

```js
const team2 = players.slice()
team2[3] = 'team2'
console.log('players: ' + players + ' team2: ' + team2)
// players: Wes,Sarah,Ryan,Lux team2: Wes,Sarah,Ryan,team2
```

### concat

```js
const team3 = [].concat(players)
team3[3] = 'team3'
console.log('players: ' + players + ' team3: ' + team3)
// players: Wes,Sarah,Ryan,Lux team3: Wes,Sarah,Ryan,team3
```

### new ES6 Spread

```js
const team4 = [...players]
team4[3] = 'team4'
console.log('players: ' + players + ' team4: ' + team4)
// players: Wes,Sarah,Ryan,Lux team4: Wes,Sarah,Ryan,team4
```

```js
const team5 = Array.from(players)
team4[3] = 'team5'
console.log('players: ' + players + ' team5: ' + team5)
// players: Wes,Sarah,Ryan,Lux team5: Wes,Sarah,Ryan,team5
```

# object

object 也是用 reference 的方式

```js
const person = {
  name: 'Wes Bos',
  age: 80
}
const captain = person
captain.number = 99
console.log(person)
// {name: "Wes Bos", age: 80, number: 99}
console.log(captain)
// {name: "Wes Bos", age: 80, number: 99}
```

## Copy (Shallow copy vs Deep copy)

object 因為有層級的關係，所以如果只使用 `Object.assign`，只會 copy 第一層，更深層的還是用 `reference`，必須要用 `JSON.parse(JSON.stringify(wes))` 來做 `Deep copy`

### new ES6 Spread

```js
const cap2 = Object.assign({}, person, { number: 99, age: 22 })
console.log(person)
console.log(cap2)
// {name: "Wes Bos", age: 80, number: 99}
// {name: "Wes Bos", age: 22, number: 99}
```

```js
const cap3 = {...person}
cap3['age'] = 33
console.log(person)
console.log(cap3)
// {name: "Wes Bos", age: 80, number: 99}
// {name: "Wes Bos", age: 33, number: 99}
```

### Deep copy


```js
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
}

console.log(wes)
const dev = Object.assign({}, wes)
dev['social']['twitter'] = 'Shallow Copy'
const dev2 = JSON.parse(JSON.stringify(wes))
dev2['social']['twitter'] = 'Deep Copy'
console.log(dev)
console.log(dev2)
```

* [[Javascript] 關於 JS 中的淺拷貝和深拷貝](http://larry850806.github.io/2016/09/20/shallow-vs-deep-copy/)
