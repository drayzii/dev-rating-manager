/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import ratingValidator from '../validation/ratingValidator';
import ratingController from '../controllers/ratingController';

const router = express.Router();

router.post('/',ratingValidator.validateCreate, ratingController.createRatings);
router.patch('/:id',ratingValidator.validateCreate, ratingController.createRatings);


export default router;
