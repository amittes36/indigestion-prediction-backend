require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const connectDB = require('./utils/db');

connectDB();

app.use('/api', require('./routes/route'));

app.listen(PORT, console.log(`server on http://localhost:${PORT}`));
