$('button').click(function(){
    $('article').load('info.html')
})

$('a').click(function(){
    $.getJSON('data.json', null, function(jsonData){
        alert(jsonData.message)
    })
})

$('input').click(function(){
    $.getScript('script.js', function(){
        alert('我是来自index.js的问候')
    })
})