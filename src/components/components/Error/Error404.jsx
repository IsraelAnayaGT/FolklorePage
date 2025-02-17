// src/NotFoundPage.js
import React from "react";
import "./error404.css"; // Asegúrate de que el archivo CSS esté correcto
import KeatError from "../../../assets/keaterror.png"; // Ruta correcta de la imagen

export const Error404 = () => {
  return (
    <div className="container">
      <div className="container-error-text">
        <h1>404 - Página no encontrada</h1>
        <p>Lo siento, la página que buscas no existe.</p>
      </div>
      <img className="container-error-img" src={KeatError} alt="Error 404" />
    </div>
  );
};
