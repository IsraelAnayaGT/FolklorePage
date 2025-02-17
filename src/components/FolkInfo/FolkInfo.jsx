import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Si estás usando react-router
import ButtonIcon from "../../assets/hechizo-magico.png"

import "./FolkInfo.css";
const folksData = [
  { id: 1, name: "Alaric", image: "../../../public/imgs/folk (1).png" },
  { id: 2, name: "Balthazar", image: "../../../public/imgs/folk (2).png" },
  { id: 3, name: "Cedric", image: "../../../public/imgs/folk (3).png" },
  { id: 4, name: "Daphne", image: "../../../public/imgs/folk (4).png" },
  { id: 5, name: "Eldrin", image: "../../../public/imgs/folk (5).png" },
  { id: 6, name: "Faelan", image: "../../../public/imgs/folk (6).png" },
  { id: 7, name: "Galen", image: "../../../public/imgs/folk (7).png" },
  { id: 8, name: "Hesper", image: "../../../public/imgs/folk (8).png" },
  { id: 9, name: "Ishara", image: "../../../public/imgs/folk (9).png" },
  { id: 10, name: "Jareth", image: "../../../public/imgs/folk (10).png" },
  { id: 11, name: "Kiran", image: "../../../public/imgs/folk (11).png" },
  { id: 12, name: "Lirael", image: "../../../public/imgs/folk (12).png" },
  { id: 13, name: "Marek", image: "../../../public/imgs/folk (13).png" },
  { id: 14, name: "Nessa", image: "../../../public/imgs/folk (14).png" },
  { id: 15, name: "Orin", image: "../../../public/imgs/folk (15).png" },
  { id: 16, name: "Padrig", image: "../../../public/imgs/folk (16).png" },
  { id: 17, name: "Quinn", image: "../../../public/imgs/folk (17).png" },
  { id: 18, name: "Rhiannon", image: "../../../public/imgs/folk (18).png" },
  { id: 19, name: "Soren", image: "../../../public/imgs/folk (19).png" },
  { id: 20, name: "Thalira", image: "../../../public/imgs/folk (20).png" },
  { id: 21, name: "Uldric", image: "../../../public/imgs/folk (21).png" },
  { id: 22, name: "Vala", image: "../../../public/imgs/folk (22).png" },
  { id: 23, name: "Wren", image: "../../../public/imgs/folk (23).png" },
  { id: 24, name: "Xanthe", image: "../../../public/imgs/folk (24).png" },
  { id: 25, name: "Ysolde", image: "../../../public/imgs/folk (25).png" },
  { id: 26, name: "Zane", image: "../../../public/imgs/folk (26).png" },
  { id: 27, name: "Ari", image: "../../../public/imgs/folk (27).png" },
  { id: 28, name: "Brenna", image: "../../../public/imgs/folk (28).png" },
  { id: 29, name: "Caius", image: "../../../public/imgs/folk (29).png" },
  { id: 30, name: "Diantha", image: "../../../public/imgs/folk (30).png" },
  { id: 31, name: "Elyndra", image: "../../../public/imgs/folk (31).png" },
  { id: 32, name: "Fiora", image: "../../../public/imgs/folk (32).png" },
  { id: 33, name: "Gavriel", image: "../../../public/imgs/folk (33).png" },
  { id: 34, name: "Halley", image: "../../../public/imgs/folk (34).png" },
  { id: 35, name: "Idris", image: "../../../public/imgs/folk (35).png" },
  { id: 36, name: "Juno", image: "../../../public/imgs/folk (36).png" },
  { id: 37, name: "Kelda", image: "../../../public/imgs/folk (37).png" },
  { id: 38, name: "Luna", image: "../../../public/imgs/folk (38).png" },
  { id: 39, name: "Mira", image: "../../../public/imgs/folk (39).png" },
  { id: 40, name: "Nadira", image: "../../../public/imgs/folk (40).png" },
  { id: 41, name: "Omar", image: "../../../public/imgs/folk (41).png" },
  { id: 42, name: "Perry", image: "../../../public/imgs/folk (42).png" },
  { id: 43, name: "Quintus", image: "../../../public/imgs/folk (43).png" },
  { id: 44, name: "Raelan", image: "../../../public/imgs/folk (44).png" },
  { id: 45, name: "Selene", image: "../../../public/imgs/folk (45).png" },
  { id: 46, name: "Thorne", image: "../../../public/imgs/folk (46).png" },
  { id: 47, name: "Uriah", image: "../../../public/imgs/folk (47).png" },
  { id: 48, name: "Vespera", image: "../../../public/imgs/folk (48).png" },
  { id: 49, name: "Wynne", image: "../../../public/imgs/folk (49).png" },
  { id: 50, name: "Xander", image: "../../../public/imgs/folk (50).png" },
  { id: 51, name: "Yara", image: "../../../public/imgs/folk (51).png" },
  { id: 52, name: "Zephyr", image: "../../../public/imgs/folk (52).png" },
  { id: 53, name: "Althar", image: "../../../public/imgs/folk (53).png" },
  { id: 54, name: "Bram", image: "../../../public/imgs/folk (54).png" },
  { id: 55, name: "Cora", image: "../../../public/imgs/folk (55).png" },
  { id: 56, name: "Derrick", image: "../../../public/imgs/folk (56).png" },
  { id: 57, name: "Elys", image: "../../../public/imgs/folk (57).png" },
  { id: 58, name: "Faris", image: "../../../public/imgs/folk (58).png" },
  { id: 59, name: "Gwen", image: "../../../public/imgs/folk (59).png" },
  { id: 60, name: "Hara", image: "../../../public/imgs/folk (60).png" },
  { id: 61, name: "Isabel", image: "../../../public/imgs/folk (61).png" },
  { id: 62, name: "Jerric", image: "../../../public/imgs/folk (62).png" },
  { id: 63, name: "Karla", image: "../../../public/imgs/folk (63).png" },
  { id: 64, name: "Lyle", image: "../../../public/imgs/folk (64).png" },
  { id: 65, name: "Mace", image: "../../../public/imgs/folk (65).png" },
  { id: 66, name: "Nessa", image: "../../../public/imgs/folk (66).png" },
  { id: 67, name: "Orion", image: "../../../public/imgs/folk (67).png" },
  { id: 68, name: "Pax", image: "../../../public/imgs/folk (68).png" },
  { id: 69, name: "Rex", image: "../../../public/imgs/folk (69).png" },
  { id: 70, name: "Sylas", image: "../../../public/imgs/folk (70).png" },
  { id: 71, name: "Tessa", image: "../../../public/imgs/folk (71).png" },
  { id: 72, name: "Ulric", image: "../../../public/imgs/folk (72).png" },
  { id: 73, name: "Verena", image: "../../../public/imgs/folk (73).png" },
  { id: 74, name: "Wrenna", image: "../../../public/imgs/folk (74).png" },
  { id: 75, name: "Xander", image: "../../../public/imgs/folk (75).png" },
  { id: 76, name: "Ylva", image: "../../../public/imgs/folk (76).png" },
  { id: 77, name: "Zira", image: "../../../public/imgs/folk (77).png" },
  { id: 78, name: "Aeris", image: "../../../public/imgs/folk (78).png" },
  { id: 79, name: "Briar", image: "../../../public/imgs/folk (79).png" },
  { id: 80, name: "Calyx", image: "../../../public/imgs/folk (80).png" },
  { id: 81, name: "Dax", image: "../../../public/imgs/folk (81).png" },
  { id: 82, name: "Elior", image: "../../../public/imgs/folk (82).png" },
  { id: 83, name: "Faylen", image: "../../../public/imgs/folk (83).png" },
  { id: 84, name: "Gorrin", image: "../../../public/imgs/folk (84).png" },
  { id: 85, name: "Havon", image: "../../../public/imgs/folk (85).png" },
  { id: 86, name: "Iara", image: "../../../public/imgs/folk (86).png" },
  { id: 87, name: "Jorin", image: "../../../public/imgs/folk (87).png" },
  { id: 88, name: "Kestrel", image: "../../../public/imgs/folk (88).png" },
  { id: 89, name: "Leona", image: "../../../public/imgs/folk (89).png" },
  { id: 90, name: "Mirael", image: "../../../public/imgs/folk (90).png" },
  { id: 91, name: "Nira", image: "../../../public/imgs/folk (91).png" },
  { id: 92, name: "Orla", image: "../../../public/imgs/folk (92).png" },
  { id: 93, name: "Phelan", image: "../../../public/imgs/folk (93).png" },
  { id: 94, name: "Qira", image: "../../../public/imgs/folk (94).png" },
  { id: 95, name: "Rivka", image: "../../../public/imgs/folk (95).png" },
  { id: 96, name: "Sable", image: "../../../public/imgs/folk (96).png" },
  { id: 97, name: "Thalor", image: "../../../public/imgs/folk (97).png" },
  { id: 98, name: "Ulrika", image: "../../../public/imgs/folk (98).png" },
  { id: 99, name: "Viera", image: "../../../public/imgs/folk (99).png" },
  { id: 100, name: "Wendell", image: "../../../public/imgs/folk (100).png" },
  { id: 101, name: "Xyla", image: "../../../public/imgs/folk (101).png" },
  { id: 102, name: "Ywen", image: "../../../public/imgs/folk (102).png" },
  { id: 103, name: "Zareth", image: "../../../public/imgs/folk (103).png" },
  { id: 104, name: "Arwen", image: "../../../public/imgs/folk (104).png" },
  { id: 105, name: "Brennan", image: "../../../public/imgs/folk (105).png" },
  { id: 106, name: "Cyril", image: "../../../public/imgs/folk (106).png" },
  { id: 107, name: "Dora", image: "../../../public/imgs/folk (107).png" },
  { id: 108, name: "Enid", image: "../../../public/imgs/folk (108).png" },
  { id: 109, name: "Fiora", image: "../../../public/imgs/folk (109).png" },
];

export default function FolkInfo() {
  const { id } = useParams(); // Obtén el id desde la URL
  const [folk, setFolk] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Busca el folk por su id
    const selectedFolk = folksData.find((f) => f.id === parseInt(id));

    if (selectedFolk) {
      setFolk(selectedFolk);
    } else {
      console.error("Folk no encontrado");
    }
  }, [id]);

  if (!folk) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="folk-info-container">
      <div className="folk-info-text">
        <div className="folk-info-description">
          <div className="folk-info-title">
            <h1>{folk.name}</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nobis
            veniam illum iste nihil. Amet magnam mollitia blanditiis animi nobis
            placeat officia obcaecati! Asperiores aliquid aperiam perferendis
            ducimus illum quaerat.
          </p>
        </div>
        <div className="folk-info-back">
          <button className="folk-atras" onClick={() => navigate("/home")}>
            <img className="flok-button-imagen" src={ButtonIcon} alt="icono" />
            Atras
            </button>
        </div>
      </div>
      <img className="folk-imagen" src={folk.image} alt={folk.name} />
    </div>
  );
}
