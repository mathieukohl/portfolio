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
import { Route, Routes } from 'react-router-dom';

import More from './components/pages/More';

import LearnHome from './components/pages/learn/LearnHome';
import FreeHome from './components/pages/freelance/FreeHome';
import FormFree from './components/pages/freelance/FreelancerForm';

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
        <Route path="/freeHome" element={<>
          <NavBarPage />
          <FreeHome />
        </>} />
          <Route path="/freeHome/form" element={<FormFree />} />
        <Route path="/learnHome" element={<>
          <NavBarPage />
          <LearnHome />
        </>} />
      </Routes>
    </div>
  );
}

export default App;
