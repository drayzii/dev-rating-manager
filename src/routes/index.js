import express from 'express';
import searchRouter from './searchRouter';
import userRouter from './userRouter';

const router = express.Router();


router.use('/search', searchRouter);
router.use('/users', userRouter);


export default router;
