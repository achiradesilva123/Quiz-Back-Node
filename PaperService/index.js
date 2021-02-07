const mongoose = require('mongoose');
const cors=require('cors');
const express=require('express');
var bodyParser = require('body-parser');

const paperRoute=require('./route/paperRoute');

const app=express();
app.use(cors());
app.use(bodyParser());
app.use(express.json({limit:"50mb"}));

mongoose.connect('mongodb://localhost/quiz', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    app.listen(3000,()=>{
        console.log("login-Serever has been run on 3000");
    })
}).catch(err=>{
    console.log("Try again");
});
app.use('/api/v1/paper',paperRoute);
