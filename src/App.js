import logo from './logo.svg';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import Home from './controller/home';
import Particles from 'react-tsparticles';

import { loadFull } from "tsparticles";
import Resume from './controller/resume';
import About from './controller/about';
import Skills from './controller/skills';
import Contact from './controller/contact';
import Navbar from "./component/navbar";
import  particles from "./utils/particles.js"
import Portfolio from './controller/portfolio/index.jsx';


function App() {
  const location = useLocation();
  console.log(location);
  const handleInit = async (main)=>{
    await loadFull(main)
  }
  const renderparicleJs = location.pathname==="/";
  return (
    <div className="App">
      {renderparicleJs && (<Particles id = "particles"options={particles} init={handleInit}/>
    )}



   <Navbar/>

      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
