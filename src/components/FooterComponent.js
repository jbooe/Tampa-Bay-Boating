import React from 'react';
import { Link } from 'react-router-dom';

//Created a footer using Link for Components and anchor tags for the Font Awesome Icons.  The Social Media links are for demonstrative purposes only.

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <div className="col-4 col-sm-2 offset-1" >
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/directory'>Directory</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-linkedin" href="http://linkedin.com/"><i className="fa fa-linkedin" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel: +636-206-9171"><i className="fa fa-phone" /> 1-636-206-9171</a><br />
                        <a role="button" className="btn btn-link" href="mailto:jbooe50@gmail.com"><i className="fa fa-envelope-o" /> jbooe50@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
