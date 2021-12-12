import express from 'express';
import controller from '../controllers/LoginController';
const router = express.Router();

router.post('/api/login', controller.postLogin);

export = router;