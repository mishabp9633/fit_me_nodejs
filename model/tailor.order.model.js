import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type:String,
        ref: "User"
    },
    tailor: {
        type:String,
        ref: "User"
    },
    product:{
        type:String,
        ref: "Product"
    },
  });
  
  const Order = mongoose.model("Order", orderSchema);
  
  export default Order 