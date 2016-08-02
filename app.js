var express = reqquire('express')
var app = express()

app.listen(9000)
app.use(require('ejs').renderFile('html'))
app.use(express.static('public'))
app.get('/',(req,res)=>res.render('index.html'))




