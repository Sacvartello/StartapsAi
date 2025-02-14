import React from "react";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

export default function Result() {
//   const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-500 to-blue-600 text-white text-center px-4">
      {/* Анімація успішного завершення */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
        className="text-4xl font-bold"
      >
        Result
      </motion.div>
    </div>
  );
}
