require('dotenv').config({ path: '.env' });

const express = require('express');
const bodyParser = require('body-parser');

const verifyWebhook = require('./verify-webhook');
const messageWebhook = require('./message-webhook');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', verifyWebhook);
app.post('/', messageWebhook);

app.listen(5000, () => console.log('Server is listening on port 5000'));
