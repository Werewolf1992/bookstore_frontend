import React from 'react';
import PropTypes from 'prop-types';

const BooksList = () => (
    <div className="container">
        <table className="table">
            <thead>
                <th>Name</th>
                <th>Last name</th>
                <th>Phone number</th>
                <th>Workplace</th>
                <th>Company</th>
                <th>Email</th>
                <th></th>
            </thead>
            <tbody>
                <tr>
                    <td>name</td>
                    <td>last_name</td>
                    <td>phone_number</td>
                    <td>work_place</td>
                    <td>company</td>
                    <td>e_mail</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="...">
                            <a className="btn btn-primary" href="">
                                EDIT
                            </a>
                            <a className="btn btn-danger" href="">
                                DELETE
                            </a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

BooksList.propTypes = {};

export default BooksList;
