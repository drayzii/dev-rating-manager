/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import groupController from '../controllers/groupController';

const router = express.Router();
router.patch('/', groupController.createOrRemove);
export default router;
