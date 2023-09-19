import express from "express";
import { deleteTailor, getAllTailors, userSizeAdd } from "../controller/user.js";
import { authorizeRoles } from "../middleware/auth.middleware.js";



const userRouter = express.Router();
const path = "/user";

//..........tailor delete admin.........//
userRouter.delete(`${path}/delete/tailor/:id`,authorizeRoles(['admin']), deleteTailor);

//..........user size add.........//
userRouter.post(`${path}/size/add`,authorizeRoles(['user']), userSizeAdd);

//........get all tailors...........//
userRouter.get(`${path}/tailor/get`,authorizeRoles(['admin', 'admin']), getAllTailors);

export default userRouter;
