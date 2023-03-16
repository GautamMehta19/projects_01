const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/route')
const multer =require('multer')
const app = express()

app.use(express.json())
app.use(multer().any());

mongoose.connect('mongodb+srv://gautam:gautam123@cluster0.xorxp.mongodb.net/ImageByte_Project')

.then(res=> console.log('MongoDB is connected'))
.catch(err => console.log(err))

app.use('/', route)

app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Server is running on port no. 3000')
})