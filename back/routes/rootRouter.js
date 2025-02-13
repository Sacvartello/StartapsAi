const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAi = require('openai');
const { createMessage } = require('../controllers/rootControler');

dotenv.config();

const rootRouter = express.Router();
rootRouter.use(cors());

// ✅ Подключаем OpenAI
const openai = new OpenAi({
    apiKey: process.env.OPENAI_API_KEY
});

// ✅ Передаём OpenAI в req
rootRouter.use((req, res, next) => {
    req.openai = openai;
    next();
});

// ✅ Маршрут для обработки сообщений
rootRouter.post('/question', createMessage);

console.log('✅ Маршрут /api/question зарегистрирован');

module.exports = rootRouter;
