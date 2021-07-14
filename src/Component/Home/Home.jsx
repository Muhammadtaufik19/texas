import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Home.css";
import Header from "../Header/Header";
import Carousels from "../Corousel/Carousels";
import ListGame from "../ListGame/ListGame";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import CardGames from "../CardGame/CardGames";
import Dingdong from "../Dingdong/Dingdong";

export default function Home() {
  return (
    <div className="bg-home">
      <Carousels />
      <ListGame />
      <About />
    </div>
  );
}
