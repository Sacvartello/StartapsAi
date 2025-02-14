import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Happy() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-500 to-blue-600 text-white text-center px-4 sm:px-8 md:px-12">
      {/* Анімація успішного завершення */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold"
      >
        🎉 Вітаємо! Ви успішно пройшли тест! 🎉
      </motion.div>

      {/* Опис */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 text-lg sm:text-xl md:text-2xl"
      >
        Дякуємо за участь! Тепер ви можете переглянути свої результати.
      </motion.p>

      {/* Кнопка перехода */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 px-6 py-3 text-lg font-semibold rounded-xl bg-white text-blue-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-8 sm:py-4 sm:text-xl md:px-10 md:py-5 md:text-2xl"
        onClick={() => navigate("/results")}
      >
        Перейти до результатів
      </motion.button>
    </div>
  );
}
