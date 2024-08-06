const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRouter = require('./routes/productRoutes')

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://kishita562:testecom@cluster0.mro410s.mongodb.net/ecom', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.error('Connection error:', error));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define a schema and model
const itemSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const Item = mongoose.model('Item', itemSchema);

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// Test route
app.get('/test', (req, res) => {
    res.send('Server is reachable');
});

// Routes
app.get('/items', async (req, res) => {
    console.log('GET /items called');
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/items', async (req, res) => {
    console.log('POST /items called with body:', req.body);
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).json(newItem); 
    } catch (error) {
        console.error('Error saving item:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.use("/products", productRouter)

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
