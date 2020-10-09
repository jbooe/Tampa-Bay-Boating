import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardDeck, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Directory extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Directory</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Directory</h2>
                        <hr />
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <CardDeck style={{ width: 1000 }}>
                            <Card className='bg-light mt-3 text-center' style={{ width: 350 }}>
                                <CardImg style={{ height: 260 }} src={require('../images/island.jpg')} alt='Text Name' />
                                <CardBody>
                                    <CardTitle>'text name'</CardTitle>
                                    <CardText>'text description'</CardText>
                                </CardBody>
                            </Card>

                            <Card className='bg-light mt-3 text-center' style={{ width: 350 }}>
                                <CardImg src={require('../images/sandbar.jpg')} alt='Text Name' />
                                <CardBody>
                                    <CardTitle>'text name'</CardTitle>
                                    <CardText>'text description'</CardText>
                                </CardBody>
                            </Card>
                        </CardDeck>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <CardDeck style={{ width: 1000 }}>
                            <Card className='bg-light mt-3 text-center' style={{ width: 350 }}>
                                <CardImg src={require('../images/restaurant.jpg')} alt='Text Name' />
                                <CardBody>
                                    <CardTitle>'text name'</CardTitle>
                                    <CardText>'text description'</CardText>
                                </CardBody>
                            </Card>

                            <Card className='bg-danger mt-3 text-center' style={{ width: 350 }}>
                                <CardImg style={{ height: 310 }} src={require('../images/shark.jpg')} alt='Text Name' />
                                <CardBody >
                                    <CardTitle>'text name'</CardTitle>
                                    <CardText>'text description'</CardText>
                                </CardBody>
                            </Card>
                        </CardDeck><br />
                    </div>
                </div>


            </div>
        );
    }
}


export default Directory;