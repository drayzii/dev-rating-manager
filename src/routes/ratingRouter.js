/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import ratingValidator from '../validation/ratingValidator';
import ratingController from '../controllers/ratingController';

const router = express.Router();

router.post('/rate/',ratingValidator.validateCreate, ratingController.createRatings);
router.patch('/rate/:id',ratingValidator.validateUpdate, ratingController.updateRating);
router.get('/rate', ratingController.getAllRatings);
router.get('/', ratingController.getAllEngineerRatings);
router.get('/:id', ratingController.getEngineerRating);


export default router;
