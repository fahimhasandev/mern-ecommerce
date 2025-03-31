import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

/*
    @desc   Fetch all products
    @route  GET/ api/products
    @access Public
*/
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});


/*
    @desc   Fetch single product
    @route  GET/ api/product
    @access Public
*/
const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  if (product) {
    res.json(product);
  }
  res.status(404).json({ message: 'Product Not Found' });
});

export { getProducts, getProductById };
