import React from 'react';
import Header from './header';
import Footer from './footer';
import PropTypes from 'prop-types';


const Navigation = ({children}) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
);

Navigation.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Navigation;
