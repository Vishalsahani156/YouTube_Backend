import connectDB from "./DBconnected/indexDB.js";
import { app } from "./app.js";
// this is can use the env port number 
const PORT = 8000
connectDB()
    .then(() => {
        app.listen(PORT || 8000, () => {
            console.log(`Server is running  at port ${PORT}`);

        })
        app.on("error", (E) => {
            console.log("error", E);
            // throw E
        })
    })
    .catch((e) => {
        console.log(" MongoDB data base  connection fail !! app is not listen   ", e);

    })