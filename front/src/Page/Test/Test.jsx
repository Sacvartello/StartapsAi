import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Импортируем useNavigate
import { setSelectedAnswers } from "../../redux/questionSlice"; // Ваш экшен
import "./test.css";

export default function Test() {
  const questions = [
    {
      id: 1,
      text: "У якій сфері ви хочете розпочати свій стартап?",
      answers: ["Технології", "Медицина", "Фінанси", "Екологія", "Не знаю"],
    },
    {
      id: 2,
      text: "Які у вас є навички та досвід?",
      answers: ["Програмування", "Маркетинг", "Фінанси", "Дизайн", "Інше"],
    },
    {
      id: 3,
      text: "Який рівень ризику вам комфортний?",
      answers: ["Високий", "Середній", "Низький"],
    },
    {
      id: 4,
      text: "Які у вас інтереси та пристрасті?",
      answers: ["Технології", "Бізнес", "Наука", "Мистецтво", "Спорт"],
    },
    {
      id: 5,
      text: "Ви готові працювати самостійно чи віддаєте перевагу командній роботі?",
      answers: ["Самостійно", "У команді", "Залежить від проєкту"],
    },
    {
      id: 6,
      text: "Яку проблему ви хочете вирішити?",
      answers: ["Покращити життя людей", "Змінити індустрію", "Заробити гроші", "Не знаю"],
    },
    {
      id: 7,
      text: "Де ви плануєте запускати стартап – у своєму регіоні чи глобально?",
      answers: ["Локально", "Глобально", "Поки не вирішив"],
    },
    {
      id: 8,
      text: "Скільки часу ви готові інвестувати у стартап?",
      answers: ["Повний робочий день", "Половину дня", "Кілька годин на тиждень"],
    },
    {
      id: 9,
      text: "Який у вас рівень знань про бізнес та підприємництво?",
      answers: ["Високий", "Середній", "Початковий", "Жодних"],
    },
    {
      id: 10,
      text: "Яка ваша улюблена книга?",
      answers: ["Бізнес-література", "Наукова фантастика", "Художня література", "Не люблю читати"],
    },
  ];

  const [questionsIndex, setQuestionsIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Инициализируем navigate

  const handleAnswerClick = (answer) => {
    dispatch(setSelectedAnswers({ questionId: questionsIndex, answer }));
    if (questionsIndex < questions.length - 1) {
      setQuestionsIndex(questionsIndex + 1);
    } else {
      setIsFinished(true);
      // После завершения теста перенаправляем на страницу с результатами
      navigate('/happy'); // Переход на компонент Result
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white text-center px-4">
      {/* Логотип */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
        className="absolute top-4 left-4 text-xl font-bold"
      >
        StartapsAi
      </motion.div>

      {/* Отображаем вопросы или финальное сообщение */}
      {!isFinished ? (
        <>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
            className="text-3xl font-bold"
          >
            {questions[questionsIndex].text}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            className="mt-8 space-y-4 w-full max-w-md"
          >
            {questions[questionsIndex].answers.map((answer, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-2 text-lg font-semibold rounded-xl bg-white text-blue-700 hover:bg-gray-200"
                onClick={() => handleAnswerClick(answer)}
              >
                {answer}
              </motion.button>
            ))}
          </motion.div>
        </>
      ) : null}
    </div>
  );
}
