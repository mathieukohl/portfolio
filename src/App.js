import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { NavBarPage } from "./components/NavBarPage";
import { NavBarFreelance } from "./components/NavBarFreelance";
import { Banner } from "./components/Banner";
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { FiverrBadge } from './components/FiverrBadge';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';

import More from './components/pages/More';
import UnderConstruction from './components/pages/UnderConstruction';

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
           {/* <UnderConstruction/> */}
        </>} />
        <Route path="/more/freeHome" element={<>
          <NavBarFreelance />
          <FreeHome />
        </>} />
          <Route path="/more/freeHome/form" element={<>
            <NavBarFreelance />
            <FormFree />
          </>} />
        <Route path="/more/learnHome" element={<>
          <NavBarPage />
          <LearnHome />
        </>} />
        <Route path="*" element={<NotFoundPage />} /> {/* Fallback route */}
      </Routes>
    </div>
  );
}

export default App;
