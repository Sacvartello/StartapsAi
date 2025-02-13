const http = require('http');
const app = require('./app');

const PORT = 5000;

// ✅ Создаём сервер
const server = http.createServer(app);

// ✅ Логируем успешный запуск сервера
server.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на порту ${PORT}`);
});

// ✅ Обработчик ошибок сервера
server.on('error', (err) => {
    console.error(`❌ Ошибка сервера: ${err.message}`);
});

// ✅ Обработчик закрытия сервера
process.on('SIGINT', () => {
    console.log('🔻 Остановка сервера...');
    process.exit();
});