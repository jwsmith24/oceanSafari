import mongoose from 'mongoose';
import Item from './models/Item.js';

const itemCat = {
  STICKER: 'sticker',
  RASH_GUARD: 'rash-guard',
  HAT: 'hat',
};

mongoose.connect(
  'mongodb+srv://jsmith181997:QWF2Tquxvu7AFzQu@safari.gsoww1i.mongodb.net/safariData?retryWrites=true&w=majority&appName=safari'
);

const tigerSharkSticker = await Item.create({
  name: 'Tiger Shark Sticker',
  category: itemCat.STICKER,
  description:
    'This juvenile Tiger and their vibrant stripes will make a great addition to any sticker-friendly surface!',
  price: 3.0,
  stockCount: 20,
});

console.log(tigerSharkSticker);

const hawksbillTurtleSticker = await Item.create({
  name: 'Hawksbill Turtle Sticker',
  category: itemCat.STICKER,
  description: 'Spruce up a water bottle with this friendly turt!',
  price: 3.0,
  stockCount: 18,
});

console.log(hawksbillTurtleSticker);

const safariRashGuard = await Item.create({
  name: 'Safari Rash Guard',
  category: itemCat.RASH_GUARD,
  description:
    'Protect your skin from the waves and the sun while staying warm and looking stylish!',
  price: 30.0,
  stockCount: 14,
});

console.log(safariRashGuard);

const safariHat = await Item.create({
  name: 'Safari Hat',
  category: itemCat.HAT,
  description:
    'Keep the sun off your face and show off your love for ocean critters with this sleek hat!',
  price: 15.0,
  stockCount: 21,
});

console.log(safariHat);
