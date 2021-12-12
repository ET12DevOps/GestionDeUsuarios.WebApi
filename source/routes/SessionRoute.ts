import express from 'express';
import controller from '../controllers/SessionController';
const router = express.Router();

router.get('/api/session', controller.getSessions);

export = router;