import React, {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import bro from './pictures/bro.png';
import git from './pictures/git.png';
import pana from './pictures/pana.png';
import rafiki from './pictures/rafiki.png';
import amico from './pictures/amico.png';
import prep from './pictures/prep.png';
import Developer from './IRD/Developer';



function App() {
const [click,setclick] = useState(false);

const handleclick = () => setclick(false);
const closeMobileMenu = () => setclick(false);
  return (
   <>
   <Router>
   <nav className='navbar'>
    <div className='navbar-container'>
    <img src={git} className='logos' alt='logo'></img>
    <h3 className='heading'>Git Carrer Path</h3>
    <div className='menu-icon' onClick={handleclick}>
    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

    </div>
    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      <li className='nav-item'>
      <Link className='nav-links' to={'./IRD/Developer'}>Courses</Link>
      </li>

      <li className='nav-item'>
        <Link className='nav-links' onClick={closeMobileMenu}>RTU EXAMS</Link>
      </li>

      <li className='nav-item'>
        <Link className='nav-links' onClick={closeMobileMenu}>INTERVIEW PREPRATIONS</Link>
      </li>

      <li className='nav-item'>
        <Link className='nav-links' onClick={closeMobileMenu}>CERTIFICATIONS</Link>
      </li>

      <li className='nav-item'>
        <Link className='nav-links' onClick={closeMobileMenu}>ABOUT US</Link>
      </li>
    </ul>
    </div>
   </nav>
    {/*this is where heading completes and main body starts*/}

  <div className='mainpage'>
    <div className='vision'>
    <div className='title'>
     <h1>Our Vision</h1>
      <br></br>
      </div>
      <div className='des'>
      <p className='para'>Our vison is to provide hassle free solution to your career related problems 
      and to establish the coding culture in our college.
       We will provide intro to programming to how to ace the coding interview.
       </p>
       </div>
       </div>
      <img src = {bro} className='vision-image' alt='oops'></img>
      
       
       
    </div>

  <div className='IUD'>
    <div className='I-U-D'>
      <img className='img' src={prep} alt='oops'></img>
      <h3 className='inter' align='center'>Interview Prepration</h3>
      <p className='about'> 
         Focuses on to build good coding skills in students. Along with the Interview Questions
         <a href='/' >click here to learn more...</a>
       </p>
    </div>
    <div className='I-U-D'>
       <img className='img' src={pana} alt="oops"></img>
       <h3 className='university' align='center'>University Exams</h3>
       <p className='about'>
          Students are stressed what to read in Exams and from which source. This section will provide them Exam source
         <a href='/'>click here to learn more...</a>
         </p>
    </div>
    <div className='I-U-D'>
    <img className='img' src={rafiki} alt="oops"></img>
       <h3 className='develop' align='center'>Developer Roadmap</h3>
       <p className='about'> 
       Learn about latest technology. This section is about diffrent kind of developer roadmap 
         <a href='/'>click here to learn more...</a>
         </p>
    </div>
   </div>

   <div className='mission'>

   <div className='our-mission'>
   <div className='title'>
   
   <h1>Our Mission</h1>
   <br></br>
   </div>

   <div className='des'>
   <p>Our mission is to provide Knowledge to every student so student can make something out of the college degree. We want to provide everything a student need to become successful and better version of himsfelf that relies on no-one.
   </p>

   </div>

   </div>
   <img src={amico} alt='oops'></img>

   </div>
   <div className='footer'>
    <div className='quick'>
     <h1>Contact us</h1>
     <div className='quick-help'>
     <p>Email Id.-careerdevs01@gmail.com<br></br>
    Phone-9680533569, 7023976856<br></br>
    ITS-1 & 2, IT Park, EPIP, Sitapura,<br></br> Jaipur – 302022, Rajasthan – INDIA</p>
      </div>
    </div>

    <div className='quick'>
     <h1>Quick Links</h1>
     <ul className='quick-link'>
      <li>Interview Prepration</li>
      <li>University Exam</li>
      <li>Developer Roadmap</li>
     </ul>

    </div>

     <div className='quick'>
     <h1>Help</h1>
    <p>Mail us at:<br></br>
       careerdevs01@gmail
    </p>

     </div>

    </div>

   <Routes>
    <Route path='/' exact />
   </Routes>
   </Router>
   </>
  );
}

export default App;
