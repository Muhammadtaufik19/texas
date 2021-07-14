import React from "react";
import "./Dingdong.css";
import { Button, Card, Container, Form, option } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import imageDingdong from "../../Assets/Image/dingdong/imageDingdong.png";
import d12 from "../../Assets/Image/dingdong/12d.png";
import d24 from "../../Assets/Image/dingdong/24d.png";
import d36 from "../../Assets/Image/dingdong/36d.png";
import d48 from "../../Assets/Image/dingdong/48d.png";
import blackred from "../../Assets/Image/dingdong/blackred.png";
import dragonTiger from "../../Assets/Image/dingdong/dragonTiger.png";
import pokerDice from "../../Assets/Image/dingdong/pokerDice.png";
import sicbo from "../../Assets/Image/dingdong/sicbo.png";

export default function Dingdong() {
  return (
    <div className="bg-dingdong">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <img src={imageDingdong} alt="" />
          </div>
        </div>
        <div className="card-dingdong">
          <Fade bottom duration={2000}>
            <img src={d36} alt="" />
            <img src={d24} alt="" />
          </Fade>
          <Fade bottom duration={3000}>
            <img src={d12} alt="" />
            <img src={sicbo} alt="" />
          </Fade>
          <Fade bottom duration={4000}>
            <img src={blackred} alt="" />
            <img src={dragonTiger} alt="" />
          </Fade>
          <Fade bottom duration={5000}>
            <img src={d48} alt="" />
            <img src={pokerDice} alt="" />
          </Fade>
        </div>
        <div className="conten-dingdong">
          <Fade bottom duration={6000}>
            <h1>
              <b>DINGDONG ONLINE TEXASPOKER.CC</b>
            </h1>
            <p>
              Permainan dingdong online dari Texaspoker.cc, merupakan permainan
              judi dingdong online resmi yang fair play dengan kemungkinan
              menang yang besar. Semua permainan dingdong Texaspoker.cc
              disiarkan secara live dengan kualitas streaming terbaik dan paling
              jernih.
            </p>
            <p>
              Texaspokercc merupakan salah satu agen resmi dingdong online di
              Indonesia yang telah mendapatkan tugas untuk melayani member dan
              calon member yang ingin melakukan aktivitas bermain dingdong
              seperti daftar dingdong online, deposit dingdong game, withdraw
              koin dingdong atau menjawab pertanyaan member seputar permainan
              judi dingdong uang asli indonesia. Customer service kami siap
              melayani anda 24 jam non stop setiap harinya.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}
