import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';
import Banner1 from './banner1.js'
import Template1 from '../Div1/template.js'
import Template2 from '../Div1/template2.js'
import Template3 from '../Div1/template3.js'
import Template4 from '../Div1/template4.js'
import Template5 from '../Div1/template5.js'
import Template6 from '../Div1/template6.js'
import Template7 from '../Div1/template7.js'
import Template8 from '../Div1/template8.js'
import Footer from '../Div1/footer.js'
import '../../CSS/navbar.css'

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };


  return (
    <div style={{backgroundColor: '#FFFEF2'}}>
        <Banner1/>

        <nav id="topnav" className={isMenuOpen ? 'responsive' : ''}>
      <span style={{fontSize:'0.2rem'}}>
      <Link to="/home" id='active'>Skin Care</Link>
      <Link to="/contact" id='active'>Body & Hand</Link>
      <Link to="/about" id='active'>Hair</Link>
      <Link to="/home" id='active'>Fragrance</Link>
      <Link to="/contact" id='active'>Home</Link>
      <Link to="/about">Kits & Travel</Link>
      <Link to="/about">Gifts</Link>
      <Link to="/home">Read</Link>
      <Link to="/contact">Stores</Link>
      <Link to="/about">Facial Appoitments</Link> 
      <Link to="/about"><BiSearchAlt2/></Link> 
      </span>

      <div id='divnav'>
      <Link to="/home" id='active'>Read</Link>
      <Link to="/contact">Stores</Link>
      <Link to="/about">Facial Appoitments</Link> 
      </div>

      <button id="icon" onClick={toggleMenu}>
        <FaBars />
      </button>
    </nav>
    
<Template1/>
<Template2/>
<Template3/>
<Template4/>
<Template5/>
<Template6/>
<Template7/>
<Template8/>
<Footer/>


    </div>
  )
}
