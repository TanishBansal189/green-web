const {Router} = require('express')
const router = Router()
const User = require('../models/user')
router.get('/signin',(req,res)=>{
    return res.render('signin')
})
router.get('/signup',(req,res)=>{
    return res.render('signup')
})
router.post('/signup', async(req,res)=>{
    const body = req.body;
    fullName = body.fullName;
    email = body.email,
    password = body.password
    await User.create({
        fullName,
        email,
        password
    });
    return res.redirect('/')
})
router.post('/signin',async(req,res)=>{
    const body=req.body;
    email=body.email;
    password=body.password
    try{
        const token= await User.matchPassword(email,password)
   return res.cookie('token',token).redirect('/');
    }
   catch(error){
    return res.render("signin",{
        error : "Incorrect Email or Password"
    })
   }
})
module.exports = router