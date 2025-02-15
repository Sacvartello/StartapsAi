const express = require('express');

module.exports.createMessage = async (req, res, next) => {
    try {
        console.log('Запрос получен');
        console.log("📩 Получен запрос с данными:", req.body);
        const { prompt } = req.body;
        console.log('prompt:', prompt);

        const openai = req.openai; // ✅ Убеждаемся, что openai передаётся

        if (!openai) {
            throw new Error("OpenAI API не инициализирован");
        }

        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: prompt }]
        });

        res.json(response.choices[0].message);
    } catch (error) {
        console.error('Ошибка:', error);
        res.status(500).json({ error: 'Ошибка сервера', details: error.message });
    }
};
