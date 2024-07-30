const   exp = require('express'),
        bodyParser = require('body-parser'),
        multer = require('multer'),
        app = exp()

app.use(exp.static('static'))
app.use(bodyParser.urlencoded({extended:true}))

app.post('/add', (req, res) => { 
    var message = {
        content: req.body.content,
        time: new Date(),
        ip: req.ip
    }
    
    console.log(JSON.stringify(message))
    
    
    res.status(200).json({ message: '感谢您的留言！' })
})

app.listen(3000, () => console.log('Server Running..'))