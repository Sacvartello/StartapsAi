const express = require('express');
const googleTrends = require('google-trends-api');
const searchTerm = 'cybersecurity'; // Тема, яку хочеш перевірити
module.exports.createMessage = async (req, res, next) => {
    try {
        console.log('Запрос получен');
        const { prompt } = req.body;
        console.log('prompt:', prompt);

        const openai = req.openai; // ✅ Убеждаемся, что openai передаётся

        if (!openai) {
            throw new Error("OpenAI API не инициализирован");
        }

        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: 'do you have hobby' }]
        });

        res.json(response.choices[0].message);
    } catch (error) {
        console.error('Ошибка:', error);
        res.status(500).json({ error: 'Ошибка сервера', details: error.message });
    }
};

module.exports.createTrends =async (req, res,next) =>{
    googleTrends.interestOverTime({ keyword: searchTerm, geo: 'UA', timeframe: 'today 12-m' })
        .then((result) => {
        const data = JSON.parse(result);
        console.log(`Популярність "${searchTerm}" в Україні за останні 12 місяців:`);
        console.log(data.default.timelineData);
    })
    .catch((err) => {
        console.error('Помилка:', err);
    })
}