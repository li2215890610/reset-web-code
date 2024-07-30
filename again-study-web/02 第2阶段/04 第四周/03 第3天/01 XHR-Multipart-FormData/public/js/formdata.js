// 通过FormData对象可以组装一组用 XMLHttpRequest发送请求的键/值对
// 它可以更灵活的发送表单数据，因为可以独立于表单使用
var data = new FormData()

data.append('username', '小智')
data.append('age', 10)
data.append('content', '我是你的小助手')

var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        console.log('请求已完成')
        console.log(xhr.responseText)
    }
}

// 参数1：请求方式
// 参数2：url
// 参数3：同步或异步，默认是true(异步)
// 改为false可以变为同步请求，同步请求会造成页面卡死，直到请求完成
// 通常会影响用户体验，不建议使用
xhr.open('POST', 'http://127.0.0.1:3000/comment', true)

// 同步请求时，会在xhr.send()方法调用之后进入等待状态
xhr.send(data)

console.log('我是否等待，直到网络请求完成？')