const express = require('express');
const rootRouter = express.Router();
const ideaRouter = require('./ideaRouter')
const createMessage = require('../controllers/rootControler')
const cors = require('cors');

const OpenAi = require('openai')
const dotenv =require('dotenv')
dotenv.config()

const openai = new OpenAi({
    apiKey:process.env['API_KEY']
})

app.use(cors());
app.post('/quetion', )


module.exports = [rootRouter, openai]