// 数组的解构赋值
// 本质上属于“模式匹配”，只要等号两边的模式相同即可
let [a, b, c] = [1, 2, 4]
console.log(a)
console.log(b)
console.log(c)

let [foo, [[bar], baz]] = [11, [[22], 33]]
console.log(foo)
console.log(bar)
console.log(baz)

let [num1, , num2] = [100, 200, 300]
console.log(num1)
console.log(num2)

// ...表示扩展运算符
// 用在数组前面，将数组元素转为参数序列
console.log(...[1, 2, 3])
console.log(1, ...[2, 3, 4], 5)
console.log([...document.querySelectorAll('p')])
// 用于函数调用
function add (x, y){return x + y}
const numbers = [4, 38]
let result = add(...numbers)
console.log(result)

let [head, ...tail] = [1, 2, 3, 4]
console.log(head)
console.log(tail)

// 如果解构不成功，变量的值就是undefined
let [x, y, ...z] = ['a']
console.log(x)
console.log(y)
console.log(z)

// 如果等号右边不是数组，将报错
// let [tmp] = {}
// let [tmp] = 100

// 指定默认值
let [course = 'html5'] = []
console.log(course)

// 对象的解构赋值
let {name, age} = {name: 'zhangsan', age: 9}
console.log(name)
console.log(age)

// 与数组的解构不同，对象的属性没有顺序，变量名必须与属性名一致才能解构成功
let {width, height} = {height: 183, width: 80}
console.log(width)
console.log(height)

let {nbc} = {abc: 'hello', bbc: 'world'}
console.log(nbc)

// 解构嵌套的对象
let obj = {
    m: [
        'hello',
        {n: 'world'}
    ]
}
let {m, m: [str, {n}]} = obj
console.log(m)
console.log(n)

// 字符串的解构赋值
const [x1, x2, x3, x4, x5] = 'html5'
console.log(x1)
console.log(x2)
console.log(x3)
console.log(x4)
console.log(x5)

// 类似数组的对象都有一个length属性，可以对这个属性解构赋值
let {length: len} = 'javascript'
console.log(len)

