const express = require('express');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Create a new product
router.post('/', async (req, res) => {
    // const newProduct = new Product(req.body);
    // await newProduct.save();
    res.json({name : "blush", shade : "#ff20f"});
});

// Update a product
router.put('/:id', async (req, res) => {
    res.json({name : "blush", shade : "#ff20f"});
});

// Delete a product
router.delete('/:id', async (req, res) => {
   
    res.json({ message: 'Product deleted' });
});

module.exports = router;
