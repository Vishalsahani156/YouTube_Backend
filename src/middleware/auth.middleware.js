import { User } from "../model/user.models.js";
import { ApiError } from "../util/ApiError.js";
import { asyncHandler } from "../util/asyncHandler.js";
import jwt from "jsonwebtoken";

  const  verifyJWT=asyncHandler(async(req, res ,next)=>{
  
    try {
        const token=req.cookies?.accessToken||req.header("Authorization")?.replace("Bearer "," ")
        
        if(!token){
          throw new ApiError(400," unauthoraize requiste")
        }
      const decodeToken=  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
   
    const user=  await User.findById(decodeToken?._id).select(
        "-password -refreshToken"
      )
      if(!user){
        throw new ApiError(4001,"invalide access token")
      }
      req.user=user;
      next()
      
  
    } catch (error) {
     
        throw new ApiError(4001,error?.message||"invalide access token")
    }
})
   
 export default verifyJWT;