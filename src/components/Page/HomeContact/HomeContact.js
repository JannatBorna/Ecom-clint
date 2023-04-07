import React from 'react';
import { Col, Container, Form, Row } from "react-bootstrap";
import message from "../../../images/contact-us/message.svg";
import "./HomeContact.css";

const HomeContact = () => {
    return (
      <div className="contact_section_3">
        <h2 className="message_headline">Contact Message</h2>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Form className="section_3">
                <Form.Group
                  className="mb-3 w-75 mx-5"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group
                  className="mb-3  w-75 mx-5"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Type Message"
                    rows={3}
                  />
                </Form.Group>
                <button class="contact_submit text-white" formaction="#">
                  SUBMIT
                </button>
              </Form>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <img src={message} alt="" className="w-75" />
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default HomeContact;