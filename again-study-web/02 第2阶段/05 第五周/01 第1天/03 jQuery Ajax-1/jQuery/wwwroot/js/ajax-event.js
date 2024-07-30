// var btn1 = document.querySelector('button')
// var btn2 = document.querySelector('button:nth-child(2)')

// btn1.onclick = function(ev){
//     alert('按扭1')
// }

// btn2.onclick = function(ev){
//     alert('按扭2')
// }

// $('CSS筛选器') 可以获取所有符合条件的标签元素（有可能是多个）
//                 这些标签元素都被放入jQuery容器中
// .click(function) 将上一步得到所有标签元素都挂接一个onclick事件监听函数
// $(this) 将当前监听事件的标签元素放到jQuery容器中
// .data('name') 获取标签元素data-name属性的值
//                 相当于 dataset.name 

var ajaxOptions = {
    url: '/api/user/login',
    data: {name: 'ChangWei', password: '123456'},
    success: function(data){
        layer.alert(data.message)
    },
    type: 'POST'
}
// 设置每一次请求都使用的参数，即全局设置
// 如果某一次请求的参数设置为不同的值，则会覆盖全局设置
// 使用全局设置之后，每一次发起ajax请求都可少传参数
$.ajaxSetup(ajaxOptions)

// ajaxStart监听页面上所有的ajax事件
// ajaxStart表示Ajax请求刚刚开始
// ajaxError表示Ajax请求失败
// ajaxComplete表示Ajax请求完成（无论成功还是失败都会Complete）
$(document).ajaxStart(function(){
    layer.load(2)
}).ajaxError(function(){
    layer.alert('网络故障，请稍后重试...', {icon:5}, function(){
        layer.closeAll()
    })
}).ajaxComplete(function(){
    layer.closeAll()
})
                
$('button').click(function(ev){
    if($(this).data('method') == 'GET'){
        $.ajax({type:'GET'})
    }
    else{
        $.ajax({})
    }
})