import express from "express";
import { createOrder, deleteOrder, getAllOrders } from "../controller/tailor.order.js";
import { authorizeRoles } from "../middleware/auth.middleware.js";


const orderRouter = express.Router();
const path = "/order";


//........Create order...........//
orderRouter.post(`${path}/new` ,authorizeRoles(['user']), createOrder);

//........Delete order...........//
orderRouter.delete(`${path}/delete/:id`,authorizeRoles(['tailor']), deleteOrder);

//........get all order...........//
orderRouter.get(`${path}/get/all`,authorizeRoles(['tailor']), getAllOrders);




export default orderRouter;
