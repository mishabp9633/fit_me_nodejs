import Product from "../model/product.model.js";
import { HttpException } from "../exception/exception.js";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dh5pflqzs',
    api_key: '549382545581927',
    api_secret: 'VEOMO5Xni1eCfQKSsVB4Jr4p4eQ'
})

//...........product create...............// 
export async function createProduct(req, res, next) {
  
    const productData = req.body
    const files = req.files
    try {
      let images = [];
      for (const file of files) { 
        const public_id = `product/${file.filename}`;       
        const result = await cloudinary.uploader.upload(file.path, {public_id} );
        images.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }
      productData.images = images

         const result = new Product(productData)
         await result.save()
         res.status(200).send({result});
    }
    catch (err) {
      next(err);
    } 
} 

//...........product delete...............// 
export async function deleteProduct(req, res, next) {
  
  const productId = req.params.id

  try {
    const productDelete = await  Product.findByIdAndDelete(productId)
    if(!productDelete) throw new HttpException(400, "product not found")
    
    res.status(200).send({message:'deleted successfully'});
    }
  catch (err) {
    next(err);
  } 
} 
  
//...........product get all...............// 
export async function getAllProduct(req, res, next) {
  
  try {
    const product = await  Product.find()
    if(!product) throw new HttpException(400, "product not found")
    res.status(200).send({product});
    }
  catch (err) {
    next(err);
  } 
} 

//...........product get single...............// 
export async function getSingleProduct(req, res, next) {
  
  const productId = req.params.id

  try {
    const product = await  Product.findById(productId)
    if(!product) throw new HttpException(400, "product not found")
    res.status(200).send({product});
    }
  catch (err) {
    next(err);
  } 
}

//...........get all user products by size...............// 
export async function getAllProductByUserSize(req, res, next) {
  const user = req.body.user
  try {
    const product = await  Product.find({size:user.size})
    if(!product) throw new HttpException(400, "product not found")
    res.status(200).send({product});
    }
  catch (err) {
    next(err);
  } 
} 