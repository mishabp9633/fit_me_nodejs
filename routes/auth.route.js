import express from "express";
import {
  signIn,
  signUp
} from "../controller/auth.js";



const router = express.Router();
const path = "/auth";

//........user login and signup ...........//
router.post(`${path}/signUp`, signUp);
router.post(`${path}/signin`, signIn);


export default router;
