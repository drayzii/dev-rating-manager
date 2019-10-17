/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import searchController from '../controllers/searchController';
import searchValidator from '../validation/searchValidator';

const router = express.Router();

router.get('/', searchValidator.checkRequestParams, searchController.searchUser);


export default router;
