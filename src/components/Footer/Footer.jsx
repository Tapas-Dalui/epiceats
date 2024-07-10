import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
    const date = new Date()
    return (
        <>
            <div className="footer" id='footer'>
                <div className="footer-content">
                    <div className="footer-content-left">
                        <img src={assets.footer} className='footer-logo' alt="" />
                        <p>
                            Epiceates is an innovative online cloud kitchen delivering gourmet meals right to your doorstep. With a focus on quality and convenience, our expertly crafted dishes cater to diverse tastes and dietary preferences, ensuring a restaurant-quality dining experience in the comfort of your home. Enjoy the ease of ordering and the joy of savoring exceptional cuisine with Epiceates.  
                        </p>
                        <div className="footer-social-icons">
                            <img src={assets.facebook_icon} alt="" />
                            <img src={assets.twitter_icon} alt="" />
                            <img src={assets.linkedin_icon} alt="" />
                        </div>

                    </div>
                    <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-content-right">
                        <h2>GET IN TOUCH</h2>
                        <ul>
                            <li>+91 558-369-47-256</li>
                            <li>contact@epiceates.com</li>
                        </ul>
                    </div>
                    
                </div>
                <hr />
                <p className='footer-copyright'>Copyright &copy; {date.getFullYear()}  EPICEATES Kitchen all right Reserved.</p>
            </div>
        </>
    )
}

export default Footer
