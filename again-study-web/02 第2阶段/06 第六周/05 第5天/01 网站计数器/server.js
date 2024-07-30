const exp = require('express')
const fs = require('fs')
const app = exp()

const fileName = 'counter.txt'

app.use(exp.static('www'))

app.get('/counter', (req, res) => {
    function send(count){
        res.status(200).send(count + '').end()
    }
    
    fs.exists(fileName, exists => {
        if(exists){
            fs.readFile(fileName, (err, data) => {
                var count = parseInt(data)
                count++
                
                if(!isNaN(count)){
                    fs.writeFile(fileName, count, err => {
                        send(err ? 0 : count)
                    })
                }
                else{
                    send(0)
                }
            })
        }
        else{
            fs.appendFile(fileName, '1', err => {
                console.log(err)
                send(err ? 0 : 1)
            })
        }
    })
})

app.listen(3000, () => console.log('正在运行...'))