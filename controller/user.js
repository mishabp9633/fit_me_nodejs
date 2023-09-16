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

      const Height = sizeData.height
      const Weight = sizeData.weight

      let sizeRecommendation = "";
      let chest  
      let waist 
      let inseam 

  if (Height < 166) {
    if (Weight < 56) {
      sizeRecommendation = "Small";
    } else if (Weight >= 56 && Weight < 69) {
      sizeRecommendation = "Medium";
    } else {
      sizeRecommendation = "Small"; // Change "Large" to "Small" for people with Height < 166
    }
  } else {
    // Determine size based on 5 cm height increments
    const heightSegment = Math.floor((Height - 160) / 5);
    const adjustedHeight = 160 + heightSegment * 5;
  
    // Determine size based on 5 kg weight increments
    const weightSegment = Math.floor(Weight / 5);
    const adjustedWeight = weightSegment * 5;
  
    if (adjustedHeight < 160) {
      sizeRecommendation = "Small";
    } else if (adjustedHeight >= 160 && adjustedHeight < 165) {
      if (adjustedWeight < 50) {
        sizeRecommendation = "Small";
      } else if (adjustedWeight >= 50 && adjustedWeight < 55) {
        sizeRecommendation = "Medium";
      } else {
        sizeRecommendation = "Small"; // Change "Large" to "Small" for this height range
      }
    } else if (adjustedHeight >= 165 && adjustedHeight < 170) {
      if (adjustedWeight < 55) {
        sizeRecommendation = "Small";
      } else if (adjustedWeight >= 55 && adjustedWeight < 60) {
        sizeRecommendation = "Medium";
      } else if (adjustedWeight >= 60 && adjustedWeight < 70) {
        sizeRecommendation = "Large";
      } else {
        sizeRecommendation = "Extra Large";
      }
    } else if (adjustedHeight >= 170 && adjustedHeight < 175) {
      if (adjustedWeight < 60) {
        sizeRecommendation = "Medium";
      } else if (adjustedWeight >= 60 && adjustedWeight < 70) {
        sizeRecommendation = "Large";
      } else if (adjustedWeight >= 70 && adjustedWeight < 80) {
        sizeRecommendation = "Extra Large";
      } else {
        sizeRecommendation = "Extra Extra Large";
      }
    } else if (adjustedHeight >= 175 && adjustedHeight < 180) {
      if (adjustedWeight < 65) {
        sizeRecommendation = "Medium";
      } else if (adjustedWeight >= 65 && adjustedWeight < 75) {
        sizeRecommendation = "Large";
      } else if (adjustedWeight >= 75 && adjustedWeight < 85) {
        sizeRecommendation = "Extra Large";
      } else {
        sizeRecommendation = "Extra Extra Large";
      }
    } else {
      if (adjustedWeight < 70) {
        sizeRecommendation = "Large";
      } else if (adjustedWeight >= 70 && adjustedWeight < 85) {
        sizeRecommendation = "Extra Large";
      } else {
        sizeRecommendation = "Extra Extra Large";
      }
    }
  }
  
  const result = {
    sizeRecommendation: sizeRecommendation,
    waist: (Weight / 2) - 12,
    chest: (Weight / 3) + 10,
    inseam: (Height - 38)
  };

      user.waist = result.waist + 60 
      user.chest = result.chest + 62 
      user.inseam = result.inseam - 60 
      user.size = result.sizeRecommendation
      user.height = sizeData.height
      user.weight = sizeData.weight
      await user.save()

      res.status(200).send({user});
      }
    catch (err) {
      next(err);
    } 
  }