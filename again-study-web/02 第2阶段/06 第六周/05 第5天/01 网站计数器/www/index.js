$.get('/counter', null, function(res){
    $('mark').text(res)
})