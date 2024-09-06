import './App.css';
// import './App.css';
import Video from './Video';
import React from "react";
import Cast from "./Podcast";
import Navbar from './Navbar/index.js';
import LandingPage from './Landinpage/index.js';
import Resumes from './Resumes';
import Blogs from './Blogs'

function App() {
  return (
      
    <div className="App">
      <div className="background-container"></div>
      <Navbar/>
      <LandingPage/>
      <Blogs/>
      <Video/>

      <Cast />
      <Resumes/>
  
    </div>
  );
}

export default App;
