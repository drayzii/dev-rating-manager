import express from 'express';
import userController from '../controllers/userController';

const { viewAllProfiles } = userController;

const router = express.Router();

router.get('/', viewAllProfiles);


export default router;
