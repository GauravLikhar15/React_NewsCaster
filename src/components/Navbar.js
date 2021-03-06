import React,{Component} from 'react'
import {Link} from "react-router-dom";
export default class navbar extends Component {
  
  render() {
    return (
        <>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light border-bottom border-dark">
        <div class="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src="https://www.vhv.rs/dpng/d/600-6006382_news-transparent-globe-news-earth-logo-png-png.png" alt="" width="40" height="34" class="d-inline-block align-text-top"/>
     NewsCaster
    </Link>
  </div>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">NewsCaster</Link> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
              {console.log("Commit")};
            </ul>
          </div>
        </div>
      </nav>
      </>
    )
  }
}

