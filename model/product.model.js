import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    size:String,
    price:Number,
    images:[
        {
            url:String
        }
    ]
  });
  
  const Product = mongoose.model("Product", productSchema);
  
  export default Product 