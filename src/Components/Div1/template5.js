import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import image from '../Pic/doublecheck.png'
import '../../CSS/div5.css'


export default function template5() {
  return (
    <div id='div5_first' style={{ backgroundColor: '#FFFEF2', display: 'flex' }}>

<div style={{ flex: 1}}>
      <img
        src={image}
        alt="Image"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>


<div id='div5_third' style={{ flex: 0.70, padding: '20px', display: 'flex', flexDirection: 'column', paddingTop:'0px'}}>

      <div style={{width:'80%'}}>
        <div>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight:'300', fontSize:'40px' }}>Post-Poo Drops has returned</span>
        </div>
        <div style={{paddingTop:'2ch'}}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight:'400', fontSize:'16px', lineHeight:'1.5' }}>Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.</span>
        </div>
        <button id='div5_button'>
                <span>Discover Post-Poo Drops</span>
                <span><BsArrowRight/></span>
        </button>
      </div>
</div>
  
  </div>

  )
}
