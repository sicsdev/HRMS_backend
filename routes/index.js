import express from 'express';
const router = express.Router();
import loginController from '../controllers/login.controller';
import profileController from '../controllers/profile.controller';
import signUpController from '../controllers/signup.controller';
import auth from '../middleware/auth';

router.post('/signup', signUpController.signup);
router.post('/login', loginController.login); 
router.get('/profile' , auth, profileController.profile); 


export default router;