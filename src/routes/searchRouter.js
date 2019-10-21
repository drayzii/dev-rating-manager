/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import searchController from '../controllers/searchController';
import searchValidator from '../validation/searchValidator';
import verify from '../middlewares/auth';

const router = express.Router();

router.get('/', verify, searchValidator.checkRequestParams, searchController.searchUser);


export default router;
