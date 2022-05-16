import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar/>
          <div className="d-flex">
          <Sidebar/>
          <div className="leftSide w-100">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home/>} />
              </Routes>
              <Routes>
                <Route path="/home" element={<Home/>} />
              </Routes>
            </div>
          </div>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
