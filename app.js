const express=require('express')
const app=express();
var exphbs  = require('express-handlebars');

//static files
app.use(express.static('public'))

//body-parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


//handlebars

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//setup routes
app.use('/',require('./routes/routes'))


app.listen(3000,()=>{
    console.log('server is running on port 3000')
})