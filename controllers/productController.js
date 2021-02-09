import asyncHandler from 'express-async-handler';
import client from '../config/db.js';


// @desc Fetch all products
// @route GET /api/products
// @access Public
const getDogFood = asyncHandler(async (req, res) => {
  let sql = `SELECT * FROM dogfood`;
  console.log('in here')
  console.log(client);
  const dogFood = await client.query(sql)
  res.json(dogFood);
})

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
const getDogFoodById = asyncHandler(async(req, res) => {
  const dogFood = await client.query(sql)
  if (dogFood) {
    res.json(dogFood);
  } else {
    res.status(404);
    throw new Error('product not found');
  }
})

export {
  getDogFood,
  getDogFoodById
}