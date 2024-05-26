import { Router } from 'express';

export const indexRouter = Router();

/* GET home page. */
indexRouter.get('/', function (req, res) {
  res.render('index', { title: 'Home page' });
});
