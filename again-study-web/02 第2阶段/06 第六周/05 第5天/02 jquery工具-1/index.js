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
// var arrAbc = $.merge(arr, 'zhang')
// console.log(arrAbc)

// arrAbc = arr.concat(abc)
// console.log(arr)

// console.log($.makeArray('智游教育'))
// // console.log('智游教育'[3])
// console.log(Array.prototype.slice.call('智游教育'))
// console.log(Array.from('智游教育'))

// var evens = $.grep(arr, function(item, index){
//     return item % 2 == 0
// })

// console.log(evens)