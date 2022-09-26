import React from "react";
import "./layout.scss";

const Layout = props => {
    return(
        <>
            <Navbar/>

        </>
    )
}

const Navbar = props => {
    return(
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <i className="fa fa-twitter"></i>
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

export default Layout