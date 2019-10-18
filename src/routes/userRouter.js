import express from 'express';
import userController from '../controllers/userController';

const { viewAllProfiles, viewSingleProfile } = userController;

const router = express.Router();

router.get('/', viewAllProfiles);
router.get('/:id', viewSingleProfile);


export default router;
