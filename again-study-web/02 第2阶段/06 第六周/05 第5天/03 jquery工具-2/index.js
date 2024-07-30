var arr = [1,2,3,4,5,6,7,8]

// // $.each(arr, (i, item) => {
// //     console.log(`${i}：${item}`)
// // })

// arr.forEach((item, i) => {
//     console.log(`${i}：${item}`)
// })

// var p = {
//     name: 'ZhangSan',
//     age: 6,
//     isMale: true
// }

// Object.defineProperty(p, 'birthDate', {
//     writable:true,
//     enumerable: false
// })

// p.birthDate = new Date()

// $.each(p, (key, val) => {
//     console.log(`属性-${key}：${val}`)
// })

// console.log(`birthDate->${p.birthDate}`)

// for(var key in p){
//     console.log(`${key}=>${p[key]}`)
// }


// var newArr = $.map(arr, (item, i) => {
//     return item * i
// })

// console.log(newArr)

// var pass = $(':password').map(ele => {
//     return $(ele).val()
// })

// if(pass[0] == pass[1]){
    
// }

// newArr = arr.map((i, item) => {
//     return item * i * 2
// })

// console.log(newArr)

// console.log(    $.inArray(16, arr)   )

// var abc = ['a', 'b', 'c', 'd']

// // 会将字符串拆分成字符合并到数组中
// // 字符串也是一个类似数组的对象
// // merge合并后会导致第1个参数发生变化
// var arrAbc = $.merge(arr, 'chang')
// console.log(arrAbc)

// arrAbc = arr.concat(abc)
// console.log(arr)

// console.log($.makeArray('智游教育'))
// // console.log('智游教育'[3])
// console.log(Array.prototype.slice.call('智游教育'))
// console.log(Array.from('智游教育'))

// var evens = $.grep(arr, function(item, index){
//     return item % 2 == 0
// }, false)

// console.log(evens)

// var odds = arr.filter((item, i, arr) => {
//     return !!(item % 2 == 1)
// })

// console.log(odds)

// var student = {
//     name: 'ZhangSan',
//     age: 3,
//     sayHello: function(){
//         console.log(`我的名字是${this.name}，很高兴认识你！`)
//     }
//     // sayHello: () => {
//     //     console.log(`我的名字是${this.name}，很高兴认识你！`)
//     // }
//     // =>函数不会形成function作用域，所以其中的this会指向全局作用域
// }

// var teacher = {
//     age: 33,
//     course: 'H5',
//     teach: function(){
//         console.log(`我是${this.course}老师，很高兴和大家一起学习`)
//     }
// }

// var methods = {
//     eat: () => {
//         console.log('我正在吃饭')
//     },
//     sleep: () => {
//         console.log('我要睡觉了')
//     }
// }

// // var result = $.extend(student, teacher)

// // console.log(student)
// // console.log(teacher)
// // console.log(result)

// $.extend(student, methods)
// $.extend(teacher, methods)

// // mixin
// // 混入

// student.eat()
// student.sayHello()
// teacher.sleep()
// teacher.teach()

// var student = {
//     name: 'ZhangSan',
//     age: 3,
//     length: 4,
//     '0': 'zero',
//     '3': 'three'
// }

// var arr1 = ['a', 'b', 'c']

// $.extend(arr, student)
// console.dir(arr)
// console.log(arr.name)

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }



// $.extend(student, arr)

// console.dir(student)

// var newArr = $.extend(arr1, arr)
// console.dir(newArr)


// var student = {
//     name: 'ZhangSan',
//     course: 'H5'
// }

// var teacher = {
//     name: 'Tom',
//     course: {
//         name: 'HTML5',
//         room: {
//             location: '产业园',
//             floor: 6,
//             no: '605'
//         }
//     }
// }

// $.extend(true, student, teacher)

// console.dir(student)

// var nodes = $.parseHTML('<ul><li>H5</li><li>JS</li>'+
// '<iframe src="index2.html"></iframe></ul>', true)

// document.body.appendChild(nodes[0])

var student = {
    name: 'ZhangSan'
}

$('body').css('height', '400px').click($.proxy(function(){
    alert(this.name)
    console.dir(arguments)
}, student, 123, 'abc'))

$('body').css('height', '400px').click(function(a1,a2,ev){
    alert(this.name)
    console.log(a1 + a2)
    console.dir(arguments)
}.bind(student, 123, 'abc'))