import React, { useState } from "react";
import { motion } from "framer-motion";
import "./form.css";
import { Link } from "react-router-dom";

export default function Form() {

   const [name, Setname] = useState('')
   



   // const handleSubmit = (e) => {
   //    e.preventDefault(); // Запобігає стандартній відправці форми

   //  }
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

      {/* Заголовок форми */}
      <motion.h1
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg"
      >
        Заповніть форму, щоб почати!
      </motion.h1>

      {/* Форма */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
        className="mt-8 p-6 bg-white bg-opacity-40 rounded-xl shadow-xl w-full max-w-md sm:w-11/12 md:w-9/12 lg:w-7/12 xl:w-5/12"
      >
        <form className="flex flex-col space-y-4">
          {/* Поле для імені */}
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            type="text"
            value={name}
            onChange={(e) => Setname(e.target.value)}
            placeholder="Ваше ім'я"
            className="px-4 py-2 bg-transparent border border-white rounded-xl text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          />

          {/* Поле для віку */}
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            type="text"
            placeholder="Ваш вік"
            className="px-4 py-2 bg-transparent border border-white rounded-xl text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          />

          {/* Поле для повідомлення */}
          <motion.textarea
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            placeholder="Ваші очікування"
            className="px-4 py-2 bg-transparent border border-white rounded-xl text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition h-32"
          />

          {/* Кнопка відправити */}
          <Link to="/test" >
          <motion.button
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-4 px-6 py-3 text-lg bg-white text-blue-700 font-semibold rounded-xl shadow-md hover:bg-gray-200 transition"
          >
            Відправити
          </motion.button>
          </Link>

        </form>
      </motion.div>
    </div>
  );
}
