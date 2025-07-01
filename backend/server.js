const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let products = [
    { id: 1, name: "Wireless Headphones", price: 59.99 },
    { id: 2, name: "Smart Watch", price: 89.99 },
    { id: 3, name: "Bluetooth Speaker", price: 39.99 }
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/', (req, res) => {
    res.send("QuickShop Backend is running.");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
