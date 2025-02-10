import React from "react";
import "./home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white text-center px-4 relative">
      {/* Лого в верхньому лівому кутку */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
        className="absolute top-4 left-4 text-xl font-bold md:text-2xl lg:text-3xl"
      >
        StartapsAi
      </motion.div>

      {/* Заголовок */}
      <motion.h1
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg"
      >
        Думаєш над стартапом?
      </motion.h1>

      {/* Текст */}
      <motion.p
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
        className="mt-4 text-lg sm:text-xl opacity-90"
      >
        Ми допоможемо тобі знайти ідею та створити бізнес!
      </motion.p>

      {/* Кнопка */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
        className="mt-8"
      >
         <Link to='/form'>
         <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 text-lg sm:text-xl bg-white text-blue-700 font-semibold rounded-xl shadow-md hover:bg-gray-200 transition"
        >
          Перейти до твого майбутнього стартапу
        </motion.button>
         </Link>

      </motion.div>
    </div>
  );
}
