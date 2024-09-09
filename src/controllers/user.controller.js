import { asyncHandler } from "../util/asyncHandler.js";

const registarUser = asyncHandler(async (req, res) => {
    // this is the port number 800 can use the env variable port number 
    res.status(200).json({

        message: "ok"
    })
})

export { registarUser }