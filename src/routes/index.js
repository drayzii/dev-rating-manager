import express from 'express';
import searchRouter from './searchRouter';
import userRouter from './userRoutes';
import ratingRouter from './ratingRouter';
import groupRouter from './groupRouter';

const router = express.Router();

router.use('/search', searchRouter);
router.use('/users', userRouter.router);
router.use('/ratings', ratingRouter);
router.use('/users', userRouter.router);
router.use('/group', groupRouter);

export default router;
