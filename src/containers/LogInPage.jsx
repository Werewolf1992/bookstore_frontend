import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LogIn from '../components/authorization/LogIn';

class LogInPage extends React.Component {
    render() {
        return (
            <LogIn />
        );
    }
}

LogInPage.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(LogInPage);
