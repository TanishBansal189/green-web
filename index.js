require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT||8000
const userRoute = require('./routes/user')
const mongoose = require('mongoose')
const cookieParser= require('cookie-parser')
const {checkForAuthCookie}=require('./middlewares/auth')
mongoose.connect('process.env.MONGO_URL').then(e=>{
    console.log('MongoDB Connected  ')
})
app.set('view engine','ejs') 
app.set('views',path.resolve("./views"))
app.use(express.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname,'public')))  
app.use(cookieParser());
app.get('/',(req,res)=>{
     res.render('index',{
        user : req.user
     })
})
app.get('/rewards',(req,res)=>{
    res.render('reward')
})
app.get('/book',(req,res)=>{
    res.render('book')
})
app.post('/book',(req,res)=>{
    return res.render('success')
})
app.use('/user',userRoute)
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})  