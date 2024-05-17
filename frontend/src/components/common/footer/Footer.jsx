
import React from 'react';
import "./footer.css";
const FooterHTML = () => {
    return (
        <footer>
            <div className="fcontainer">
                <div className="footer-content">
                    <h3>Contact Us</h3>
                    <p>Email: Info@example.com</p>
                    <p>Phone: +121 56556 565556</p>
                    <p>Address: Your Address 123 street</p>
                </div>
                <div className="footer-content">
                    <h3>Quick Links</h3>
                    <ul className="list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-content">
                    <h3>Follow Us</h3>
                    <ul className="social-icons">
                        <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook" id='white'></i></a></li>
                        <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="bottom-bar">
                <p>&copy; 2023 your company. All rights reserved</p>
            </div>
        </footer>
    );
}

export default FooterHTML;
