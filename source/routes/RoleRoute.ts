import express from 'express';
import controller from '../controllers/RoleController';
const router = express.Router();

router.get('/api/roles', controller.getRoles);
router.get('/api/roles/:id', controller.getRole);
router.post('/api/roles', controller.createRole);
router.put('/api/roles/:id', controller.updateRole);
router.delete('/api/roles/:id', controller.removeRole);

export = router;