import { Router } from "express";
import{
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
    updatePlaylist,
} from "../controllers/playlist.controller.js";

import {verifyJWT} from "../middeleware/auth.middeleware.js";

const router=express.Router();
router. route("/").get(createPlaylist);
router.route("/users/userId").get(getUserPlaylists);
router.route("/videoId/playlist/User").post(getPlaylistById);
router.route("/add/:videoId/:playlistId").patch(addVideoToPlaylist);
router.route("/remove/:videoId/:playlistId").patcch(removeVideoFromPlaylist);
router.route("/").post(deletePlaylist);
router.route("/").post(updatePlaylist);


export default {router};