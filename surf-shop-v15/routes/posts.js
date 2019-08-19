const express = require('express');
const router = express.Router();
const  { errorHandler } = require('../middleware');
const  { getPosts, newPost } = require('../controllers/posts');
const Post = require('../models/post')

//===============
// GET ALL POSTS
//=====================
router.get('/', errorHandler(getPosts));


//===============
// CREATE  POSTS
//=====================

//1. Get create post forn
router.get('/new', newPost);

//2. Create Post logic
router.post('/', (req, res, next) => {
   const newPost = {
     title: req.body.title,
     price: req.body.price,
     description: req.body.description,
     location: req.body.location
   }

   Post.create(newPost, (err, post) => {
     if(err){
       console.log(err)
     }else {
       console.log(post)
      
     }
   })
});

//===============
// SHOW MORE
//=====================
router.get('/:id', (req, res, next) => {
  Post.findById(req.params.id, (err, foundPost) => {
    if(err){
      console.log(err)
    }else {
      res.send(foundPost)
    }
  })
  //res.send('SHOW /posts/:id');
});


//===============
// EDIT POST
//=====================

//1. Get the form for editting
router.get('/:id/edit', (req, res, next) => {
  res.send('EDIT /posts/:id/edit');
});

//2. Editting Logic
router.put('/:id', (req, res, next) => {
  res.send('UPDATE /posts/:id');
});

//===============
// DELETE POSTS
//=====================
router.delete('/:id', (req, res, next) => {
  res.send('DELETE /posts/:id');
});


module.exports = router;
