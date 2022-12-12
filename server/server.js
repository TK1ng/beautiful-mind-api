require('dotenv').config();
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());


const { SERVER_PORT } = process.env;
app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT} `);
})