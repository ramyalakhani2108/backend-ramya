require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT 

app.get('/', (req,res)=>{
    res.send('Hello World!');
})

app.get('/twitter', (req,res)=>{
    res.send('This is the about page!');
})

app.get('/login', (req,res)=>{
    res.send('<h1>Please login here</h1>');
})




app.listen(port, ()=>{
    console.log('App is litening on port '+ port);
});