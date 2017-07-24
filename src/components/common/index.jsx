import React from 'react';
import PropTypes from 'prop-types';


const Navigation = () => null;
Navigation.propTypes = {};

const Header = () => (
    <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
            <div className="navbar-header col-xs-2">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                </button>
                <a className="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" className="collapse navbar-collapse col-xs-9">
                <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <a className="btn-log-out btn btn-default col-xs-1 pull-right">Log Out</a>
        </div>
    </nav>
);

Header.propTypes = {};

const Body = ({children}) => (
    <section id="nav-body" className="main-content">
        {children}
    </section>
);

Body.propTypes = {
    children: PropTypes.any,
};

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <p className="text-muted">sticky footer content</p>
        </div>
    </footer>
);

Navigation.Body = Body;
Navigation.Header = Header;
Navigation.Footer = Footer;

export default Navigation;
