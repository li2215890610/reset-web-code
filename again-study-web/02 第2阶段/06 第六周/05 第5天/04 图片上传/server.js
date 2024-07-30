var http = require('http');
var url = require('url');
// var formidable = require('formidable');

function start(route, handle) {
    function onRequest(req, res) {
        // 
        // var postData = ''
        // 
        var pathname = url.parse(req.url).pathname;
        console.log('request for' + pathname + 'received.');
        route(handle, pathname, res, req);
        // req.setEncoding('utf8');
        // req.addListener('data',function(postDataChunk) {
        //     postData += postDataChunk;
        //     console.log("Received POST data chunk '"+ postDataChunk + "'.");
        // });
        // req.addListener('end',function(){
        //     route(handle, pathname, res, postData);
        // });
        // 将response对象作为第三个参数传递给route()函数
        // route(handle, pathname, res);
        // 
        // res.writeHead(200,{'Content-Type':'text/plain'});
        // var content = route(handle, pathname);
        // res.write(content);
        // res.end();
    }
    http.createServer(onRequest).listen(8888,()=>{
           console.log('running...'); 
    })
}
exports.start = start;