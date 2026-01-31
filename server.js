const express = require('express');
const bodyParser = require('body-parser');
const connectToMongo = require('./app/connection/db');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json()); 

connectToMongo();
app.use(cors());

app.use('/medicare', require('./app/routes/routes'));
app.get('/', (req, res) => {
    res.send('Welcome to the Admin API');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.use(express.urlencoded({ extended: true }));
