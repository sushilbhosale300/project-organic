const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const Post = require('../models/Post');

const postRouter = express.Router();

//Create Book
postRouter.post(
  '/create',
  expressAsyncHandler(async (req, res) => {
    const post = await Post.create(req.body);
    console.log(post)
    if (post) {
      res.status(200)
      res.json(post);
      
    } else {
      res.status(500);
      throw new Error('Post creating failed');
    }
  })
);

//Create Book
postRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const post = await Post.find({});
    if (post) {
      res.status(200);
      res.json(post);
    } else {
      res.status(500);
      throw new Error('There are no books');
    }
  })
);

postRouter.put(
  '/update/:id',
  authMiddleware,
  expressAsyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (post) {
      const updatedPost = await Post.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );
      res.status(200);
      res.json(updatedPost);
    } else {
      res.status(500);
      throw new Error('Update failed');
    }
  })
);

postRouter.delete(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id);
      res.status(200);
      res.send(post);
    } catch (error) {
      res.json(error);
    }
  })
);


postRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (post) {
      res.status(200);
      res.json(post);
    } else {
      res.status(500);
      throw new Error('There are no books');
    }
  })
);





module.exports = postRouter;
