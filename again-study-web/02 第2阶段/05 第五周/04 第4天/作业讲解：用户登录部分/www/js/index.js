console.dir($.cookie('petname'))

var petname = $.cookie('petname')

if(petname){
    $('header').empty()
    $('<h3><span>' + petname + '</span> <small>退出</small></h3>').appendTo('header')
    $('header small').click(function(){
        $.get('/user/signout', null, function(res){
            if(res.code == 'success'){
                location.href = '/'
            }
        })
    })
    $('header span').click(function(){
        location.href = '/user.html'
    })
}