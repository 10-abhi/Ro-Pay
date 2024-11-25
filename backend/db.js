const mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcrypt');
const Cryptr = require('cryptr');
const { response } = require('express');
const cryptrKey = process.env.cryptrKey
const cryptr = new Cryptr(cryptrKey);

  mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
const userSchema = new mongoose.Schema({
    firstName: {
      type : String,
      required : true ,
      maxLength : 30
    },
    lastName : {
       type : String,
       required : true ,
       maxLength : 30  
    },
     username : {
     type : String,
     lowercase :true,
     required : true ,
     unique : true ,
     trim : true , 
     minLength : 3,
     maxLength : 30
    },
    password: {
      type : String ,
      required : true ,
      minLength : 4
    },
   
});
 
userSchema.pre('save' , async function(next){
  if(this.isModified('password')||this.isNew){
    try{
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password , salt);
      next();
    }catch(error){
    next(error);
    }
  }else{
    next();
  }
})
//created a new method to compare if the valid is valide or not at the time of login
userSchema.methods.isValidPassword = async function(password){
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
}

const accountSchema = new mongoose.Schema({
   userId : {
     type : mongoose.Schema.Types.ObjectId,
     ref : 'User',
     required : true
   } , 
   balance : {
    type : String ,
    required : true 
  }
})

accountSchema.pre('save' , function(next){
   if(this.isModified('balance')|| this.isNew){
    this.balance = cryptr.encrypt(this.balance.toString());
    next();
   }else{
    response.json("error at the time of encrypting the balance");
   }
   next();
})

//to convert and get the balance 
accountSchema.methods.Decrypter = async function(balance){
 if(balance){
  try {
    return cryptr.decrypt(balance);
} catch (error) {
    throw new Error("Error at the time of decrypting balance");
} 
}else{
  console.log("no balance found");
}
}


const User = mongoose.model('User' , userSchema);
const Account = mongoose.model('Account' , accountSchema)

module.exports = {
    User,
    Account
};