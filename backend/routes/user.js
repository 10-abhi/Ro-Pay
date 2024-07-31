const express = require("express");
const zod = require("zod");
const {Account , User } = require("../db")
 const {JWT_SECRET} = require("../config");
const authMiddleware = require("../middleware");
const route = express.Router();
const jwt = require('jsonwebtoken');

const myZodSchema = zod.object({
    username: zod.string(),
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string()
});

route.post("/signup" , async (req , res)=>{
     const body = req.body;
     const {success} = myZodSchema.safeParse(body);
     if(!success){
      return res.status(411).json({
        message : "Input Error Occured/Incorrect Inputs"
       })
    }
     const user = await User.findOne({
        username : req.body.username
     })
     if(user){
       return res.json({
            message : "Username Already Exists"
        })
     }
     const dbUser = await User.create({
      username : body.username,
      password : body.password,
      firstName : body.firstName,
      lastName : body.lastName,
     })

      await Account.create({
         userId : dbUser._id,
         balance : 1 + Math.random() * 10000
       })

     const token = jwt.sign({
        userId : dbUser._id
     }, JWT_SECRET)
       
       res.json({
        message : "User create successfully",
        token : token,
        userId : dbUser._id
     })
})

   const signinZodSchema = zod.object({
    username : zod.string(),
    password : zod.string()
   })

    route.post("/signin" , async (req , res)=>{
     const body = req.body;
     const {success} = signinZodSchema.safeParse(body);
     if(!success){
      return res.json({
         message : "Incorrect Input"
      })
     }
     const user = await User.findOne({
        username : req.body.username,
        password : req.body.password
    });
     
     if(!user){
        return res.status(404).json({
            message: "Error while logging in"
        })
     }
     else{
      const token = jwt.sign({
         userId : user._id
      }, JWT_SECRET);


        return res.status(200).json({
            token : token
           
        })
        
     }
})
  
  const ZodBodyUpdate = zod.object({
    password : zod.string().optional(),
    lastName : zod.string().optional(),
    firstName : zod.string().optional()
  })

  route.put("/update" ,  async (req , res)=>{
       const {success} = ZodBodyUpdate.safeParse(req.body);
       if(!success){
        return res.status(411).json({
            message : "Error while updating/The Input is not in Correct Format"
         })
       }
       await User.updateOne( req.body , { _id : req.user_Id}  );
       res.json({
         message : "Updated Successfully"
       })
 })

  route.get("/bulk" , async (req , res)=>{
   const filter = req.query.filter || "" ;
   const users = await User.find({
      $or : [{
        firstName : {
         "$regex" : filter
        } },{
         lastName : {
          "$regex" : filter
         }
        }]
   }) 
      res.json({
         user : users.map(user =>({
           username : user.username,
           firstName : user.firstName,
           lastName : user.lastName,
           _id : user._id
         }))
      })
       
 })

 

module.exports = route;