import React from 'react';
import {  Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import sign from '../../../images/others/login.png';
import './Login.css'


const Login = () => {

    return (
        <div className="sign">
            <Container>
                <h1 className="text-center mb-5">Sign in Now</h1>
                <Row>
                    <Col lg={5} md={7}>
                        <div className="sign-text">
                            <div className="dot-1">------------------------------</div>
                            <button><i class="fab fa-google"></i> Google Sign In</button>
                            <p>Forgot password <Link as={HashLink} to="/register">Click</Link></p>
                            <p>Create a new account <Link as={HashLink} to="/register">Register</Link> now</p>
                            <div className="dot-2">------------------------------</div>
                        </div>     
                    </Col>

                    <Col lg={7} md={5}>
                        <div className="sign-img">
                            <img className="mx-5" src={sign} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;


            
