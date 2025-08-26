const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./Controller');

app.use(cors());
app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use(express.json())


app.get('/users',(req,res)=>{
    controller.getUsers((req,res,next) =>{
        res.send();
    })
}) 

app.post('/user',(req,res)=>{
    controller.addUser(req.body,(callback)=>{
        res.send();
    })
})
module.exports = app;
//milosstories64
//yvTeETYdGenzuHUj
//mongodb+srv://milosstories64:yvTeETYdGenzuHUj@cluster0.c5dphhw.mongodb.net/