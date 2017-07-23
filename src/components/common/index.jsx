import React from 'react';
import Header from './header';
import Footer from './footer';
import PropTypes from 'prop-types';


const Wrapper = ({children}) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
);

Wrapper.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Wrapper;
