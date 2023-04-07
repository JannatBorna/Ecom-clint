import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import women from '../../../images/sub-nav/women.png';
import baby from '../../../images/sub-nav/baby.png';
import men from '../../../images/sub-nav/men.png';
import './SubNav.css';
import { Link } from 'react-router-dom';


const SubNav = () => {
    return (
        <div className='subNav'>
            <Container>
                <Row>
                    <Col lg={4} md={4} sm={12}>
                        <div className='sub-nav'>
                            <Link as={HashLink} to="/womenServices" className="">
                                <img src={women} alt="" className=''/>
                                <div className='midtext'>
                                    <p>Women</p>
                                </div>
                            </Link>
                        </div>
                    </Col>

                    <Col lg={4} md={4} sm={12}>
                        <div className='sub-nav'>
                            <Link as={HashLink} to="/babyServices" className="">
                                <img src={baby} alt="" />
                                <div className='midtext'>
                                    <p>Babys</p>
                                </div>
                            </Link>
                        </div>
                    </Col>

                    <Col lg={4} md={4} sm={12}>
                        <div className='sub-nav'>
                            <Link as={HashLink} to="/menServices" className="">
                                <img src={men} alt="" />
                                <div className='midtext'>
                                    <p>Men</p>
                                </div>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SubNav;