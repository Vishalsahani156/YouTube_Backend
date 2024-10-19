import { Route } from "express";
import{
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}from "../controllers/tweet.controller.js";

const route=express.Route();
router.route("/userId/creatTweet").get(createTweet);
router.route("/user/userId/videoId").get(getUserTweets);
router.route("/userId/videiId").post(updateTweet);
router.route("/user/video/videoId").post(deleteTweet);



export default {router};