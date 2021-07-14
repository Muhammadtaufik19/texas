import React from "react";
import "./ListGame.css";
import Fade from "react-reveal/Fade";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Card, Container } from "react-bootstrap";
import listGame1 from "../../Assets/Image/listgame/cardGame.jpg";
import listGame2 from "../../Assets/Image/listgame/dingdong.jpg";
import listGame3 from "../../Assets/Image/listgame/togel.jpg";

export default function ListGame() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-4 ">
          <Fade bottom duration={1000}>
            <Card className="cards">
              <Card.Img className="list-game" variant="top" src={listGame1} />
              <Card.Body style={{ backgroundColor: "#343a40", color: "white" }}>
                <Card.Text>
                  Card games atau permainan Judi kartu online dari Texaspokercc
                  merupakan permainan kartu online terbaik yang bisa anda
                  mainkan secara terpercaya. Semua permainan kartu online yang
                  ini dapat anda mainkan langsung hanya menggunakan 1 Userid
                  saja.
                </Card.Text>
                <Button>
                  <Link className="ling" to="/card-game">
                    Mainkan
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Fade>
        </div>
        <div className="col-md-4">
          <Fade bottom duration={2000}>
            <Card className="cards">
              <Card.Img className="list-game" variant="top" src={listGame2} />
              <Card.Body style={{ backgroundColor: "#343a40", color: "white" }}>
                <Card.Text>
                  Permainan dingdong online merupakan permainan judi dingdong
                  online resmi yang fair play dengan kemungkinan menang yang
                  besar. Semua permainan dingdong Texaspoker.cc disiarkan secara
                  live dengan kualitas streaming terbaik dan paling jernih.
                </Card.Text>

                <Button>
                  <Link className="ling" to="/dingdong">
                    Mainkan
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Fade>
        </div>
        <div className="col-md-4">
          <Fade bottom duration={3000}>
            <Card className="cards">
              <Card.Img className="list-game" variant="top" src={listGame3} />
              <Card.Body style={{ backgroundColor: "#343a40", color: "white" }}>
                <Card.Text>
                  Mainkan permainan taruhan judi togel online dengan pasaran
                  paling kompetitif dan diskon paling besar karena Texaspoker.cc
                  merupakan situs togel online terbaik dan terpercaya. Pasang
                  angka hoki anda di Bandar Togel Terpercaya Texaspoker.cc dan
                  jadilah jutawan !!
                </Card.Text>
                <Button>
                  <Link className="ling" to="/card-game">
                    Mainkan
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Fade>
        </div>
      </div>
    </div>
  );
}
