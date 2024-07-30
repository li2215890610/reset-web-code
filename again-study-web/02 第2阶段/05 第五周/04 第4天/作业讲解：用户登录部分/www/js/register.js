$('form').submit(function(ev){
    ev.preventDefault()
    
    var pass = $(':password').map(function(){
        return $(this).val()
    })

    console.dir(pass)
    
    if(pass[0] == pass[1]){
        console.log('输入密码相同，准备提交数据')
        
        var data = $(this).serialize()
        console.log(data)
        
        $.post('/user/register', data, function(res){
            console.log(res)
            alert(res.message)
            
            if(res.code == 'success'){
                location.href = '/signin.html'
            }
        })
    }
    else{
        alert('两次输入的密码不一样！')
    }
})