import jwt from "jsonwebtoken";
import { HttpException } from "../exception/exception.js";
import User from "../model/user.model.js";

//...........login...............// 
export async function signIn(req, res, next) {
  
    const loginData = req.body
  
    try {
        const user = await  User.findOne({username:loginData.username, password:loginData.password})
   
        if (!user) throw new HttpException(400, "username or password is invalid")
          
          let token = jwt.sign(
            { _id: user._id },
            'secret_key'
          ); 
          let result={
           role:user.role,
           token
          }
      res.status(200).send({result});
      }
    catch (err) {
      next(err);
    } 
} 

//...........signup user...............// 
export async function signUp(req, res, next) {
  
    const userData = req.body
    try {
        const user = await User.findOne({username: userData.username})
        if(user) throw new HttpException(400, "User already registerd with the username")

         const result = new User(userData)
         await result.save()
         res.status(200).send({result});
    }
    catch (error) {
      next(error);
    } 
}  

//...........signup tailor...............// 
export async function signUpTailor(req, res, next) {
  
  const userData = req.body
  try {
      const user = await User.findOne({username: userData.username})
      if(user) throw new HttpException(400, "User already registerd with the username")
       const role = 'tailor'
       userData.role = role
       
       const result = new User(userData)
       await result.save()
       res.status(200).send({result});
  }
  catch (err) {
    next(err);
  } 
}   