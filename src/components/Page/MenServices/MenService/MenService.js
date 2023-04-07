import React from 'react';
import ReactStars from "react-rating-stars-component";
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import './MenService.css';

const MenService = ({menservice}) => {
     const { name, img, priceEx ,price, rating, review}= menservice;
    return (
        <div className='menservice'>
            <img src={img} alt="" />
                <div className='d-flex m-2'>
                <h6 className='rating'>
                    <ReactStars
                        size={20}
                        value={rating}
                        edit={false}
                    /></h6>
                <p>({review})</p>
            </div>
            <h4 className='m-2'>{name?.slice(0, 55)}...</h4>
            <p className='m-2'><del className='del'>${priceEx}</del> <span className='mx-2'>${price}</span></p>
            <div className='add-cart mb-3 d-flex m-2'>
                <a href="/">
                    <FontAwesomeIcon icon={faHeart} />
                </a>
                <button as={HashLink} to="/womenServices">ADD TO CART</button>
            </div>
        </div>
    );
};

export default MenService;