import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import Login from "./loginSignupGuestsComponent/login";
import Signup from "./loginSignupGuestsComponent/signup";


const Layout = props => {
    return(
        <>
            <Navbar/>

                <div id="homeback">
                    <div className="main">

                        <div className="container">

                            <div className="row">

                                <div className="front-card col-xs-10 col-xs-offset-1">
                                    <Welcome />
                                    <LoginSignUp/>
                                    <Footer/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
        </>
    )
}

const Navbar = props => {
    return(
        <nav className="navbar navbar-light bg-dark navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <FontAwesomeIcon icon={faTwitter} size="2x"  className="twitter-small-icon"/>
                    </a>
                </div>
            </div>
        </nav>
    )
}

const Welcome = props => {
    return (
        <div className="col-xs-6 py-4 welcome">
            <div id="welcome-text">
            <h1><strong>Welcome to Twitter.</strong></h1>
            <p>Connect with your friends &#8212; and other fascinating people.</p>

            <p>Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</p>
            </div>
        </div>
    )
}

const LoginSignUp = props => {
    return(
        <div className="row g-0 mb-4 pb-4">
          
          <div className="col">
            <div>
              <div className="row g-0">
                
               
                <div className="col-12">
                  <div className="p-1">
                    <div className="row">
                      <div className="col-6"> 
                        <Login />
                      </div>
                      <div className="col-6">
                        <Signup />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

const Footer = () => {
    return (
      <div id="footer">
              <div className="text-center ms-4 pt-2 py-4">
                    <div>
                        <h6>Full-Stack Twitter Clone by</h6>
                    </div>
                    © <a href="https://confident-murdock-8e5bba.netlify.app/"
                        target="_blank"rel="noopener noreferrer">
                        <em>Francis Artemio Landia </em>
                    </a>

                    <p>2022</p>

                    <div className="d-flex justify-content-center">
                        <a href="https://github.com/Franz-Art-L"
                        className="btn btn-danger"
                        id="github"
                        target="_blank"
                        rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                            
                        </a>

                        <a
                        href="https://www.linkedin.com/in/francis-artemio-landia-9a1375123/"
                        className="btn btn-warning"
                        id="Linkedin"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                        </a>

                        <a
                        href="https://www.instagram.com/landiafrancisartemio/"
                        className="btn btn-success"
                        id="Linkedin"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        
                    </div>
                   
                   
              </div>
   
    </div>     
    );
};

export default Layout;