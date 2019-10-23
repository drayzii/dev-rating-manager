/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import searchController from '../controllers/searchController';
import searchValidator from '../validation/searchValidator';
import auth from '../middlewares/auth';
import { ratingAccess } from '../middlewares/access';

const router = express.Router();

router.get('/',auth, ratingAccess, searchValidator.checkRequestParams, searchController.searchUser);


export default router;
