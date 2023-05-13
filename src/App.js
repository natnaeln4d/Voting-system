import logo from './logo.svg';
// import './App.css';
import image from './../src/images/10354069_578454862259335_1343665270853874982_n.png'
import img from './../src/images/download (9).png'
import img2 from './../src/images/ivana-square.jpg'
import { useEffect, useState, useReducer } from 'react';
import Navbar from './componets/Nav/Navbar';
import Landingpage from './componets/Home/Landingpage';
import Candidates from './componets/Candidates.js/Candidates';
import ElectionProgress from './componets/ElectionProgress/ElectionProgress';
import Report from './componets/Blog/Report';
import Footer from './componets/Footer/Footer';
import Resultes from './componets/Result/Results'
import Register from './componets/Auth/Regsiter'
import Candidateprofile from './componets/page/Candidateprofile'
import AddCandidates from './componets/admin/AddCandidate'
import Voters from './componets/admin/Voters';
import CandidateDescription from './componets/admin/CandidateDescription'
import AddChairman from './componets/admin/AddChairman';
import Approvecandidate from './componets/ChairmanDashboard/Approvecandidate';
import ApproveVoters from './componets/ChairmanDashboard/ApproveVoters';
import ChairmanDashboardHome from './componets/ChairmanDashboard/ChairmanDashboardHome';
import Watchvotersforchairman from './componets/ChairmanDashboard/WatchVoters';
import Updateprofileforchairman from './componets/ChairmanDashboard/Updateprofile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import TheApp from './componets/TheApp';
import AddNews from './componets/admin/AddNews';
import Feedbacks from './componets/admin/Feedbacks';
import Allcandidate from './componets/admin/Allcandidate';
import Updateprofile from './componets/admin/Updateprofile';
import RecognizeFace from './componets/Auth/RecognizeFace';
import Login from './componets/Auth/Login';
import LoginVoter from './componets/Auth/LoginVoter';

import CandidateContext from './contexts/CandidateContext';
import CandidateReducer from './reducers/CandidateReducer';
import ChairmanContext from './contexts/ChairmanContext';
import ChairmanReducer from './reducers/ChairmanReducer';
import VoterContext from './contexts/VoterContext';
import VoterReducer from './reducers/VoteReducer';
import UserContext from './contexts/UserContext';
import UserReducer from './reducers/UserReducer';

import http from './http/http';
import axios from 'axios';
import RegsiterChairman from './componets/Auth/RegsiterChairman';

function App() {
  
   
  window.onbeforeunload = function(e) {
    localStorage.removeItem('face-id');
    if (performance.getEntriesByType("navigation")[0].type === "navigate") {
      // localStorage.clear();

    }
  };
  

  
  
 const [candidateState,candidateDispatch] = useReducer(CandidateReducer,[]);
 const [chairmanState,chairmanDispatch] = useReducer(ChairmanReducer,[]);
 const [voterState,votereDispatch] = useReducer(VoterReducer,[]);
 const [userState,userDispatch] = useReducer(UserReducer,[]);

 
 
 const getCandidates = async() => {
 
 const response = await http.get('/candidates');
 
        const candidates = response.data;
        console.log('from app candidate',candidates)
        console.log('from app can')
        candidateDispatch({type: 'GET', candidates});
 }
 const getChairmans = async() => {
 
 const response = await http.get('/admin/chairmans');
 
        const chairmans = response.data;
        //  console.log(response.data[0].chairmans.role.roleable)
        console.log('from app chairman',chairmans)
        console.log('from app')
        chairmanDispatch({type: 'GET', chairmans});
 }
//  const getCandidates = async() => {
 
//  const response = await http.get('/candidates');
 
//         const candidates = response.data;
//          console.log(response.data)
//          console.log(response.data[0].candidate.role.roleable)
//         console.log(candidates)
//         candidateDispatch({type: 'GET', candidates});
//  }
//  const getCandidates = async() => {
 
//  const response = await http.get('/candidates');
 
//         const candidates = response.data;
//          console.log(response.data)
//          console.log(response.data[0].candidate.role.roleable)
//         console.log(candidates)
//         candidateDispatch({type: 'GET', candidates});
//  }
 

 
 useEffect(() => {
    getCandidates();
    getChairmans();
  
  },[])


  return (
  
   
     
   <CandidateContext.Provider
      value={{
         candidateState,candidateDispatch
      }}
   >
          <Router>
          <div>
           
            <Routes>
              <Route path="/landingpage" element={<Landingpage />} />
              <Route path="/candidates" element={<Candidates />} />
              <Route path="/electionprogress" element={<ElectionProgress />} />
              <Route path="/report" element={<Report />} />
              <Route path="/footer" element={<Footer />} />
              {/* <Route path="/Candidateprofile" element={<Candidateprofile />} /> */}
              <Route path="/result" element={<Resultes />} />
              <Route path='/' element={<TheApp/>}/>
              <Route path='/#' element={<TheApp/>}/>
              <Route path='/home' element={<TheApp />}/>
              <Route path='/admin/dashboard' element={<AddCandidates />} />
              {/* <Route path='/chairman/dashboard' element={<Chairman />} /> */}
              <Route path='/addcandidate' element={<AddCandidates />} />
              <Route path='/voters' element={<Voters />} />
              <Route path='/addchairman' element={<AddChairman />} />
              <Route path='/reportnews' element={<AddNews />} />
              <Route path='/notifications' element={<Feedbacks />} />
              <Route path="/candidatedescription" element={<CandidateDescription />} />
              <Route path="/allcandidates" element={<Allcandidate />} />
              <Route path="/updatecandidate" element={<Updateprofile />} />
              <Route path="/Approvecandidate" element={<Approvecandidate />} />
              <Route path="/Watchvotersforchairman" element={<Watchvotersforchairman />} />
              <Route path="/Updateprofileforchairman" element={<Updateprofileforchairman />} />
              <Route path="/chairman/dashboard" element={<ChairmanDashboardHome />} />
              <Route path = "/regsiter" element = {<Register  />} />
              <Route path = 'face' element = { <RecognizeFace />} />
              <Route path = "/register" element = {<Register />} />
              <Route path = "/chairman/register" element = {<RegsiterChairman />} />
              <Route path = 'face-auth' element = { <RecognizeFace />} />
              <Route path = '/login' element = {<Login />} />
              <Route path = '/signin' element = {<LoginVoter />} />
              {/* <Route path = '/signin' element = {<LoginVoter />} /> */}
            </Routes>
            <div>
          
             
      
          
          </div>
          </div>
        </Router>
      </CandidateContext.Provider>
 

 
  );
}

export default App;
