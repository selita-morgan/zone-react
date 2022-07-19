import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import React from "react";
import AboutPage from "./pages/AboutPage/AboutPage";
import StarWarsPage from "./pages/StarWarsTable/StarWarsPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}>
          {" "}
        </Route>
        <Route path="/about" element={<AboutPage></AboutPage>}></Route>
        <Route path="/starwars" element={<StarWarsPage></StarWarsPage>}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
