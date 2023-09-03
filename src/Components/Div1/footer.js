import React from 'react';
import '../../CSS/footer.css';
import { BsArrowUpRight } from 'react-icons/bs';


export default function footer() {
  return (
    <div>
        <footer class="footer">
        <div class="footer-columns">
        <h3>Subscribe to Aesop communications</h3>
        <hr class="footer-line"/>
        <div class="subscribe">
            <input id='input_footer' type="email" placeholder="Enter your email"/>
            <label>
                <div style={{paddingTop:'2ch'}}>
            <input style={{paddingTop:'0.5ch'}} type="checkbox"/> Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our Privacy Policy
            </div>
            </label>
            
        </div>
        </div>

        <div class="footer-column">
            <h3>Orders and support</h3>
            <hr class="footer-line"/>

            <ul class="footer-links">
                <li><a href="#">Contact Us</a><span><BsArrowUpRight/></span></li>
                <li><a href="#">FAQs</a><span><BsArrowUpRight/></span></li>
                <li><a href="#">Shipping</a><span><BsArrowUpRight/></span></li>
                <li><a href="#">Returns</a><span><BsArrowUpRight/></span></li>
                <li><a href="#">Order History</a></li>
                <li><a href="#">Terms and Conditions</a></li>
            </ul>
    
        </div>

        <div class="footer-column">
            <h3>Services</h3>
            <hr class="footer-line"/>

            <ul>
            <li><a href="#">Live assistance</a></li>
            <li><a href="#">Corporate gifts</a></li>
            <li><a href="#">Facial Appointments</a></li>
            <li><a href="#">Click and Collect</a></li>
            <li><a href="#">Video consultation</a></li>
            </ul>
        </div>

        <div class="footer-column">
            <h3>Location preferences</h3>
            <hr class="footer-line"/>

            <ul>
            <li style={{fontWeight:'600'}}><a href="#" >Shipping:</a></li>
            <li style={{textDecoration:'underline'}}><a href="#">Hong Kong SAR, China</a></li>
            <li style={{fontWeight:'600'}}><a href="#">Language:</a></li>
            <li style={{textDecoration:'underline'}}><a href="#">English</a></li>
            </ul>
        </div>
  
</footer>

<footer class="footer">
        <div class="footer-columns">
        <h3>Sustainability</h3>
        <hr class="footer-line"/>
        <div class="subscribe">
           
                <div style={{paddingTop:'2ch'}}>
                    <span>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</span>
            </div>
            
            
        </div>
        </div>


        <div class="footer-column">
            <h3>About</h3>
            <hr class="footer-line"/>

            <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Foundation</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Cookie Policy</a></li>
            </ul>
        </div>


        <div class="footer-column">
            <h3>Social media</h3>
            <hr class="footer-line"/>

            <ul>
            <li><a href="#">Instragram</a><span><BsArrowUpRight/></span></li>
                <li><a href="#">Twitter</a><span><BsArrowUpRight/></span></li>
                <li><a href="#">LinkedIn</a><span><BsArrowUpRight/></span></li>
                <li><a href="#">WeChat</a></li>
                <li><a href="#">Weibo</a><span><BsArrowUpRight/></span></li>
            </ul>
        </div>
        </footer>

        {/* <div style={{backgroundColor:'#333333'}}>
        <hr style={{height:'0.5px', color:'white', border:'none'}}/>
        <h2 style={{padding:'20px'}}>© Aesop</h2>
        </div> */}

    </div>

    
  )
}
