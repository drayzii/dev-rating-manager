import express from 'express';
import searchRouter from './searchRouter';

const router = express.Router();


router.use('/search', searchRouter);


export default router;