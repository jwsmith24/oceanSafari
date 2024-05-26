import mongoose from 'mongoose';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { inventoryRouter } from './routes/inventoryRouter.js';
import { indexRouter } from './routes/indexRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));

app.use('/', indexRouter);
app.use('/inventory', inventoryRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

const uri =
  'mongodb+srv://jsmith181997:QWF2Tquxvu7AFzQu@safari.gsoww1i.mongodb.net/?retryWrites=true&w=majority&appName=safari';

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

async function connectDB() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
connectDB().catch(console.dir);
