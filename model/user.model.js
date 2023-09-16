import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    password:String,
    username:{
      type:String,
      unique:true
    },
    phone:String,
    role:{
      type:String,
      default:"user"
    },
    height:Number,
    weight:Number,
    chest:Number,
    waist:Number,
    inseam:Number,
    size:String
  });
  
  const User = mongoose.model("User", userSchema);
  
  export default User 