var data = new FormData()
data.append('petname', '张三')
data.append('score', 5)
data.append('content', '我是一名工程师')

var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function() {
    if(xhr.readyState == 4){
        console.log(xhr.responseText)
    }
}

xhr.open('POST', 'comment')
xhr.send(data)