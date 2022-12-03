import './App.css';

import React, {useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";



const App = ()=>{
 const  pageSize = 5;
 const country = "in";

const[progress,setProgress] = useState(0);


    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <LoadingBar
            height={3}
            color='black'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country={country} category="general"></News>} />
            <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country={country} category="general"></News>} />
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country={country} category="science"></News>} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country={country} category="entertainment"></News>} />
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country={country} category="sports"></News>} />
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country={country} category="health"></News>} />
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country={country} category="technology"></News>} />
          </Routes>
        </div>
      </Router>

    )
  }

  export default App;

