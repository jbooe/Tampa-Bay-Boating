import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

//Creating a simple Contact link with anchor tags using ReactStrap, Router, Font Awesome Icons and JSX components.

class Contact extends Component {

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Me</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Contact Me</h2>
                        <hr />
                    </div>
                </div>
                <div className="row row-content align-items-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                    <div className="col-sm-4">
                        <h5>My Name</h5>
                        <p>Jason Booe</p>
                        <h5>My Address</h5>
                        <address>
                            5290 14th st NE<br />
                        St Petersburg, FL 33703<br />
                        U.S.A.
                    </address>
                    </div>
                    <div className="col">
                        <a role="button" className="btn btn-link" href="tel:+16362069171"><i className="fa fa-phone" /> 1-636-206-9171</a><br />
                        <a role="button" className="btn btn-link" href="mailto:jbooe50@gmail.com"><i className="fa fa-envelope-o" /> jbooe50@gmail.com</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;