import React from "react";
import logo from "./logo.svg";
import Home from "./pages/home/Home";
import { PaginationProvider } from "./providers/paginationProviders";
import { Route, Routes } from "react-router";
import Detail from "./pages/detailed/detail";

function App() {
  return (
    <div className="container">
      <PaginationProvider>
        <header className="App-header"></header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </PaginationProvider>
    </div>
  );
}

export default App;
