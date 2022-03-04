import { Router } from 'express';
import * as customerController from '../controllers/customerController.js';
import { postCustomerValidationMiddleware } from '../middlewares/customerValidationMiddleware.js';

const router = new Router();

router.get('/customers', customerController.getCustomers);
router.get('/customers/:id', customerController.getCustomerById);
router.post('/customers', postCustomerValidationMiddleware, customerController.postCustomer);

export default router;
