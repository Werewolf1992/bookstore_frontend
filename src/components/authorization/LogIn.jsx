import React from 'react';
import PropTypes from 'prop-types';

const LogIn = () => (
    <div className="container">
        <form className="form-signin">
            <h2 className="form-signin-heading">Please sign in</h2>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
            <div className="checkbox">
                <label>
                    <input type="checkbox" defaultValue="remember-me"/> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    </div>
);

LogIn.propTypes = {};

export default LogIn;
