import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { NavBarPage } from "./components/NavBarPage";
import { Banner } from "./components/Banner";
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { FiverrBadge } from './components/FiverrBadge';
import More from './components/pages/More';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<>
          <NavBar /> 
          <Banner />
          <Skills />
          <Projects />
          <FiverrBadge />
          <About />
          <Footer />
        </>} />
        <Route path="/more" element={<>
          <NavBarPage />
           <More />
        </>} />
      </Routes>
    </div>
  );
}

export default App;
