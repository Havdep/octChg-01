import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./Components/Layout";
import Card from "./Components/Card";
import Announcement from "./Components/FilterComp/Announcement";
import Event from "./Components/FilterComp/Event";
import Holiday from "./Components/FilterComp/Holiday";
import Transaction from "./Components/FilterComp/Transaction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Card />} />
          <Route path="/:id" element={<Announcement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
