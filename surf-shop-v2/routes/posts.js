const express = require('express');
const router = express.Router();

//===============
// GET ALL POSTS
//=====================
router.get('/', (req, res, next) => {
  res.send('INDEX /posts');
});


//===============
// CREATE  POSTS
//=====================

//1. Get create post forn
router.get('/new', (req, res, next) => {
  res.send('NEW /posts/new');
});

//2. Create Post logic
router.post('/', (req, res, next) => {
  res.send('CREATE /posts');
});

//===============
// SHOW MORE
//=====================
router.get('/:id', (req, res, next) => {
  res.send('SHOW /posts/:id');
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
