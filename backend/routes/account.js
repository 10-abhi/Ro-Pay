const express = require("express");
const { Account } = require("../db");
const { authMiddleware } = require("../middleware");
const {mongoose} = require("mongoose")
//Router for Account(balance)
const route = express.Router();

route.get("/balance" , authMiddleware , async (req , res)=>{
   const accounta1 = await Account.findOne({
      userId : req.userId
   })

   res.json({
    balance : accounta1.balance
   });

})

route.post("/transfer" , authMiddleware , async (req,res)=>{
   const session = await mongoose.startSession();
     session.startTransaction();
     const {to , amount} = req.body;
     const senderAccount = await Account.findOne({
      userId : req.userId
     }).session(session);
     if(!senderAccount || senderAccount.balance < amount){
      await session.abortTransaction();
      return res.status(400).json({
         message : "Insufficient Balance"
      })
     };
    const receiverAcc = await Account.findOne({
      userId : to
    }).session(session);

    if(!receiverAcc){
      await session.abortTransaction();
      return res.json(
         { message: "Invalid account" })
    }
    await Account.updateOne({
      userId  : req.userId
    }, 
   {
      $inc : {
         balance : -amount
      }
   }).session(session);

    await Account.updateOne({
      userId  : to
    }, 
   {
      $inc : {
         balance : +amount
      }
   }).session(session);

    await session.commitTransaction();
   res.json({
      message : "Transfer successful"
   });

});

// transfer({
//    userId: "65ac44e10ab2ec750ca666a5",
//    body: {
//        to: "65ac44e40ab2ec750ca666aa",
//        amount: 100
//    }
// })

// transfer({
//    userId: "65ac44e10ab2ec750ca666a5",
//    body: {
//        to: "65ac44e40ab2ec750ca666aa",
//        amount: 100
//    }})


module.exports = route;