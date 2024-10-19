import {Router} from "express";
import {
    getLikedVideos,
    toggleCommentLike,
    toggleVideoLike,
    toggleTweetLike,
} from "../controllers/like.controller.js"
 import {  verifyJWT } from "../middleware/auth.middleware.js";
import router from "express/lib/router/index.js";

const router=express.Router();
 router.use(verifyJWT); // verifiy the all route in middleware in verifiy 
 router.route("/toggle/v/:videoId",).post( getLikedVideos);
 router.route("/toggle/c/:commentId").post( toggleCommentLike);
 router.route("/toggle/c/:videoId").post(toggleVideoLike);
 router.route("videos").get( toggleTweetLike);


 export default {router};
