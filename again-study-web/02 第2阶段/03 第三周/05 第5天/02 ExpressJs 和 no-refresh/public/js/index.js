// var iframe = document.getElementById('result')
var iframe = document.querySelector('#result')
iframe.onload = function(){
    var result = iframe.contentWindow.document.body.innerText
    alert(result)
}