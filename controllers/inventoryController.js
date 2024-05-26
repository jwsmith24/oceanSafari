import Item from '../models/Item.js';
import mongoose from 'mongoose';

const isConnected = () => mongoose.connection.readyState === 1;

export const getItems = async (req, res) => {
  if (!isConnected()) {
    return res.status(500).json({ message: 'Not connected to database :(' });
  }

  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
