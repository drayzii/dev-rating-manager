/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import groupController from '../controllers/groupController';
import listValidator from '../validation/enginnerListValidator';

const router = express.Router();
router.patch('/', listValidator.list, groupController.createOrRemove);
export default router;
