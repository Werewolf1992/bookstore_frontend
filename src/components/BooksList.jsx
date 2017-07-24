import React from 'react';
import PropTypes from 'prop-types';

const BooksList = () => (
    <div className="container">
        <table className="table">
            <thead>
                <th>Title</th>
                <th>Author</th>
                <th>Publication date</th>
                <th></th>
            </thead>
            <tbody>
                <tr>
                    <td>Title</td>
                    <td>Author</td>
                    <td>Publication</td>
                    <td>
                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                                <span className="fa fa-cog"/>
                            </button>
                            <ul className="dropdown-menu">
                                <li><p>1</p></li>
                                <li><p>2</p></li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

BooksList.propTypes = {};

export default BooksList;
