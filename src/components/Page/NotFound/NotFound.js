import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../../images/others/404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <Col>
            <div className="container not-found">
                <img src={notfound} alt="" />
                <h1>Page Not Found - SORRY <i className="fas fa-meh-rolling-eyes"></i></h1>
                <Link to="/"><button className="btn btn-dark text-white my-5"><i className="fas fa-arrow-left"></i> Go Back</button></Link>

            </div>
        </Col>
    );
};

export default NotFound;