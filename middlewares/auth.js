const {validateToken} = require('../services/auth')
const checkForAuthCookie =(cookieName) =>{
    return (req,res,next)=>{
        const tokenCookieValue=req.cookies[cookieName]
        if(!tokenCookieValue){
            return res.redirect('/user/signin')
        }
        try{
        const userPayload = validateToken(tokenCookieValue)
        req.user = userPayload
        } catch (error){
        }
        next()
    }
}
module.exports ={
    checkForAuthCookie
}