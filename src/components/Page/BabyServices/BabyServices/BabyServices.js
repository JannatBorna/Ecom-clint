import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BabyService from '../BabyService/BabyService';
import baby from '../../../../images/sub-nav/baby.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './BabyServices.css';



const BabyServices = () => {
    const [ babyservices, setBabyservices ] = useState([])
    useEffect(() =>{
        fetch('./baby.json')
        .then(res => res.json())
        .then(data => setBabyservices(data))
    },[])

    return (
        <div className='baby-services'>
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
                <div className='babyservices'>
                    {
                        babyservices.map(babyservice => <BabyService
                            key={babyservice.id}
                            babyservice={babyservice}
                        ></BabyService>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default BabyServices;