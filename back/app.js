const express = require('express');
const rootRouter = require('./routes/rootRouter.js'); 
const cors = require('cors');

const app = express();

// ✅ Подключаем CORS и JSON-парсер
app.use(cors());
app.use(express.json());

// ✅ Логируем все входящие запросы
app.use((req, res, next) => {
    console.log(`🔹 Запрос: ${req.method} ${req.url}`);
    next();
});

// ✅ Подключаем роутер
app.use('/api', rootRouter);

// ✅ Выводим все зарегистрированные маршруты
app._router.stack.forEach((r) => {
   if (r.route) {
       console.log(`📌 Зарегистрированный маршрут: ${r.route.path}`);
   }
});

module.exports = app;
