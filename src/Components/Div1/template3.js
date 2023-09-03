import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import image from '../Pic/Article.jpg'
import '../../CSS/div3.css'


export default function template3() {
  return (
    <div id='div3_first' style={{ backgroundColor: '#FFFEF2', display: 'flex' }}>

<div id='div3_third' style={{ flex: 0.70, padding: '20px', display: 'flex', flexDirection: 'column', marginLeft:'50px' }}>

      <div style={{width:'80%'}}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight:'500' }}>The Athenaeum</span>
        <div style={{paddingTop:'2ch'}}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight:'300', fontSize:'40px' }}>The warm-up</span>
        </div>
        <div style={{paddingTop:'2ch'}}>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight:'400', fontSize:'16px', lineHeight:'1.5' }}>In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.</span>
        </div>
        <button id='div3_button'>
                <span>Discover Bar soaps</span>
                <span><BsArrowRight/></span>
        </button>
      </div>
</div>

    <div style={{ flex: 1, marginLeft:'20px' }}>
      <img
        src={image}
        alt="Image"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  
  
  </div>

  )
}
