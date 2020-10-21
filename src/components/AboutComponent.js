import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';


//Creating an About link in my project

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>My Mission</h3>
                    <p>To show a small fraction of places to go and adventures to take in the Tampa Bay waters.
                    I view boats as a vehicle to explore exciting new places and a great way to spend the day
                    relaxing helping to take care of the stresses of life. With a boat, you can spend the day
                    on an island beach, grab a bite to eat at a restaurant, or cool off on a sandbar.
                        The possibilities are endless!</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Boats I Captain</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">22' Champion Bay Boat</dt>
                                <dd className="col-6">"Bouy's Adrift" - cursed</dd>
                                <dt className="col-6">20' Robalo</dt>
                                <dd className="col-6">No Name - really reliable</dd>
                                <dt className="col-6">32' Sea Ray Sundancer</dt>
                                <dd className="col-6">"Rasing HVAC" - expensive</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">"The sea, once it casts its spell, holds one in its net of wonder forever".</p>
                                <footer className="blockquote-footer">Jacques Yves Custeau{' '}

                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default About;