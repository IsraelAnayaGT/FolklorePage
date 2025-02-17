
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import StartView from './components/StartView/StartView';
import FolksInfo from './components/FolkInfo/FolkInfo';
import { Error404 } from "./components/components/Error/Error404";
import MenuFolk from './components/MenuFolk/MenuFolk';



function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Menu" element={<MenuFolk />} />
        <Route exact path="/Home" element={<StartView />} />
        <Route exact path="/folk/:id" element={<FolksInfo />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
