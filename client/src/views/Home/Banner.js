import React from 'react';
import { Image } from "semantic-ui-react";
import './Banner.css';

const Banner = () =>
 (
    <div className='banner-div'>
        <Image src='images/banner2.JPG' width='100%'/>
        <div className='banner-text-div'>
            <p className='banner-text'>Development of Wireless Sensor Network-Based Water Information System for Efficient Irrigation Water Management in the Philippines</p>
            <p className='banner-text'>(PCARI WISEIr Project)</p>
        </div>
    </div>
 )

 export default Banner;