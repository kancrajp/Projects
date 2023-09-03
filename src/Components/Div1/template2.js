import React, { Component } from 'react';
import img1 from '../Pic/Article.jpg';
import img2 from '../Pic/Facial_Concentrate.png';
import img3 from '../Pic/Camellia-Nut-Facial.webp';
import img4 from '../Pic/Parsley_Seed_Anti-Oxidant.webp';
import '../../CSS/div2.css';

class template2 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentSlide: 0, // Index of the current slide
        images: [
         img1,
         img2,
         img3,
         img4,
          // Add more image URLs here
        ],
        slidesToShow: 3, // Number of slides to show at a time
      };
    }
  
    goToPreviousSet = () => {
        const { currentSlide, slidesToShow } = this.state;
        const newIndex = currentSlide - 1;
      
        if (newIndex >= 0) {
          // Animate the slide transition
          this.setState({ sliding: true });
      
          // After a short delay, hide the last image and stop sliding animation
          setTimeout(() => {
            this.setState({ currentSlide: newIndex, sliding: false });
          }, 300); // Adjust the duration as needed for the sliding effect
        }
      };
  
    goToNextSet = () => {
        const { currentSlide, images, slidesToShow } = this.state;
        const newIndex = currentSlide + 1;
      
        if (newIndex < images.length) {
          // Animate the slide transition
          this.setState({ sliding: true });
      
          // After a short delay, hide the first image (img1) and stop sliding animation
          setTimeout(() => {
            this.setState({ currentSlide: newIndex, sliding: false });
          }, 300); // Adjust the duration as needed for the sliding effect
        }
      };
  
      render() {
        const { currentSlide, images, slidesToShow, sliding } = this.state;
      
        return (
          <div className="slider-container">
            <button onClick={this.goToPreviousSet}>&lt;</button>
            <div className={`slider${sliding ? ' sliding' : ''}`}>
              {images.slice(currentSlide, currentSlide + slidesToShow).map((image, index) => (
                <div key={index} className="slide">
                  <img src={image} alt={`Slide ${currentSlide + index + 1}`} />
                </div>
              ))}
            </div>
            {currentSlide + slidesToShow < images.length && (
              <button onClick={this.goToNextSet}>&gt;</button>
            )}
          </div>
        );
      }
    }
  
export default template2;