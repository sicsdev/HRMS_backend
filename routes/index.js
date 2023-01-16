import express from 'express';
const router = express.Router();
import loginController from '../controllers/login.controller';
import profileController from '../controllers/profile.controller';
import signUpController from '../controllers/signup.controller';
import auth from '../middleware/auth';

router.post('/signup', signUpController.signup);
router.post('/login', loginController.login); 
router.get('/profile' , auth, profileController.profile); 
router.put('/editusername' , auth, profileController.editusername); 
router.put('/editemail' , auth, profileController.editemail); 
router.put('/editphone' , auth, profileController.editphone); 
router.put('/editpassword' , auth, profileController.editpassword); 
router.put('/editdob' , auth, profileController.editdob); 
router.post('/imageupload' , auth, profileController.imageupload); 
export default router;