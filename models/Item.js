import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  // reference to category
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
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
  return `/inventory/${this.category}/${this._id}`;
});

const Item = model('Item', itemSchema);
export default Item;
