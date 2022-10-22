import logo from './logo.svg';
import './App.css';
import FuncComp from './Components/Functional';
import ClassComp from './Components/ClassComponent';
import NavBar from './Components/Navbar';
//Configure the route
import {Route,Routes} from 'react-router-dom';
import React from 'react';

import props from './Components/Props';

function App() {
  return (
      <div>
        <NavBar/>
        <Routes>
          <Route path="funcom" element={<FuncComp/>}></Route>
          <Route path="Classcom" element={<ClassComp/>}></Route>
        </Routes>
      </div>
        
      
  );
}

export default App;
