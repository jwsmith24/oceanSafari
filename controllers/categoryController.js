import Category from '../models/Category.js';

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
    console.log(res);
    // todo: update with inventory page
    res.render('index', { title: 'Categories' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};