import logo from './logo.svg';
import './App.css';
import image from './../src/images/10354069_578454862259335_1343665270853874982_n.png'
import img from './../src/images/download (9).png'
import img2 from './../src/images/ivana-square.jpg'
import { useState } from 'react';
import Navbar from './componets/Nav/Navbar';
import Landingpage from './componets/Home/Landingpage';
import Candidates from './componets/Candidates.js/Candidates';
import ElectionProgress from './componets/ElectionProgress/ElectionProgress';
import Report from './componets/Blog/Report';
import Footer from './componets/Footer/Footer';
import Resultes from './componets/Result/Results'
import Candidateprofile from './componets/page/Candidateprofile'
import AddCandidates from './componets/admin/AddCandidate'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import TheApp from './componets/TheApp';


function App() {
  
 
  return (
    <Router>
    <div>
   
      <Routes>
        <Route path="/landingpage" element={<Landingpage />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/electionprogress" element={<ElectionProgress />} />
        <Route path="/report" element={<Report />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/Candidateprofile" element={<Candidateprofile />} />
        <Route path="/result" element={<Resultes />} />
        <Route path='/' element={<TheApp/>}/>
      </Routes>
      <div>

       

    
    </div>
    </div>
  </Router>
 

 
  );
}

export default App;
