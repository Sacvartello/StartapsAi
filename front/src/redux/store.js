import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice"; // импортируем редьюсер

const store = configureStore({
  reducer: {
    counter: questionReducer, // подключаем редьюсер
  },
});

export default store;
