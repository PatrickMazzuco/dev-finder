import { Router } from 'express';

import devController from '../controllers/dev';

const router = Router();

// @route   POST /devs
// @desc    Register dev
// @access  Public
router.post('/devs', devController.createDev);

// @route   GET /devs
// @desc    Fetch all devs
// @access  Public
router.get('/devs', devController.getAll);

export default router;
