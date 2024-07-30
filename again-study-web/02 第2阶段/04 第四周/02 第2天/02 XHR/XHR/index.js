// ES6  EcmaScript v6 
// ECMA 欧州计算机制造商协会 负责制订JavaSript语言的标准
// W3C  HTML & CSS 负责

const exp = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')

const app = exp()
const form = multer()

app.use(exp.static('public'))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/comment', (req, res) => {
    console.log('收到GET请求：' + JSON.stringify(req.query))
    res.status(200).send('感谢您的评价！')
})

app.post('/comment', form.array(), (req, res) => {
    console.log('收到POST请求：' + JSON.stringify(req.body))
    res.status(200).send('感谢您的评价！')
})

app.listen(3000, () => console.log('Server Running...'))
