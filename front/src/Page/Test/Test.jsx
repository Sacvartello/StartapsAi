import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './test.css';

export default function Test() {
  const [otherAnswer, setOtherAnswer] = useState('');

  const handleChange = (e) => {
    setOtherAnswer(e.target.value);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white text-center px-4 relative">
      {/* Лого в верхньому лівому кутку */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 100 }}
        className="absolute top-4 left-4 text-xl font-bold md:text-2xl lg:text-3xl"
      >
        StartapsAi
      </motion.div>

      {/* Заголовок */}
      <motion.h1
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, type: 'spring', stiffness: 100 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg"
      >
        В якій сфері ви хочете розпочати свій стартап?
      </motion.h1>

      {/* Варіанти відповідей */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, type: 'spring', stiffness: 100 }}
        className="mt-8 space-y-4 w-full max-w-md sm:w-11/12 md:w-9/12 lg:w-7/12 xl:w-5/12"
      >
        {['Технології (штучний інтелект, блокчейн, розробка програмного забезпечення)', 
          'Охорона здоров\'я та медичні послуги', 
          'Екологія та сталий розвиток', 
          'Фінансові послуги (фінтех, криптовалюти)', 
          'Не знаю :('].map((item, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-4 py-2 text-lg bg-white text-blue-700 font-semibold rounded-xl shadow-md hover:bg-gray-200 transition"
          >
            {item}
          </motion.button>
        ))}

        {/* Поле для власної відповіді */}
        <motion.input
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          value={otherAnswer}
          onChange={handleChange}
          placeholder="Ваша власна відповідь"
          className="w-full mt-4 px-4 py-2 bg-transparent border border-white rounded-xl text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        />
      </motion.div>
    </div>
  );
}
