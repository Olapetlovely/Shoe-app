import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer >
            <div className="footer-container">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <ul>
                        <li>Our Story</li>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Customer Support</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>Shipping & Delivery</li>
                        <li>Returns & Exchanges</li>
                        <li>FAQs</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <ul class="social-icons">
                        <li><a target='_' href="https://web.facebook.com/?_rdc=1&_rdr#"><i class="fab fa-facebook"></i>Facebook</a></li>
                        <li><a target='_' href="https://www.instagram.com/"><i class="fab fa-instagram"></i>Instagram</a></li>
                        <li><a target='_' href="https://x.com/?logout=1748447897500"> <i class="fab fa-x-twitter"></i>Twitter</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 ShoeStore. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer