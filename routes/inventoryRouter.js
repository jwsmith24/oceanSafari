import { Router } from 'express';
import { getCategories } from '../controllers/categoryController.js';

export const inventoryRouter = Router();

/* GET home page. */
inventoryRouter.get('/', getCategories);
