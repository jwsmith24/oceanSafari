import { Router } from 'express';

export const inventoryRouter = Router();

/* GET home page. */
inventoryRouter.get('/', function (req, res) {
  res.render('index', { title: 'Inventory Page' });
});
