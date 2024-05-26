import express from 'express';
export const inventoryRouter = express.Router();

inventoryRouter.get('/', function (req, res, next) {
  res.send('inventory data will be here!');
});
