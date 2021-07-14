import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="bg-footer">
      <div className="container content-footer">
        <p>
          Creadated <i>by</i> <a>Taufik</a>
        </p>

        <p className="ml-5">
          <a
            href="https://www.linkedin.com/in/muhammad-taufik-868792167/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
        </p>
        <p className="ml-2">
          <a
            href="https://www.instagram.com/taufik_streetball/"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </p>
        <p className="ml-2">
          <a href="https://github.com/Muhammadtaufik19" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  );
}
