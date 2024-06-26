import Item from '../models/Item.js';
import mongoose from 'mongoose';

const isConnected = () => mongoose.connection.readyState === 1;

export const getItems = async (req, res) => {
  if (!isConnected()) {
    return res.status(500).json({ message: 'Not connected to database :(' });
  }

  try {
    const items = await Item.find().populate('category');
    res.render('index', processItems(items));
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

function processItems(items) {
  return {
    title: 'Inventory',
    inventoryList: items,
  };
}
