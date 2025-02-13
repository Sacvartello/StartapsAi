const express = require('express');

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
