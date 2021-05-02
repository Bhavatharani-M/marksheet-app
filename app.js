const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/static',express.static('public'));
// app.use(express.static('css'));
const myroutes=require('./controller/routes/route');

app.use(myroutes);
app.set("views","./views");
app.set("view engine","ejs");
app.listen(1102,()=>{
    console.log("Server is listening at port 1102");
});