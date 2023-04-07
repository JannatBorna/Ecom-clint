import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import sign from '../../../images/others/signup.png';


const Register = () => {

    return (
        <div className="sign">
            <Container>
                <h1 className="text-center mb-5">Sign Up Now</h1>
            
                <Row>
                    <Col lg={5} md={7}>
                        <div className="sign-text">
                            <div className="dot-1">------------------------------</div>
                            <button><i class="fab fa-google"></i> Google Sign up</button>
                            <p>All ready have a account <Link as={HashLink} to="/login">login</Link> now</p>
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

export default Register;



