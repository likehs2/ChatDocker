var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');

app.get('/home', function(req, res){
    res.render('../view/index')
})

app.get('/', function(req, res){

})

app.listen(3000, function(){
    console.log('Executando na porta 3000')
})