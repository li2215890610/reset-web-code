document.forms[0].onsubmit = function (ev) {  
    // alert('表单要提交啦！')
    ev.preventDefault()
    // 阻止表单提交，因为我们要用Ajax提交数据
    
    // this是submit事件的表单，即form[0]
    var data = new FormData(this)
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == '200'){
                var data = JSON.parse(xhr.responseText)
                // alert(data.message)
                new Alert(data.message, function(){
                    // location.href = 'index.html'
                    location.href = '/'
                }).show()
            }
            else{
                // alert('很抱歉，留言没有成功，请稍后再试...')
                new Alert('很抱歉，留言没有成功，请稍后再试...').show()
            }
        }
    }
    
    xhr.open('POST', 'add')
    xhr.send(data)
}