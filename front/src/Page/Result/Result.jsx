import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Імпортуємо хук для навігації

export default function Result() {
  const [gptResponse, setGptResponse] = useState(null);

  const someone =
    "У якій сфері ви хочете розпочати свій стартап? Які у вас є навички та досвід? Який рівень ризику вам комфортний? Які у вас інтереси та пристрасті? Ви готові працювати самостійно чи віддаєте перевагу командній роботі? Яку проблему ви хочете вирішити? Де ви плануєте запускати стартап – у своєму регіоні чи глобально? Скільки часу ви готові інвестувати у стартап? Який у вас рівень знань про бізнес та підприємництво? Яка ваша улюблена книга?";

  const selectedAnswers = useSelector((state) => state.counter.selectedAnswers);

  const answersText = JSON.stringify(selectedAnswers);

  const navigate = useNavigate(); // ініціалізація хука для навігації

  useEffect(() => {
    console.log(
      "🚀 Отправляю запрос с prompt:"
    );

    fetch("http://localhost:5000/api/question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `вопросы : ${someone} а от ответы ${answersText}. Судя по этим его ответам на вопросы, дай для него топ 3 лучших стартапов, которые лично подходят для него. Важно: назови только название и всё.`,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("✅ Ответ от сервера:", data);
        setGptResponse(data?.content || "Помилка отримання відповіді");
      })
      .catch((error) => console.error("❌ Ошибка:", error));
  }, []);

  // Функція для переходу на головну сторінку
  const goToHome = () => {
    navigate("/");  // Перехід на головну сторінку
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-500 to-blue-600 text-white text-center px-4 py-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl w-full text-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl font-extrabold mb-6 text-blue-600"
        >
          Топ 3 стартапи для вас
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-2xl font-semibold text-gray-800"
        >
          {gptResponse ? (
            gptResponse.split("\n").map((line, index) => (
              <p key={index} className="mt-2">
                {line}
              </p>
            ))
          ) : (
            <p className="text-lg text-gray-600">Завантаження...</p>
          )}
        </motion.div>

        {/* Кнопка для переходу на головну */}
        <motion.button
          onClick={goToHome}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full text-lg shadow-lg"
        >
          Повернутися на головну
        </motion.button>

        {!gptResponse && (
          <motion.div
            className="mt-6"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-12 h-12 border-4 border-t-transparent border-blue-600 rounded-full animate-spin "></div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
