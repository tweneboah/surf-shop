const express = require('express');
const router = express.Router({mergeParams: true}); //This helps us to pull the id's from route

//===============
// GET REVIEWS
//=====================
router.get('/', (req, res, next) => {
  res.send('INDEX /posts');
});


//===============
// CREATEREVIEWS
//=====================

//1. Get create REVIEWS forn
router.get('/new', (req, res, next) => {
  res.send('NEW /reviews/new');
});

//2. Create REVIEWS logic
router.post('/', (req, res, next) => {
  res.send('CREATE /reviews');
});

//===============
// SHOW MORE
//=====================
router.get('/:review_id', (req, res, next) => {
  res.send('SHOW /reviews/:id');
});


//===============
// EDIT REVIEWS
//=====================

//1. Get the form for editting
router.get('/:review_id/edit', (req, res, next) => {
  res.send('EDIT /reviews/:id/edit');
});

//2. Editting Logic
router.put('/:review_id', (req, res, next) => {
  res.send('UPDATE /reviews/:id');
});

//===============
// DELETE REVIEWS
//=====================

router.delete('/:review_id', (req, res, next) => {
 res.send('DELETE /posts/:id');
});

module.exports = router;
