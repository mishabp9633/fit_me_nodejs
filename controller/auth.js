import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

//...........login...............// 
export async function signIn(req, res, next) {
  
    const loginData = req.body
  
    try {
        const user = await  User.findOne({username:loginData.username, password:loginData.password})
   
        if (!user) 
        res.status(404).send({message:"username or password is invalid"})
          
          let token = jwt.sign(
            { _id: user._id },
            'secret_key'
          ); 
          let tokenRole={
           role:user.role,
           token
          }
      res.status(200).send(tokenRole);
      }
    catch (err) {
      next(err);
    } 
} 

//...........signup...............// 
export async function signUp(req, res, next) {
  
    const userData = req.body

    try {
        const user = await User.findOne({username:userdata.username})
        if(user){
         throw createError(400, `User already registerd with the username ${user.username}`)
        }
         const result = new User(userdata)
         await result.save()
         return {result}
    }
    catch (err) {
      next(err);
    } 
} 