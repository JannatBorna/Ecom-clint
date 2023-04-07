import React, { useEffect, useState } from 'react';
import './MenServices.css';
import MenService from '../MenService/MenService';
import { Container, Row, Col  } from 'react-bootstrap';
import baby from '../../../../images/sub-nav/men.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const MenServices = () => {
    const [menservices, setMenservices] = useState([]);

    useEffect(() => {
        fetch('./men.json')
        .then(res => res.json())
        .then(data => setMenservices(data))
        
    }, [])
    return (
        <div className='men-services'>
            <Container>
                <Row>
                    <Col lg={12} md={12} ms={12}>
                        <div className='services-nav mb-5'>
                            <Link as={HashLink} to="/babyServices">
                                <img src={baby} alt="" />
                                <div className='midtext'>
                                    <p>Babys</p>
                                </div>
                            </Link>
                             <hr />
                        </div>
                    </Col>
                </Row>
            <div className='menservices'>
                {
                    menservices.map(menservice => <MenService
                        key={menservice.id}
                        menservice={menservice}
                    ></MenService>)
                }
            </div>
            </Container>
        </div>
    );
};

export default MenServices;