const Post = require('../models/post');

module.exports = {
 //Fetch all posts
  async getPosts(req, res, next){
    let posts = await Post.find({});
    res.render('posts/index', {posts: posts})
  },

  //Post Form
  newPost(req, res, next) {
   res.render('posts/new')
  }
}