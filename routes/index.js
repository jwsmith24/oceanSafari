import { Router } from 'express';
import { getItems } from '../controllers/inventoryController.js';

export const indexRouter = Router();

/* GET home page. */
indexRouter.get('/', getItems);
