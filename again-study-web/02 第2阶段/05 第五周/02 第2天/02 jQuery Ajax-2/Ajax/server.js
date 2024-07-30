const   exp = require('express'),
        app = exp()

app.use(exp.static('static'))

app.listen(3000, () => console.log('Running...'))