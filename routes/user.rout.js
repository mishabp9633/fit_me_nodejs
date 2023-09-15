import express from "express";
import { deleteTailor, userSizeAdd } from "../controller/user.js";
import { authorizeRoles } from "../middleware/auth.middleware.js";



const userRouter = express.Router();
const path = "/user";

//..........tailor delete admin.........//
userRouter.post(`${path}/delete/tailor/:id`,authorizeRoles(['admin']), deleteTailor);

//..........user size add.........//
userRouter.post(`${path}/user/size/add`,authorizeRoles(['user']), userSizeAdd);



export default userRouter;
