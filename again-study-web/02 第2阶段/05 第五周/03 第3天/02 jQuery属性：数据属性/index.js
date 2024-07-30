var div = document.querySelector('div')
// div.dataset.name = '智游教育'
// div.dataset.course = 'H5'

// // 对应于data-name属性
// // 在查看器中也能看到值

// console.log(div.dataset.name)
// console.log(div.dataset.course)

// // 不要保存一个对象，会导致数据丢失！！
// div.dataset.student = {
//     name: 'ChangWei',
//     age: 3
// }

// var student = div.dataset.student
// console.dir(student)

// // 使用setAttribute可以
// // div.setAttribute('data-age', 3)

// div['id'] = 'myDiv'
// //下面的方法不行
// div['data-age'] = '3'


// 这种方法可以保存对象，在查看器上看不到！
// div.student = {
//     name: 'ChangWei',
//     age: 3
// }

// console.log(div.student)

// 下面的写法也可以

// div['student'] = {
//     name: 'ChangWei',
//     age: 3
// }

// console.log(div['student'])

// 总结：
// 标签的属性有2种
// 一种是标签作为普通对象的属性
// 这种属性通过 . 运算符访问或通过 ['key'] 访问
// 这种属性可以在调试器中看到

// 另一种是标签作为 HTML标签 的属性，如：
// <a href="http://www.zhiyou100.com">
// 这种属性通过 getAttribute/setAttribute 访问 
// 这种属性可以在查看器上看到

// 2种属性都可以自定义
/*------------------------------------------------*/


// $('div').data('name', '智游教育')
// console.log($('div').data('name'))
// // 查看器中观察不到


// $('div').data('student', {
//     name: 'ChangWei',
//     age: 3
// })

// // 可以保存对象
// console.log($('div').data('student'))


// $('div').removeData('student')
// console.log($('div').data('student'))
// 移除了之后再取会 undefined


