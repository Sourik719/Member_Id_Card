import React from "react";
import logo from "./Resource/Photos/Logo.png";
import "./styleheader.css";
function Header(){
    return(
        <div className="row bg-black justify-content-md-center header">
        <div className="col-md-auto col-sx-auto col-sm-auto col-lg-auto float-left left-logo">
            <img className="logo" alt="none" src={logo}/>
        </div>
        <div className="col-6 col-sx-6 col-sm-6 col-lg-6 py-2 text-center main">
          <h1 className="name">Team NEW SUN</h1>
          <h4 className="estd">Estd: 2019</h4>
          <h3 className="location">Belgharia,Kol-56</h3>
          <h2 className="quote">"Helping preserves the places you cherish."</h2>

        </div>
        <div className="col-md-auto clo-sx-auto col-sm-auto col-lg-auto right-logo">
        <img className="logo" alt="none" src={logo}/>
        </div>
        </div>
    )
}
export default Header;