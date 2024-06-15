const express = require('express');
const models = require('./models/index');

const app = express();

// middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ data: 'Home Page'});
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on Port - ${PORT}`);
});