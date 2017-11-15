import React from 'react';
import { Image } from "semantic-ui-react";

const Banner = () =>
 (
    <div style={{position: 'relative', textAlign:'center', color: 'rgb(37, 34, 34)'}}>
        <Image src='images/banner2.JPG' width='100%'/>
        <div style={{position: 'absolute', top: '30%', left: '50%', right: '2%'}}>
            <p style={{fontSize:'2.5vw', fontWeight: 'bold', fontFamily: 'open sans'}}>Development of Wireless Sensor Network-Based Water Information System for Efficient Irrigation Water Management in the Philippines</p>
        </div>
    </div>
 )

 export default Banner;