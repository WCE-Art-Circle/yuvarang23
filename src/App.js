import React from "react";
import Event from './pages/Event'
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

const App = () => {
  return (
    // <div className="app-wrapper">
    //  <Home/>
    // </div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/events" element={<Event/>}/>

    </Routes>
    </BrowserRouter>
  );
};

export default App;
