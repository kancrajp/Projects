import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';
import '../../CSS/banner.css';

export default function banner1() {
  return (
    <div>
        <div id='banner1_div'>
            <span id='banner1_span'>Trained Aesop consultations are available to provide bespoke skin care advise.</span>
            <Link id='banner1_link'>Book a video consultation</Link>
        </div>

        
        <div id='banner2_div'>
            <Link id='banner2_link'>Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400</Link>
            <span style={{color:'while', fontSize:'2.5ch'}}><BsPlus/></span>
        </div>
    </div>
  )
}
