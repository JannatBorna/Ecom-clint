import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faEnvelope, faLocationArrow, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Contact.css';

const containerStyle = {
  width: '650px',
  height: '450px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Contact = () => { 
  return (
    <div id="contact">
      <Container>
        <div className='contact-1'>
          <Row>
            <Col>
                <div className='contact'>
                  <FontAwesomeIcon icon={faPhone} className="contact-icon my-3" />
                  <h4>PHONE</h4>
                  <a href="tel:+053-564698-669">+053-564698-669</a>
                </div>
            </Col>

            <Col>
              <div className='contact'>
                <FontAwesomeIcon icon={faLocationArrow} className="contact-icon my-3" />
                <h4>EMAIL</h4>
                <a href="mailto:contactus@material.com">contactus@material.com</a>
              </div>
            </Col>

            <Col>
              <div className='contact'>
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon my-3" />
                <h4>ADDRESS</h4>
                <a href="153 Williamson Plaza, 09514">Dhanmondi 27 Dhanmondi Bridge, Dhaka, Bangladesh</a>
              </div>
            </Col>
          </Row>
        </div>


        <div className='my-5'>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className='form'>
                <h2 className='my-5'>Do You Have Any Question?</h2>
                  <form>
                    <div className='d-flex input'>
                      <label className='mx-3'>Name: </label>
                      <input type="text" id="fname" name="fname" />
                    </div>
                    <div className='d-flex my-4 input'>
                      <label className='mx-3'>Email: </label>
                      <input type="text" id="lname" name="lname" />
                    </div>
                    <div className='d-flex messanger'>
                      <label className='mx-3'>Messanger: </label>
                      <textarea rows="4" cols="42"/>
                    </div>
                    <button className='contact-btn main-btn my-3'>SUBMIT</button>
              </form>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className='my-5'>
                  <LoadScript
                googleMapsApiKey="AIzaSyCPNgGd0UikRtox1GweXCb2sV-asdzWTtg">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}>
              </GoogleMap>
               </LoadScript>
              </div>
            </Col>
          </Row>
          </div>
        </Container>
      </div>
    );
};

export default Contact; 

           
         