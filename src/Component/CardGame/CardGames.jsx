import React from "react";
import "./CardGames.css";
import { Button, Card, Container, Form, option } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import bigTwo from "../../Assets/Image/card/bigTwo.png";
import dominoQQ from "../../Assets/Image/card/dominoQQ.png";
import pokerClasik from "../../Assets/Image/card/pokerClasik.png";
import texasPoker from "../../Assets/Image/card/texasPoker.png";
import aduQ from "../../Assets/Image/card/aduQ.png";
import blackjack from "../../Assets/Image/card/blackjack.png";
import bolaTangkas from "../../Assets/Image/card/bolaTangkas.jpg";
import ceme from "../../Assets/Image/card/ceme.png";
import cemeFighter from "../../Assets/Image/card/cemeFighter.png";
import jokerDealer from "../../Assets/Image/card/jokerDealer.png";
import omahPoker from "../../Assets/Image/card/omahPoker.png";
import pokerDealer from "../../Assets/Image/card/pokerDealer.png";
import threekings from "../../Assets/Image/card/threekings.png";
import image1 from "../../Assets/Image/card/image1.png";

export default function CardGames() {
  return (
    <div className="bg-cardGame">
      <div className="container">
        <img src={image1} alt="" />
        <div className="card-games">
          <Fade bottom duration={2000}>
            <img src={pokerClasik} alt="" />
          </Fade>
          <Fade bottom duration={2000}>
            <img src={texasPoker} alt="" />
          </Fade>
          <Fade bottom duration={3000}>
            <img src={dominoQQ} alt="" />
          </Fade>
          <Fade bottom duration={3000}>
            <img src={ceme} alt="" />
          </Fade>
          <Fade bottom duration={4000}>
            <img src={cemeFighter} alt="" />
          </Fade>
          <Fade bottom duration={4000}>
            <img src={bolaTangkas} alt="" />
          </Fade>
          <Fade bottom duration={5000}>
            <img src={bigTwo} alt="" />
          </Fade>
          <Fade bottom duration={5000}>
            <img src={pokerDealer} alt="" />
          </Fade>
          <Fade bottom duration={6000}>
            <img src={blackjack} alt="" />
          </Fade>
          <Fade bottom duration={6000}>
            <img src={threekings} alt="" />
          </Fade>
          <Fade bottom duration={7000}>
            <img src={jokerDealer} alt="" />
          </Fade>
          <Fade bottom duration={7000}>
            <img src={aduQ} alt="" />
          </Fade>
          <Fade bottom duration={8000}>
            <img src={omahPoker} alt="" />
          </Fade>
        </div>
        <div className="conten">
          <Fade bottom duration={9000}>
            <h1>
              <b>CARD GAMES ONLINE TEXASPOKER.CC</b>
            </h1>
            <p>
              Card games atau permainan Judi kartu online dari Texaspokercc
              merupakan permainan kartu online terbaik di indonesia yang bisa
              anda mainkan secara aman dan terpercaya. Semua permainan kartu
              online yang seru dan menantang ini dapat anda mainkan langsung
              hanya menggunakan 1 Userid saja.
            </p>
            <p>
              Jenis permainan kartu online terbaik yang kami hadirkan ini adalah
              jenis permainan yang bisa dengan mudah dimainkan oleh seluruh
              member menggunakan Komputer ataupun smartphone anda kapan dan
              dimana saja karena sudah didukung oleh sistem canggih berbasis
              HTML5.
            </p>
            <p>
              Jangan ragu dan segeralah bergabung dan bermain di situs judi
              online terbaik Texaspokercc ini karena anda juga akan merasakan
              kemenangan dengan permainan yang Fair Play 100%.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}
