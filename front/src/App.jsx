import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Form from "./Page/Form/Form";
import Test from "./Page/Test/Test";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/question" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
