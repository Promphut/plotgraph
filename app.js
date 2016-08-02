var express = require('express')
var app = express()

app.listen(9000)
app.engine('html', require('ejs').renderFile)
app.use(express.static('public'))
app.get('/',(req,res)=>res.render('index.html'))




