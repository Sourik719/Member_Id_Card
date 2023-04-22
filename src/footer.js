import React from "react"
import fb from "./Images/fb.png"
import insta from "./Images/instagram.png"
import twitter from "./Images/twitter.png"

function Footer(){
    return(
    <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top text-dark align-bottom">
        <div className="row container">
        <div className="col-md-1"></div>
      <div className="col-md-10">
        <p className="col-md-10">© 2023 Company, Inc. All rights reserved.</p>
      </div>
      <div className="col-md-1">
      <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="https://shorturl.at/dlE25"><img className="visible" width="24" height="24" src={fb}/></a></li>
          <li className="ms-3"><a className="link-dark" href="https://shorturl.at/uES06"><img className="visible" width="30" height="30" src={insta}/></a></li>
          <li className="ms-3"><a className="link-dark" href="https://twitter.com/newsunngo2019?s=09"><img className="visible" width="30" height="30" src={twitter}/></a></li>
          
        </ul>
      
        
      </div>

    </div>
    </footer>
  
      </div>
    )
}
export default Footer