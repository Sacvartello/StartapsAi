import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "counter",
  initialState: {
    selectedAnswers: {},
  },
  reducers: {
    setSelectedAnswers: (state, action) => {
      const { questionId, answer } = action.payload;
      state.selectedAnswers[questionId] = answer; // Обновляем ответ в Redux
    },
  },
});

export const { selectedAnswers, setSelectedAnswers } = questionSlice.actions;
export default questionSlice.reducer;
