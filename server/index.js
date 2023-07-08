const express = require("express");

const app = express()

app.get("/",(req,res) => {
    res.send('I am a endpoint');
})

app.listen(7777 ,(req,res) => {
    console.log('listening on port');
})