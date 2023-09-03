import React, { useState } from 'react';
// import { BsArrowRight } from 'react-icons/bs';
import image1 from '../Pic/Article.jpg';
import image2 from '../Pic/Facial_Concentrate.png';
import image3 from '../Pic/Camellia-Nut-Facial.webp';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import '../../CSS/div6.css';


export default function Template7() {
    const images = [image1, image2, image3];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

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

<div style={{ flex: 1, marginLeft: '20px', position: 'relative' }}>
  <button className='arrow-button prev-button' onClick={handlePrevClick}>
    <BsArrowLeft />
  </button>
  <div style={{ flex: 1 }}>
    <img
      src={images[currentIndex]}
      alt={`Image ${currentIndex + 1}`}
      style={{ width: '100%', height: 'auto' }}
    />
  </div>
  <button className='arrow-button next-button' onClick={handleNextClick}>
    <BsArrowRight />
  </button>
</div>
{/* This code will position the buttons on the left and right sides of the image, centered vertically. Adjust the CSS properties as needed for further styling. */}






  
  
  </div>

  )
}

// import React, { useState } from 'react';
// import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
// import image1 from '../Pic/Article.jpg';
// import image2 from '../Pic/Facial_Concentrate.png';
// import image3 from '../Pic/Camellia-Nut-Facial.webp';
// import '../../CSS/div3.css';

// export default function Template7() {
//   const images = [image1, image2, image3];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrevClick = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div id='div3_first' style={{ backgroundColor: '#FFFEF2', display: 'flex', position: 'relative' }}>
//       <button className='arrow-button prev-button' onClick={handlePrevClick}>
//         <BsArrowLeft />
//       </button>
//       <div style={{ flex: 1 }}>
//         <img
//           src={images[currentIndex]}
//           alt={`Image ${currentIndex + 1}`}
//           style={{ width: '100%', height: 'auto' }}
//         />
//       </div>
//       <button className='arrow-button next-button' onClick={handleNextClick}>
//         <BsArrowRight />
//       </button>
//     </div>
//   );
// }
