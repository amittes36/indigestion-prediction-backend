require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const connectDB = require('./utils/db');
const cors = require('cors');
const bodyParser = require('body-parser');

connectDB();

app.use(cors());

app.use(bodyParser.json());

app.use(express.json());

app.use('/api', require('./routes/route'));

app.listen(PORT, console.log(`server on http://localhost:${PORT}`));
