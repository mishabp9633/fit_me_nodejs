import express from 'express'
import mongoose from 'mongoose'
import cors from "cors";
import authRouter from './routes/auth.route.js';
import productRouter from './routes/product.route.js';
import path from 'path';
import userRouter from './routes/user.rout.js';
import orderRouter from './routes/tailor.order.route.js';
import { errorHandling } from './middleware/error.middleware.js';
const app = express()

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({limit:"50mb",extended:true}))
app.use('/public/photos', express.static(path.join('public/photos')));

app.use(
  userRouter,
  authRouter,
  productRouter,
  orderRouter
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

app.use(errorHandling)

const port = 6000
app.listen(port, ()=>{
    console.log(`port at listen on port ${port}`)
})  