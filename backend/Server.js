const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./Routes');

app.use(cors());
app.use(express.json())

const uri = 'mongodb+srv://milosstories64:yvTeETYdGenzuHUj@cluster0.c5dphhw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async()=>{
    try{
       await mongoose.connect(uri);
        console.log("Connected to Mongoos");
    }catch(err){
        console.log("Mongoos Connecting error :( ",err);
    }
}

connect();
const server = app.listen(3002,'localhost',()=>{
    console.log(`node server is listenconst express = require('express');
ing to ${server.address().port}`);
});

//
app.use('/api',router); 