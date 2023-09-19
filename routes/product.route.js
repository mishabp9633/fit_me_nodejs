import express from "express";
import {
    createProduct, deleteProduct, getAllProduct, getAllProductByUserSize, getSingleProduct
} from "../controller/product.js";
import { authorizeRoles } from "../middleware/auth.middleware.js";
import multer from 'multer';


const productRouter = express.Router();
const path = "/product";
const upload = multer({ storage : multer.diskStorage({})})


//........Create product...........//
productRouter.post(`${path}/new`, upload.single('images') ,authorizeRoles(['admin']), createProduct);

//........Delete product...........//
productRouter.post(`${path}/delete/:id`,authorizeRoles(['admin']), deleteProduct);

//........get all product...........//
productRouter.get(`${path}/get/all`, getAllProduct);

//........Delete product...........//
productRouter.get(`${path}/get/:id`, getSingleProduct);

//........get all user products by size...........//
productRouter.get(`${path}/get/user/all`,authorizeRoles(['user']), getAllProductByUserSize);


export default productRouter;
