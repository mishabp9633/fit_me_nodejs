import express from "express";
import {
  signIn,
  signUp
} from "../controller/auth.js";



const authRouter = express.Router();
const path = "/auth";

//........user login and signup ...........//
authRouter.post(`${path}/signUp`, signUp);
authRouter.post(`${path}/signin`, signIn);


export default authRouter;
