import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";



export default class App extends Component {
  arr = [];
  pageSize = 20;
  country = "in";
  category = {};
  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} country={this.country} category="general"></News>} />
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country={this.country} category="general"></News>} />
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country={this.country} category="science"></News>} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country={this.country} category="entertainment"></News>} />
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country={this.country} category="sports"></News>} />
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country={this.country} category="health"></News>} />
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country={this.country} category="technology"></News>} />
          </Routes>
        </div>
      </Router>

    )
  }
}

