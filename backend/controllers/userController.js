import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import generateToken from '../utils/generateToken.js';

/*
    @desc   Auth User & Get token
    @route  POST/ api/users/login
    @access Public
*/
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body; // get the email, password out of req.body

  // after getting the email and password, first thing we check the user.Make sure user is alreay exisited or not with email.
  const user = await User.findOne({ email }); //email : email --both are same ..so just use one

  // user will have all data inside -- not we are checking user and password
  if (user && (await user.matchPassword(password))) {
    //generate token
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password'); // it is security issue,we will not share which one is not valid
  }

  // next step -- password checking if user is existed. WE use Bcrypt. Clearer way to do it. User model

  res.send('Login User');
});

/*
    @desc   Register User
    @route  POST/ api/users
    @access Public
*/
const registerUser = asyncHandler(async (req, res) => {
  //name, email, password from request body
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error('User alreay exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    // generate token when register
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }
});

/*
    @desc   Logout User / clear cookie
    @route  POST/ api/users
    @access Private
*/
const logOutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: 'Logged Out successfully' });
});

/*
    @desc   Get user Profile
    @route  GET/ api/users/profile
    @access Public
*/
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

/*
    @desc   Update user Profile
    @route  PUT/ api/users/profile
    @access Private
*/
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User Not Found');
  }
});

/*
    @desc   Get users 
    @route  GET/ api/users/
    @access Private/Admin
*/
const getUsers = asyncHandler(async (req, res) => {
  res.send('Get user ');
});

/*
    @desc   Get user by ID
    @route  GET/ api/users/:id
    @access Private/Admin
*/
const getUserById = asyncHandler(async (req, res) => {
  res.send('Get user by ID');
});

/*
    @desc   Delete users 
    @route  DELETE/ api/users/:id
    @access Private/Admin
*/
const deleteUser = asyncHandler(async (req, res) => {
  res.send('Delete user ');
});

/*
    @desc   Update users 
    @route  PUT/ api/users/:id
    @access Private/Admin
*/
const updateUser = asyncHandler(async (req, res) => {
  res.send('Update user ');
});

export {
  loginUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
