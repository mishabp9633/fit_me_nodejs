import express from 'express'
import mongoose from 'mongoose'
import cors from "cors";
import authRouter from './routes/auth.route.js';
import productRouter from './routes/product.route.js';

const app = express()

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({limit:"50mb",extended:true}))
app.use('/public/photos', express.static(path.join('public/photos')));

app.use(
  // userRouter,
  authRouter,
  productRouter,
  // orderRouter
  )
 async function dbconnection(){
    try {
      mongoose.set('strictQuery', false);
      await mongoose.connect("mongodb://127.0.0.1:27017/fit_me")
      console.log("monogo db connecetd");
      
    } catch (error) {
      console.log("monogo db not connected");
  
      throw error
    }
  }

dbconnection()

const port = 5000
app.listen(port, ()=>{
    console.log(`port at listen on port ${port}`)
})  