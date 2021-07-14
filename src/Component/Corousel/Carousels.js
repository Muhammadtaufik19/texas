import React from "react";
import "./Carousels.css";
import { Carousel } from "react-bootstrap";
import caroulsel1 from "../../Assets/Image/caraosel/caroulsel-1.jpg";
import caroulsel2 from "../../Assets/Image/caraosel/caroulsel-2.jpg";
import caroulsel3 from "../../Assets/Image/caraosel/caroulsel-3.jpg";

export default function Carousels() {
  return (
    <div className="container bg-carousel">
      <Carousel className="ukuran">
        <Carousel.Item>
          <img
            // style={{ height: "550px", width: "100%" }}
            className="d-block "
            src={caroulsel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Menangkan Hadiah Milyaran rupian dalm sehari</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="coro">
          <img
            // style={{ height: "550px", width: "100%" }}
            className="d-block coro-2"
            src={caroulsel3}
            alt="Second slide "
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            // style={{ height: "550px", width: "100%" }}
            className="d-block"
            src={caroulsel1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <p>Menangkan Hadiah Milyaran rupian dalm sehari</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
