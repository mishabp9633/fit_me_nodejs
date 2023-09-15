import Order from "../model/tailor.order.model.js";

//...........Order create...............// 
export async function createOrder(req, res, next) {
    const userId = req.body.user._id
    const orderData = req.body
    try {
         orderData.user = userId
         const result = new Order(orderData)
         await result.save()
         res.status(200).send({result});
    }
    catch (err) {
      next(err);
    } 
} 

//...........order delete...............// 
export async function deleteOrder(req, res, next) {
    const orderId = req.params.id

  try {
    const order = await  Order.findByIdAndDelete(orderId)
    if(!order){
      res.status(404).send({message:'order not found'});
    }
    res.status(200).send({message:'deleted successfully'});
    }
  catch (err) {
    next(err);
  } 
} 
  
//...........order get all...............// 
export async function getAllOrders(req, res, next) {
  const userId = req.body.user._id
  try {
    const order = await  Order.find({tailor:userId})
    .populate({
        path: 'user',
      })
      .populate({
        path: 'product'
      })
    if(!order){
      res.status(404).send({message:'order not found'});
    }
    res.status(200).send(order);
    }
  catch (err) {
    next(err);
  } 
} 
