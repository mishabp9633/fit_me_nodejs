import express from "express";
import {
    createProduct
} from "../controller/product.js";
import { authorizeRoles } from "../middleware/auth.middleware.js";
import { upload } from "../utils/multer.js";


const productRouter = express.Router();
const path = "/product";

const cpUpload = upload.fields([{ name: 'product', maxCount: 4 }])

//........Create product...........//
productRouter.post(`${path}/new`, cpUpload ,authorizeRoles(['admin']), createProduct);


export default productRouter;
