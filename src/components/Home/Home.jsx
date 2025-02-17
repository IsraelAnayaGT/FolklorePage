import SorrowAudio from "../../assets/Sorrow.mp3";
import nuve from "../../assets/nube.png";
import sonido from "../../assets/sonido.gif"; // Ícono de audio activado
import silencio from "../../assets/silencio.gif"; // Ícono de audio desactivado
import { useState, useRef } from "react";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import "./Home.css"

import React from "react";

export default function Home() {
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false); // Estado para el mute
  const audioRef = useRef(null); // Referencia para el audio

  const handleAudioLoaded = () => {
    setAudioLoaded(true);
    console.log("Audio cargado y listo para reproducir");
  };

  const handleAudioPlay = () => {
    console.log("Audio está reproduciéndose");
  };

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isMuted) {
        audio.muted = false; // Desactivar el mute
      } else {
        audio.muted = true; // Activar el mute
      }
      setIsMuted(!isMuted); // Cambiar el estado de mute
    }
  };

  // Función para permitir la reproducción automática con interacción del usuario
  const handleUserInteraction = () => {
    const audio = audioRef.current;
    if (audio && !isAudioPlaying) {
      audio.currentTime = 0; // Reinicia el audio
      audio.play(); // Reproduce el audio
      setIsAudioPlaying(true); // Cambia el estado para indicar que el audio está reproduciéndose
    }
  };
  return (
    <>
      <div className="fondo" onClick={handleUserInteraction}>
        <div className="contaner-logo">
          <img src={logo} className="logo" alt="Logo" />
          <img src={nuve} className="nube" alt="nuve" />
          <img src={nuve} className="nube2" alt="nuve" />
        </div>
        <div className="audio-controls">
          {/* Botón con el ícono de audio activado/desactivado */}
          <button className="audio-button" onClick={toggleAudio}>
            {/* Cambia el ícono según el estado de audio */}
            <img
              src={isMuted ? silencio : sonido}
              alt="Audio Icon"
              className="audio-icon"
            />
          </button>
        </div>
        <div className="star-button-container">
          <Link to="/Menu" className="star-button">Start</Link>
        </div>
      </div>

      {/* Usamos ref para acceder al elemento de audio */}
      <audio
        ref={audioRef} // Referencia al audio
        loop
        onCanPlayThrough={handleAudioLoaded}
        onPlay={handleAudioPlay}
        muted={isMuted} // Usamos el estado de mute
      >
        <source src={SorrowAudio} type="audio/mp3" />
        Tu navegador no soporta la etiqueta de audio.
      </audio>
    </>
  );
}
