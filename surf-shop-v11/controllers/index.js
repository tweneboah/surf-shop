const User = require('../models/user');
const express = require('express');
const router = express.Router()


module.exports = {
  
 postRegister(req, res, next) {
   
      //We are passing other fields to register function

      const newUser = {
        email: req.body.email,
        image: req.body.image,
        username: req.body.username
      }
       User.register(new User(newUser), req.body.password, (err) => {
         if (err) {
           console.log('error while user register!', err);
           return next(err);
         }
     
         console.log('user registered!');
     
         res.redirect('/');
       });
     
  },

  userLogin(){
    router.post('/login', passport.authenticate('local'), function(req, res) {
      res.redirect('/');
    });
  }

}