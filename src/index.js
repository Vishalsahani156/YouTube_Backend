import connectDB  from "./DBconnected/indexDB.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running  at port${process.env.PORT}`);

    })
    app.on("error",(E)=>{
        console.log("error",E);
        throw E
    })
})
.catch((e)=>{
    console.log(" MongoDB data base  connection fail ",e);

})