import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import PropTypes from 'prop-types';

const BooksList = () => (
    <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publication date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Title</td>
                    <td>Author</td>
                    <td>Publication</td>
                    <td>
                        <DropdownButton id="1" title="Actions">
                            <MenuItem id="1">Siema</MenuItem>
                        </DropdownButton>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

BooksList.propTypes = {};

export default BooksList;
