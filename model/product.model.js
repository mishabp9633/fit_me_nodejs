import mongoose from "mongoose";

export const SIZE = {
    SMALL : 'Small',
    MEDIUM : 'Medium',
    LARGE : 'Large',
    EXTRALARGE : 'Extra Large',
    EXTRALARGELARGE : 'Extra Large Large',
  }

const productSchema = new mongoose.Schema({
    title: String,
    size: {
        type: String,
        required: true,
        enum: {
          values: [
            SIZE.SMALL,
            SIZE.MEDIUM,
            SIZE.LARGE,
            SIZE.EXTRALARGE,
            SIZE.EXTRALARGELARGE,
          ],
          message: 'Please select correct size'
        },
        default: "",
      },
    price:Number,
    images:[
        {
            url:String
        }
    ]
  });
  
  const Product = mongoose.model("Product", productSchema);
  
  export default Product 