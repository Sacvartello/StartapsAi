import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Form from "./Page/Form/Form";
import Test from "./Page/Test/Test";
import { useSelector } from "react-redux";
import Result from "./Page/Result/Result";
import Happy from "./Page/Happy/Happy";
function App() {
  const selectedAnswers = useSelector((state) => state.counter.selectedAnswers);
  console.log("Финальные ответы:", selectedAnswers);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/question" element={<Test />} />
        <Route path="/happy" element={<Happy />} />
        <Route path="/results" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
