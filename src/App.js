import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";

function App() {
  return (
    <>
      <h1>SSR</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/articles">Articles</Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
      </Routes>
    </>
  );
}

export default App;
