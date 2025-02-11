const express = require('express');
const rootRouter = express.Router();
const {createMessage} = require('../controllers/rootControler')
const cors = require('cors');

const OpenAi = require('openai')
const dotenv =require('dotenv')
dotenv.config()

const openai = new OpenAi({
    apiKey:process.env['API_KEY']
})

rootRouter.use(cors);
rootRouter.post('/quetion', createMessage)

module.exports = [rootRouter, openai]