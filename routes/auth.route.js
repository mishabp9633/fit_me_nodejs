import express from "express";
import {
  signIn,
  signUp,
  signUpTailor
} from "../controller/auth.js";
import { authorizeRoles } from "../middleware/auth.middleware.js";



const authRouter = express.Router();
const path = "/auth";

//........user login and signup ...........//
authRouter.post(`${path}/signup/user`, signUp);
authRouter.post(`${path}/signin`, signIn);

//..........tailor create admin.........//
authRouter.post(`${path}/signup/tailor`,authorizeRoles(['admin']), signUpTailor);

export default authRouter;
