$('form').submit(function(ev){
    ev.preventDefault()
    
    var data = $(this).serialize()
    
    $.post('/user/signin', data, function(res){
        if(res.code == 'success'){
            location.href = '/'
        }
        else{
            alert(res.message)
        }
    })
})