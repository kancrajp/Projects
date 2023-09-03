import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import '../../CSS/div1.css'

export default function template() {
  return (
    <div className="container">
    {/* Your content */}
        <div className="content">
            <h2 style={{fontFamily:'Inter', fontSize:'30px', fontWeight:'500'}}>A body care classic, reimagined</h2>
            <span style={{lineHeight:'1.7'}}>Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits. </span>
            <br/>
            <button id='div1_button'>
                <span>Discover Bar soaps</span>
                <span><BsArrowRight/></span>
            </button>
        </div>
  </div>
  )
}
