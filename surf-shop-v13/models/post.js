const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({

   title: String,
   price: String,
   description: String,
   images: [String],
   location: String,
   lat: Number,
   lng: Number,
   author: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
       },
       reviews : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
       }]
});


module.exports = mongoose.model('Post', PostSchema)