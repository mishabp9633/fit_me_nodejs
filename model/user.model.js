import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    password:String,
    userName:String,
    phone:Number,
    role:String,
    height:Number,
    weight:Number,
    chest:Number,
    shoulder:Number,
    lenght:Number,
    size:String
  });
  
  const User = mongoose.model("User", userSchema);
  
  export default User 