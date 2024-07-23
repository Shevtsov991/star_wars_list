import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import { PaginationProvider } from "./providers/paginationProviders";
import { Route, Routes } from "react-router";
import Detail from "./pages/detailed/detail";
import { fetchStarWars } from "./store/thunks/fetchStarWars";
import { useCastomDispatch } from "./hooks/store";

function App() {
  const dispatch = useCastomDispatch();
  useEffect(() => {
    for (let index = 1; index < 10; index++) {
      dispatch(fetchStarWars(index));
    }
  }, []);
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
