import express from 'express';
import controller from '../controllers/UserController';
const router = express.Router();

router.get('/api/users', controller.getUsers);
router.get('/api/users/:id', controller.getUser);
router.post('/api/users', controller.createUser);
router.put('/api/users/:id', controller.updateUser);
router.delete('/api/users/:id', controller.removeUser);

export = router;