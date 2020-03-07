import { Router } from 'express';

import devController from '../controllers/dev';

const router = Router();

// @route   POST /devs
// @desc    Register dev
// @access  Public
router.post('/devs', devController.createDev);

export default router;
