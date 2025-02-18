import React, { useState } from "react";
import "./StartView.css";
import SearchBar from "../components/SearchBar/Searchbar";
import { Link } from "react-router-dom"; // Importa Link para la navegación


export default function StartView() {
  const folksData = [
    { id: 1, name: "Alaric", image: "/imgs/folk (1).png" },
    { id: 2, name: "Balthazar", image: "/imgs/folk (2).png" },
    { id: 3, name: "Cedric", image: "/imgs/folk (3).png" },
    { id: 4, name: "Daphne", image: "/imgs/folk (4).png" },
    { id: 5, name: "Eldrin", image: "/imgs/folk (5).png" },
    { id: 6, name: "Faelan", image: "/imgs/folk (6).png" },
    { id: 7, name: "Galen", image: "/imgs/folk (7).png" },
    { id: 8, name: "Hesper", image: "/imgs/folk (8).png" },
    { id: 9, name: "Ishara", image: "/imgs/folk (9).png" },
    { id: 10, name: "Jareth", image: "/imgs/folk (10).png" },
    { id: 11, name: "Kiran", image: "/imgs/folk (11).png" },
    { id: 12, name: "Lirael", image: "/imgs/folk (12).png" },
    { id: 13, name: "Marek", image: "/imgs/folk (13).png" },
    { id: 14, name: "Nessa", image: "/imgs/folk (14).png" },
    { id: 15, name: "Orin", image: "/imgs/folk (15).png" },
    { id: 16, name: "Padrig", image: "/imgs/folk (16).png" },
    { id: 17, name: "Quinn", image: "/imgs/folk (17).png" },
    { id: 18, name: "Rhiannon", image: "/imgs/folk (18).png" },
    { id: 19, name: "Soren", image: "/imgs/folk (19).png" },
    { id: 20, name: "Thalira", image: "/imgs/folk (20).png" },
    { id: 21, name: "Uldric", image: "/imgs/folk (21).png" },
    { id: 22, name: "Vala", image: "/imgs/folk (22).png" },
    { id: 23, name: "Wren", image: "/imgs/folk (23).png" },
    { id: 24, name: "Xanthe", image: "/imgs/folk (24).png" },
    { id: 25, name: "Ysolde", image: "/imgs/folk (25).png" },
    { id: 26, name: "Zane", image: "/imgs/folk (26).png" },
    { id: 27, name: "Ari", image: "/imgs/folk (27).png" },
    { id: 28, name: "Brenna", image: "/imgs/folk (28).png" },
    { id: 29, name: "Caius", image: "/imgs/folk (29).png" },
    { id: 30, name: "Diantha", image: "/imgs/folk (30).png" },
    { id: 31, name: "Elyndra", image: "/imgs/folk (31).png" },
    { id: 32, name: "Fiora", image: "/imgs/folk (32).png" },
    { id: 33, name: "Gavriel", image: "/imgs/folk (33).png" },
    { id: 34, name: "Halley", image: "/imgs/folk (34).png" },
    { id: 35, name: "Idris", image: "/imgs/folk (35).png" },
    { id: 36, name: "Juno", image: "/imgs/folk (36).png" },
    { id: 37, name: "Kelda", image: "/imgs/folk (37).png" },
    { id: 38, name: "Luna", image: "/imgs/folk (38).png" },
    { id: 39, name: "Mira", image: "/imgs/folk (39).png" },
    { id: 40, name: "Nadira", image: "/imgs/folk (40).png" },
    { id: 41, name: "Omar", image: "/imgs/folk (41).png" },
    { id: 42, name: "Perry", image: "/imgs/folk (42).png" },
    { id: 43, name: "Quintus", image: "/imgs/folk (43).png" },
    { id: 44, name: "Raelan", image: "/imgs/folk (44).png" },
    { id: 45, name: "Selene", image: "/imgs/folk (45).png" },
    { id: 46, name: "Thorne", image: "/imgs/folk (46).png" },
    { id: 47, name: "Uriah", image: "/imgs/folk (47).png" },
    { id: 48, name: "Vespera", image: "/imgs/folk (48).png" },
    { id: 49, name: "Wynne", image: "/imgs/folk (49).png" },
    { id: 50, name: "Xander", image: "/imgs/folk (50).png" },
    { id: 51, name: "Yara", image: "/imgs/folk (51).png" },
    { id: 52, name: "Zephyr", image: "/imgs/folk (52).png" },
    { id: 53, name: "Althar", image: "/imgs/folk (53).png" },
    { id: 54, name: "Bram", image: "/imgs/folk (54).png" },
    { id: 55, name: "Cora", image: "/imgs/folk (55).png" },
    { id: 56, name: "Derrick", image: "/imgs/folk (56).png" },
    { id: 57, name: "Elys", image: "/imgs/folk (57).png" },
    { id: 58, name: "Faris", image: "/imgs/folk (58).png" },
    { id: 59, name: "Gwen", image: "/imgs/folk (59).png" },
    { id: 60, name: "Hara", image: "/imgs/folk (60).png" },
    { id: 61, name: "Isabel", image: "/imgs/folk (61).png" },
    { id: 62, name: "Jerric", image: "/imgs/folk (62).png" },
    { id: 63, name: "Karla", image: "/imgs/folk (63).png" },
    { id: 64, name: "Lyle", image: "/imgs/folk (64).png" },
    { id: 65, name: "Mace", image: "/imgs/folk (65).png" },
    { id: 66, name: "Nessa", image: "/imgs/folk (66).png" },
    { id: 67, name: "Orion", image: "/imgs/folk (67).png" },
    { id: 68, name: "Pax", image: "/imgs/folk (68).png" },
    { id: 69, name: "Rex", image: "/imgs/folk (69).png" },
    { id: 70, name: "Sylas", image: "/imgs/folk (70).png" },
    { id: 71, name: "Tessa", image: "/imgs/folk (71).png" },
    { id: 72, name: "Ulric", image: "/imgs/folk (72).png" },
    { id: 73, name: "Verena", image: "/imgs/folk (73).png" },
    { id: 74, name: "Wrenna", image: "/imgs/folk (74).png" },
    { id: 75, name: "Xander", image: "/imgs/folk (75).png" },
    { id: 76, name: "Ylva", image: "/imgs/folk (76).png" },
    { id: 77, name: "Zira", image: "/imgs/folk (77).png" },
    { id: 78, name: "Aeris", image: "/imgs/folk (78).png" },
    { id: 79, name: "Briar", image: "/imgs/folk (79).png" },
    { id: 80, name: "Calyx", image: "/imgs/folk (80).png" },
    { id: 81, name: "Dax", image: "/imgs/folk (81).png" },
    { id: 82, name: "Elior", image: "/imgs/folk (82).png" },
    { id: 83, name: "Faylen", image: "/imgs/folk (83).png" },
    { id: 84, name: "Gorrin", image: "/imgs/folk (84).png" },
    { id: 85, name: "Havon", image: "/imgs/folk (85).png" },
    { id: 86, name: "Iara", image: "/imgs/folk (86).png" },
    { id: 87, name: "Jorin", image: "/imgs/folk (87).png" },
    { id: 88, name: "Kestrel", image: "/imgs/folk (88).png" },
    { id: 89, name: "Leona", image: "/imgs/folk (89).png" },
    { id: 90, name: "Mirael", image: "/imgs/folk (90).png" },
    { id: 91, name: "Nira", image: "/imgs/folk (91).png" },
    { id: 92, name: "Orla", image: "/imgs/folk (92).png" },
    { id: 93, name: "Phelan", image: "/imgs/folk (93).png" },
    { id: 94, name: "Qira", image: "/imgs/folk (94).png" },
    { id: 95, name: "Rivka", image: "/imgs/folk (95).png" },
    { id: 96, name: "Sable", image: "/imgs/folk (96).png" },
    { id: 97, name: "Thalor", image: "/imgs/folk (97).png" },
    { id: 98, name: "Ulrika", image: "/imgs/folk (98).png" },
    { id: 99, name: "Viera", image: "/imgs/folk (99).png" },
    { id: 100, name: "Wendell", image: "/imgs/folk (100).png" },
    { id: 101, name: "Xyla", image: "/imgs/folk (101).png" },
    { id: 102, name: "Ywen", image: "/imgs/folk (102).png" },
    { id: 103, name: "Zareth", image: "/imgs/folk (103).png" },
    { id: 104, name: "Arwen", image: "/imgs/folk (104).png" },
    { id: 105, name: "Brennan", image: "/imgs/folk (105).png" },
    { id: 106, name: "Cyril", image: "/imgs/folk (106).png" },
    { id: 107, name: "Dora", image: "/imgs/folk (107).png" },
    { id: 108, name: "Enid", image: "/imgs/folk (108).png" },
    { id: 109, name: "Fiora", image: "/imgs/folk (109).png" },
  ];

  // Crear una referencia al sonido
  const sound = new Audio("/imgs/magic-wand.mp3");

  // Función para manejar el sonido
  const handleMouseEnter = () => {
    sound.play();
  };

  const handleMouseLeave = () => {
    sound.pause();
    sound.currentTime = 0; // Reinicia el sonido
  };

  const [searchQuery, setSearchQuery] = useState(""); // Estado para la búsqueda

  // Filtra los folks según la búsqueda
  const filteredFolks = folksData.filter(
    (folk) => folk.name.toLowerCase().includes(searchQuery.toLowerCase()) // Realiza la búsqueda insensible a mayúsculas/minúsculas
  );

  return (
    <div className="container__main">
      <div className="container__search">
        <SearchBar setSearchQuery={setSearchQuery} />
      </div>
      <div className="container__folks">
        <div className="container__content">
          {filteredFolks.map((folk, index) => (
            <div key={index} className="item">
              <Link to={`/folk/${folk.id}`}> {/* Link dinámico a FolkInfo */}
                <img
                  src={folk.image}
                  alt={folk.name}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="folk-image"
                />
              </Link>
              <p>{folk.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
