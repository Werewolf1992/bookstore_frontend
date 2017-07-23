import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import BooksList from '../components/BooksList';

class BooksListPage extends React.Component {
    render() {
        return (
            <BooksList />
        );
    }
}

BooksListPage.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(BooksListPage);
