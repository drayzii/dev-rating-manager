import express from 'express';
import searchRouter from './searchRouter';
import userRouter from './userRoutes';

const router = express.Router();


router.use('/search', searchRouter);
router.use('/users', userRouter.router);

export default router;
