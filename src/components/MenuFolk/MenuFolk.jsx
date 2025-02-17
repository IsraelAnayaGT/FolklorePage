import React from "react";
import "./MenuFolk.css";
import { Link } from "react-router-dom";
import Border from "../../assets/borde.png";

export default function MenuFolk() {
  return (
    <div className="container-menu">
      <div className="container-border">
        <img className="border-img" src={Border} alt="" />
      </div>
      <div className="container-border">
        <img className="border-img2" src={Border} alt="" />
      </div>
      <div className="container-border">
        <img className="border-img3" src={Border} alt="" />
      </div>
      <div className="container-border">
        <img className="border-img4" src={Border} alt="" />
      </div>
      <div className="container-menu-folk">
        <div className="container-title">
          <h1 className="title-welcome">Bienvenido a Folklore</h1>
        </div>
        <div className="container-cards">
          <div className="card">
            <Link className="link" to="/Home">
              <h2>Folks Originales</h2>
            </Link>
          </div>
          <div className="card">
            <h2>Crea tu Folk</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
