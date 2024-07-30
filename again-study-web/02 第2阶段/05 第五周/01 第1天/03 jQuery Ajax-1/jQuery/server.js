const   exp = require('express'),
        bodyParser = require('body-parser'),
        app = exp()
        
app.use(exp.static('wwwroot'))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/user/login', (req, res) => {
    console.dir(req.query)
    setTimeout(() => {
        res.status(200).json({status:'success', message:'登录成功！'})
    }, 2 * 1000)
})

app.post('/api/user/login', (req, res) => {
    console.dir(req.body)
    // console.log(req.get('Y-Student-Name'))
    // req.get获取请求头
    res.set('Y-School', 'Zhiyou')
    // res.set设置响应头
    
    setTimeout(() => {
        res.status(200).json({status:'success', message:'登录成功！'})
    }, 5 * 1000)
})

app.listen(3000, () => console.log('Server Running...'))