import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {
    faMapMarkedAlt, faPhoneVolume
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import "./Footer.css";


const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h2> <span className="hotel-name">H<i className="fab fa-digital-ocean"></i>tel Tourism</span></h2>

                                <br />
                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                </div>
                                <p className="mt-4 ">
                                    <small>
                                        Typically, the basic Hotel Tourism.com services include reception guests, room service, food service, including restaurants in the hotel, and security. Sometimes in the small hotels the duties of security, a cook and a cleaner are performed by the owner himself.
                                    </small>
                                </p>

                                <p className="mt-5">
                                    <small>Hotel Tourism.COM ©  All rights </small>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Services</li>
                                    <li className="footer-menu">About</li>
                                    <li className="footer-menu">Contact us</li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <h3>Sign up</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Enter Email"
                                />
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="footer-phone-icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <h5>+0 1 7 457 000 54</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="footer-phone-icon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div>
                                        <p>
                                            www.hotel-tourism.COM.com
                                            <br />
                                            hotel-tourism.COM@medical.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Footer;