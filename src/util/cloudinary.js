import { v2 as cloudinary } from "cloudinary";
import {fs} from "fs";

    // Configuration the cloudinary 
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_API_NAME,
        api_key: process.env.CLOUDINARY_APT_KEY,
        api_secret: process.env.CLOUDINARY_APT_SECRET, // Click 'View API Keys' above to copy your API secret
    });
    
    const uplodeCloudinary= async(localFilePath)=>{
     try{
        // localFilePath  not found return the null and localFilePath is Empty url and data
        if(!localFile)return null
        // uplode the file cloudaniry 
     const respons=   await cloudinary.uploader.upload(localFilePath,{
      resource_type:"auto"
     })
        console.log("file uplode is success full ")
        return respons.url;
     }
     catch(errors){
        fs.unlinkSync(localFilePath)// remoove the locallay file link 
        return null;
     }
     
    }
 export {uplodeCloudinary}
