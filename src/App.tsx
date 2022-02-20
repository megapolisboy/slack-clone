import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import styled from "styled-components";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route path="/" element={<>{/*Chat*/}</>} />
          </Routes>
        </AppBody>
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
