// var div = document.querySelector('div')

// div.onclick = function(){
//     // if(div.classList.contains('blue-div')){
//     //     div.classList.remove('blue-div')
//     // }
//     // else{
//     //     div.classList.add('blue-div')        
//     // }
    
//     div.classList.toggle('blue-div')
// }


/*------------------------------------------------*/


// $('div').click(function(){
//     // if($('div').hasClass('blue-div')){
//     //     $('div').removeClass('blue-div')
//     // }
//     // else{
//     //     $('div').addClass('blue-div')
//     // }
    
//     $('div').toggleClass('blue-div')
// })


/*------------------------------------------------*/


// 使用原生的方法要写循环
// var lis = document.querySelectorAll('li')

// for(var i = 0; i < lis.length; i++){
//     var li = lis[i]
    
//     // li.class = 'red-text'
//     // class 是关键字，所以上面的语句不正确
//     // li.className = 'red-text'
//     // 使用className将覆盖原来通过class属性设置的样式
    
//     li.classList.add('red-text')
// }   


// 使用jQuery一行代码搞定
// $('li').addClass('red-text')
$('li:odd').addClass('red-text')