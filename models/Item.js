import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stockCount: {
    type: Number,
    required: true,
  },
});

itemSchema.virtual('url').get(function () {
  return `/inventory/${this._id}`;
});

const Sticker = model('Sticker', itemSchema);
export default Sticker;
