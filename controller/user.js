import { HttpException } from "../exception/exception.js";
import User from "../model/user.model.js";

//...........tailor delete admin...............// 
export async function deleteTailor(req, res, next) {
  
    const tailorId = req.params.id
  
    try {
      const tailorDelete = await  User.findByIdAndDelete(tailorId)
      if(!tailorDelete) throw new HttpException(400, "tailor not found")
      res.status(200).send({message:'deleted successfully'});
      }
    catch (err) {
      next(err);
    } 
  }

  //...........user size add...............// 
export async function userSizeAdd(req, res, next) {
    const sizeData = req.body
    const userId = req.body.user._id
    try {
      const user = await  User.findOne({_id:userId})
      if(!user) throw new HttpException(400, "user not found")

      user.height = sizeData.height
      user.weight = sizeData.weight
      await user.save()

      res.status(200).send({user});
      }
    catch (err) {
      next(err);
    } 
  }