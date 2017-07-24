import React from 'react';
import PropTypes from 'prop-types';

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

export default Header;
