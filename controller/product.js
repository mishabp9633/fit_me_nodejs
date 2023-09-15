import Product from "../model/product.model.js";

//...........product create...............// 
export async function createProduct(req, res, next) {
  
    const productData = req.body
    console.log(productData);
    const files = req.files
    console.log(files);
    try {

         const result = new Product(productData)
         await result.save()
         res.status(200).send({result});
    }
    catch (err) {
      next(err);
    } 
} 
  