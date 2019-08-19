const mongoose = require('mongoose');
const PassportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
   
   password: String,//Passport will create this for us automatically
   username: String, //Passport will create this for us automatically
   
   email: String,
   image: String,
   posts: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Post'
       }]
});

userSchema.plugin(PassportLocalMongoose());

module.exports = mongoose.model('User', userSchema)