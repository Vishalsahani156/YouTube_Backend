import multer from "multer";

// use disk storage and add the video and file public/temp folder 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  // export the multer 
export const upload=multer({
    storage,
})