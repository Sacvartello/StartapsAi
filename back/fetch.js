fetch('http://localhost:5000/api/question', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prompt: "Яка погода сьогодні?" })
})
.then(response => response.json())
.then(data => {
  console.log('Ответ от сервера:', data);
})
.catch(error => console.error('Ошибка:', error));
