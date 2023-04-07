import React, { useEffect, useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import WomenService from '../WomenService/WomenService';
import baby from '../../../../images/sub-nav/women.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './WomenServices.css';

const WomenServices = () => {
    const [womenservices, setWomenservices] = useState([]);
    
    useEffect(() =>{
        fetch('./women.json')
        .then(res =>res.json())
        .then(data => setWomenservices(data))
    }, [])
    return (
        <div className='women-services'>
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
                <div className='womenservices'>
                    {
                       womenservices.map(womenservice => <WomenService
                        key={womenservice.id}
                        womenservice={womenservice}
                       ></WomenService>) 
                    }
                </div>
            </Container>
        </div>
    );
};

export default WomenServices;