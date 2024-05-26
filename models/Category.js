import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const catSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
});

catSchema.virtual('url').get(function () {
  return `/inventory/category/${this._id}`;
});

const Category = model('Category', catSchema);
export default Category;
