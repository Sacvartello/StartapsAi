const h = await fetch('localhost:5000/api/question ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt: "Яка погода сьогодні?",
    })
    .then((response) => response.json())
    .then((data) => {
      setGptResponse(data.response); // зберігаємо відповідь GPT
    })
    .catch((error) => console.error('Error:', error))
}, []);