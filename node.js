const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const sampleDeals = [
    { title: "Wireless Earbuds", price: "$29.99", image: "https://via.placeholder.com/150", link: "https://example.com/earbuds" },
    { title: "Smart Watch", price: "$199.99", image: "https://via.placeholder.com/150", link: "https://example.com/watch" },
    { title: "Gaming Laptop", price: "$999.99", image: "https://via.placeholder.com/150", link: "https://example.com/laptop" }
];

app.get('/api/deals', (req, res) => {
    res.json(sampleDeals);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
