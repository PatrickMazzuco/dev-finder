import { Router } from 'express';

import searchController from '../controllers/search';

const router = Router();

// @route   GET /search
// @desc    Search devs
// @access  Public
router.get('/search', searchController.search);

export default router;
