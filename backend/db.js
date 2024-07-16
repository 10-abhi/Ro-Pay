const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://abhigdscnew:abhi8193681936@cluster0.v3kjunr.mongodb.net/")

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
 
const accountSchema = new mongoose.Schema({
   userId : {
     type : mongoose.Schema.Types.ObjectId,
     ref : 'User',
     required : true
   } , 
   balance : {
    type : Number ,
    required : true 
  }
})

const User = mongoose.model('User' , userSchema);
const Account = mongoose.model('Account' , accountSchema
)

module.exports = {
    User,
    Account
};