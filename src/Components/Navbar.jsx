import React from "react";
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png'
export default function NavBar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">REACT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          {/* PROPERTY BINDING */}
          <img src={logo} style={{height:50,width:55,padding:10}}></img>
        </li>
        <li className="nav-item">
          <Link to="funcom" className="nav-link active" aria-current="page" href="#">Functional Component</Link>
        </li>
        <li className="nav-item">
          <Link to="classcom" className="nav-link" href="#">Class Component</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}