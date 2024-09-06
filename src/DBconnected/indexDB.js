import mongoose from "mongoose";
import {DB_name} from "../constance.js";
const MONGOOSE_URI='mongodb+srv://Vishalsahani:1234567890@cluster0.alfed.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDB=async()=>{
    try{
      const connectedResponse=  await mongoose.connect(`${MONGOOSE_URI}/${DB_name}`)
        console.log(`${process.env.PORT}`)
        console.log("MongoDB data base is connected ");
        console.log(`${connectedResponse.connection.host}`);

    }
    catch(error){
        console.log("Fail the data base connection",error);
        process.exit(1);
       
    }
}
export default connectDB