import React, { useState } from 'react';
import './SearchBar.css';
import Search from "../../../assets/espejo-magico.png"

const SearchBar = ({ setSearchQuery }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    setSearchQuery(event.target.value);  // Actualiza el query en el componente principal
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={query} 
        onChange={handleChange} 
        placeholder="Buscar folk..." 
        className="search-input"
      />
      <button className="search-button">
        <img src={Search} alt="Buscar" className="search-icon" /> {/* Usamos el componente img para mostrar la imagen */}
      </button>
    </div>
  );
};

export default SearchBar;
