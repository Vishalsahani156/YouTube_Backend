const asynHandler=(reqHandler)=>{
(req,res,next)=>{
    Promise.resolve(reqHandler(req,res,next)).catch((err)=> next(err))
}
}

// import { json } from "express"
// const asyncHandler=(fn)=>async(req,res,next)=>{
//  try{
//    await fn(req,res,next)
//  }
//  catch(e){
//     res.status(e.code||500).json({
//         success:false,
//         messsage: e.messsage,
//     })
//  }
// }
export {asyncHandler}
