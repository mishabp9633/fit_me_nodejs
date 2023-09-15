import User from "../model/user.model.js";

//...........tailor delete admin...............// 
export async function deleteTailor(req, res, next) {
  
    const tailorId = req.params.id
  
    try {
      const tailorDelete = await  User.findByIdAndDelete(tailorId)
      if(!tailorDelete){
      res.status(404).send({message:'tailor not found'});
      }
      res.status(200).send({message:'deleted successfully'});
      }
    catch (err) {
      next(err);
    } 
  }

  //...........user size add...............// 
export async function userSizeAdd(req, res, next) {
    const userId = req.body.User
    try {
      const tailorDelete = await  User.findOne({_id:userId})
      if(!tailorDelete){
        res.status(404).send({message:'tailor not found'});
      }
      res.status(200).send({message:'deleted successfully'});
      }
    catch (err) {
      next(err);
    } 
  }