import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

import "./layout.scss";

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
                                    <Login/>
                                    <Signup/>
                                    <Footer/>

                                        {props.children}
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
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">language: <strong>English </strong><span className="caret"></span></a>
                        <ul className="dropdown-menu row" role="menu">
                            <li className="col-xs-12"><a href="#">Filipino</a></li>
                            <li className="col-xs-12"><a href="#">Spanish</a></li>
                            <li className="col-xs-12"><a href="#">Russian</a></li>
                            <li className="col-xs-12"><a href="#">Portuguese</a></li>
                            <li className="col-xs-12"><a href="#">Italian</a></li>
                        </ul>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}

const Login = props => {
    return(
        <div className="log-in col-xs-4 col-xs-offset-1">
            <form>
                <div className="form-group">
                    <input type="text" className="form-control username" placeholder="Username"/>
                </div>
                <div className="form-group">
                    <input type="text" class="form-control password" placeholder="Password"/>
                </div>
                <br/>
                <button id="log-in-btn" className="btn btn-default btn-primary col-xs-3 col-xs-3 col-xs-offset-1">Log in</button>
                <br></br>
                <label>
                    <input type="checkbox"/>
                    <span>Remember me</span>
                    <span> &#183; </span>
                </label>
                    <a href="#">Forgot password?</a>
            </form>
        </div>
    )
}

const Signup = props => {
    return(
        <div className="sign-up col-xs-4 col-xs-offset-1">
            <form>
                
                <div className="new-to-t">
                    <p><strong>New to Twitter?</strong><br></br><span>Sign Up</span></p>
                </div>

                <div className="form-group">
                    <input type="text" class="form-control username" placeholder="Username"/>
                </div>

                <div className="form-group">
                    <input type="email" class="form-control email" placeholder="Email"/>
                </div>

                <div className="form-group">
                    <input type="password" className="form-control password" placeholder="Password" />
                </div>

                <br></br>

                <button id="sign-up-btn" className="btn btn-default btn-warning pull-right">Sign up for Twitter</button>
            </form>
        </div>
    )
}

const Welcome = props => {
    return (
        <div className="col-xs-6 welcome">
            <div id="welcome-text">
            <h1><strong>Welcome to Twitter.</strong></h1>
            <p>Connect with your friends &#8212; and other fascinating people.</p>

            <p>Get in-the-moment updates on the things that interest you. And watch events unfold, in real time, from every angle.</p>
            </div>
        </div>
    )
}

const Footer = () => {
    return (
      <div id="footer">
              <div className="text-center ms-4 pt-3">
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
           

          <div className="text-center">
               <p>Full Stack Twitter Clone project at<a href="https://www.altcademy.com/" target="_blank" rel="noopener noreferrer"> Altcademy</a></p>
         </div>

          
    </div>     
    );
};
  


export default Layout