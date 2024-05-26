import Item from '../models/Item.js';

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    console.log(items);
    res.render('index', { title: 'Inventory' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
