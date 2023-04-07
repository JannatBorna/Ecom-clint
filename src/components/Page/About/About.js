import React from 'react';
import { Container, Accordion, Button, Card } from 'react-bootstrap';
import aboutImg from '../../../images/a.jpg';
import { useForm } from 'react-hook-form';

const About = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="my-5">
            <Container>
                <h2 className="text-center fw-3">About <span className="text-color">U</span>s</h2>
                <div className="card mb-3 w-100">
                    <div className="row g-0">
                        
                        <h2 className="my-5">Some offers services in h<i className="fab fa-digital-ocean later-color text-color"></i>tel tourism.com</h2>
                        <div className="col-md-4">
                            <img src={aboutImg} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">


                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header><h2 className="fs-5"><i className="fas fa-chevron-right"></i> 50% discount for booking any service </h2></Accordion.Header>
                                         <Accordion.Body>
                                          
                                            <div className="d-flex">

                                                <Card>
                                                    <Card.Header><span className="text-danger">Every Monday</span></Card.Header>
                                                    <Card.Body>

                                                        <Card.Text>
                                                            If your reward is being paid in travel credit to your Booking.com Wallet:
                                                            All you need is a Booking.com account. The email address in your account should match the one you used to make your booking using your reward offer. After you check out of your stay, we’ll add the reward amount to your Booking.com Wallet in your account. Don’t have an account yet? Create one here.
                                                        </Card.Text>
                                                        <Button variant="primary">See More</Button>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>


                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header><h2 className="fs-5"><i className="fas fa-chevron-right"></i> 20% discount for using Visa Card for booking any service</h2></Accordion.Header>
                                        <Accordion.Body>
                                           
                                            <div className="d-flex">

                                                <Card>
                                                    <Card.Header><span className="text-danger">Any Time</span></Card.Header>
                                                    <Card.Body>

                                                        <Card.Text>
                                                            Offer details as shown are based on information provided by the Merchant. No warranties are made by Visa that the information is correct. Please check directly with the Merchant to confirm the availability and validity of the Offer.Accordingly, the Visa Cardholder understands nor will become, a party thereto.
                                                        </Card.Text>
                                                        <Button variant="primary">See More</Button>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header><h2 className="fs-5"><i className="fas fa-chevron-right"></i> 10% discount if using the website for booking</h2></Accordion.Header>
                                        <Accordion.Body>
                                            
                                            <div className="d-flex">

                                                <Card>
                                                    <Card.Header><span className="text-danger">10% cash back reward</span></Card.Header>
                                                    <Card.Body>

                                                        <Card.Text>
                                                            Complete your stay at your accommodation booked through Booking.com. Claim your 10% cash back reward based on the price of your accommodation in the form of a refund to your credit card or debit card after your stay. When you have checked out of the hotel, Booking.com will send you an email on how to claim your reward
                                                        </Card.Text>
                                                        <Button variant="primary">See More</Button>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>


                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header><h2 className="fs-5"> <i className="fas fa-chevron-right"></i> Help Line</h2></Accordion.Header>
                                        <Accordion.Body>
                                            
                                            <div className="d-flex">

                                                <Card>
                                                    <Card.Header><span className="text-danger">Write Your Problem</span></Card.Header>
                                                    <Card.Body>

                                                        <Card.Text>
                                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Enter Name" />
                                                                <input {...register("email")} placeholder="Your Email" />
                                                                <textarea {...register("description")} placeholder="Description Your Problem" />
                                                                
                                                                
                                                              </form>
                                                        </Card.Text>
                                                        <Button variant="primary">submit</Button>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;  
                                                                
                                                            

