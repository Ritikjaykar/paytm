const jwt =require('jsonwebtoken');
const {JWT_SECRET}=require("./config");

const authMiddleware=(req,res,next)=>{
    // 1.extract the authorization header
    const authHeader=req.headers.authorization;

    //2.validate exitence and correct format of the header
    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({
            message:"Unauthorized"
        });
    }

    //3.extract the clean token string
    const token=authHeader.split(" ")[1];

    try {
        //4.verify the token using the secret key
        const decode=jwt.verify(token,JWT_SECRET);

        //5.inject the decoded user information into the request object for downstream use
        req.userId=decode.userId;

        //6.pass control to the next route handler
        next();
        
    } catch (error) {
        return res.status(403).json({
            message:"Forbidden:Invalid token or expired token"
        });
    }
};
module.exports={
    authMiddleware
};