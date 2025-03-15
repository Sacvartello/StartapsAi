const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAi = require('openai');
const { createMessage, createTrends } = require('../controllers/rootControler');


dotenv.config();

const rootRouter = express.Router();
rootRouter.use(cors());

// ✅ Подключаем OpenAI
const openai = new OpenAi({
    apiKey: process.env.OPENAI_API_KEY
});

const googleTrends = require('google-trends-api');

const searchTerm = 'cybersecurity'; // Тема, яку хочеш перевірити

// ✅ Передаём OpenAI в req
rootRouter.use((req, res, next) => {
    req.openai = openai;
    next();
});

// ✅ Маршрут для обработки сообщений
rootRouter.post('/question', createMessage);
rootRouter.post('/trends', createTrends)

console.log('✅ Маршрут /api/result зареєстрований');

module.exports = rootRouter;
