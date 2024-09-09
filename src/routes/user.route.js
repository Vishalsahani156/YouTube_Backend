import express from 'express';

// import the registaruser from the controller.js file 
import { registarUser } from "../controllers/user.controller.js";

const router = express.Router();

router.route('/register').post(registarUser);

export default router



