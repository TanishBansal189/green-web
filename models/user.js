const mongoose = require('mongoose')
const { createTokenForUser} = require('../services/auth')
const userSchema =  new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true,
        unique : true,
    },
    password :{
        type : String,
        required : true
    },
    role :{
        type : String,
        enum : ["USER","ADMIN"],
        default : 'USER'
    }
},{timestamps : true})
userSchema.static('matchPassword', async function(email,password){
    const user= await this.findOne({email})
    if (!user) throw new Error('User not found !');
    const givenPassword = password
    const  SavedPassword = user.password
    if (givenPassword !== SavedPassword){
        throw new Error('Incorrect Password')
    }
    const token =  createTokenForUser(user);
    return token
})
const User = mongoose.model('user',userSchema)
module.exports = User