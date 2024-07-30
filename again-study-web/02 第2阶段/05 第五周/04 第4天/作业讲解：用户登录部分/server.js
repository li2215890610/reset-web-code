const   exp = require('express'),
        bodyParser = require('body-parser'),
        cookieParser = require('cookie-parser'),
        multer = require('multer'),
        fs = require('fs')
        
       
        // 创建上传文件保存设置信息 
const   storage = multer.diskStorage({
            // 保存的文件夹
            destination: 'uploads',
            // 使用函数生成文件名
            filename: function(req, file, callback){
                var petname = req.cookies.petname
                callback(null, `${petname}.jpg`)
            }
        }),
        // 上传文件设置
        uploads = multer({storage})
        
        
        
const   app = exp()


app.use(exp.static('www'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())

app.post('/user/register', (req, res) => {
    // 在body中添加ip和time数据
    req.body.ip = req.ip
    req.body.time = new Date()
    
    console.log(req.body)
    

    function send(code, message){
        res.status(200).json({code, message})
    }
    
    //定义一函数，避免代码重复！下面会调用2次
    function saveFile(){
        var fileName = `users/${req.body.petname}.txt`
        
        fs.exists(fileName, (exists) => {
            if(exists){
                send('registered', '用户名已经注册过了！')
            }
            else{
                fs.appendFile(fileName, JSON.stringify(req.body), (err) => {
                    if(err){
                        send('file error', '抱歉，系统错误...')
                    }
                    else{
                        send('success', '恭喜！注册成功！请登录...')
                    }
                })
            }
        })
    }
   
    fs.exists('users', (exists) => {
        if(exists){
            saveFile()
        }
        else{
            fs.mkdir('users', (err) => {
                if(err){
                    send('file error', '抱歉，系统错误...')
                }
                else{
                    saveFile()
                }
            })
        }
    })
})


app.post('/user/signin', (req, res) => {
    var fileName = `users/${req.body.petname}.txt`
    
    function send(code, message){
        res.status(200).json({code, message})
    }
    
    fs.exists(fileName, (exists) => {
        if(exists){
            fs.readFile(fileName, (err, data) => {
                if(err){
                    send('file error', '抱歉，系统错误...')
                }
                else{
                    var user = JSON.parse(data)
                    if(user.password == req.body.password){
                        
                        res.cookie('petname', req.body.petname)
                        
                        send('success', '登录成功...')
                    }
                    else{
                        send('signin error', '用户名或密码错误！')
                    }
                }
            })
        }
        else{
            send('register error', '用户名未注册！')
        }
    })
})

app.get('/user/signout', (req, res) => {
    res.clearCookie('petname')
    res.status(200).json({code: 'success'})
})

app.post('/user/photo', uploads.single('photo'), (req, res) => {
    res.status(200).send('上传成功')
})

app.listen(3000, () => console.log('正在运行...'))