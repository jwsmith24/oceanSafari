import mongoose from 'mongoose';

const uri =
  'mongodb+srv://jsmith181997:QWF2Tquxvu7AFzQu@safari.gsoww1i.mongodb.net/safariData?retryWrites=true&w=majority&appName=safari';

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

export async function connectDB() {
  // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
  await mongoose.connect(uri, clientOptions);
  await mongoose.connection.db.admin().command({ ping: 1 });
  console.log('Pinged your deployment. You successfully connected to MongoDB!');
}

export async function disconnectDB() {
  await mongoose.disconnect();
}
