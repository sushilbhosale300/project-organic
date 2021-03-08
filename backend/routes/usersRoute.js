const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const asynHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const usersRoute = express.Router();

//Register
usersRoute.post(
  '/register',
  asynHandler(async (req, res) => {
    const { name, email, password, status } = req.body;
    console.log(status)

    const userExists = await User.findOne({ email: email });
    if (userExists) {
      throw new Error('User Exist');
    }
    const userCreated = await User.create({ email, name, password,status });
    res.json({
      _id: userCreated._id,
      name: userCreated.name,
      password: userCreated.password,
      email: userCreated.password,
      status : userCreated.status,
      token: generateToken(userCreated._id),
    });
  })
);

//Login
usersRoute.post(
  '/login',
  asynHandler(async (req, res) => {
    const { email, password,status } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.isPasswordMatch(password))  ) {
      //set status code
      console.log(user.status)
      if(user.status === 'Active'){

        res.status(200);
        res.json({
          _id: user._id,
          name: user.name,
          password: user.password,
          email: user.email,
          token: generateToken(user._id),
        });
      }else{
        res.status(401)
        throw new Error('Status is Inactive');
      }
    } else {
      res.status(401);
      throw new Error('Invalid credentials');
    }
  })
);

//update user
usersRoute.put(
  '/profile/update',
  authMiddleware,
  expressAsyncHandler(async (req, res) => {

    console.log(req.user.id);
    
    //Find the login user by ID
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.status = req.body.status || user.status;
      if (req.body.password) {
        user.password = req.body.password || user.password;
      }

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        status : updatedUser.status,
        token: generateToken(updatedUser._id),
      });
    }
  })
);

//Delete user
usersRoute.delete('/:id', (req, res) => {
  res.send('Delete route');
});

//fetch Users
usersRoute.get(
  '/',
  authMiddleware,
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});

    if (users) {
      res.status(200).json(users);
    } else {
      res.status(500);

      throw new Error('No users found at the moment');
    }
  })
);

module.exports = usersRoute;


usersRoute.get(
  '/profile',
  authMiddleware,
  expressAsyncHandler(async (req, res) => {
    const users = await User.findById(req.user._id);

    

    if (users) {
      res.status(200).json(users);
    } else {
      res.status(500);

      throw new Error('No users found at the moment');
    }
  })
);

module.exports = usersRoute;
