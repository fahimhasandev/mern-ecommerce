import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  loginUser,
  registerUser,
  logOutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from '../controllers/userController.js';
const router = express.Router();

//Get and Post all users
router.route('/').get(protect, admin, getUsers).post(registerUser);

//Login - LogOut
router.post('/logout', logOutUser);
router.post('/login', loginUser); //authUser

//profile Route
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// Get-delete-update Single User
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
