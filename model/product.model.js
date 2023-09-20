import mongoose from "mongoose";

export const SIZE = {
    SMALL : 'Small',
    MEDIUM : 'Medium',
    LARGE : 'Large',
    EXTRALARGE : 'Extra Large',
    EXTRAEXTRALARGE : 'Extra Extra Large',
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
            SIZE.EXTRAEXTRALARGE,
          ],
          message: 'Please select correct size'
        },
        default: "",
      },
    price:Number,
    image:
        {
          public_id:String,
          url:String
        }
  
  });
  
  const Product = mongoose.model("Product", productSchema);
  
  export default Product 