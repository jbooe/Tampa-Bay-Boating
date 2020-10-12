import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardDeck, Breadcrumb, BreadcrumbItem, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDirectoryItem({ directoryItem }) {
    return (
        <Card>
            <Link to={`/directory/${directoryItem.id}`}>
            <CardImg width="100%" src={directoryItem.image} />
                <CardImgOverlay>
                    <CardTitle>{directoryItem.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.directoryLists.map( directoryItem => {
        return (
            <div key={directoryItem.id} className="col-md-5 m-1">
                <RenderDirectoryItem directoryItem={directoryItem} />
            </div>
        );
    });

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
            <div className="row">
                {directory}
            </div>
            <br />
        </div>
        
    );
}

/*class Directory extends Component {
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
                                    <CardTitle>Tampa Bay Area Islands</CardTitle>
                                    <CardText>Come and explore one of our many beautiful islands</CardText>
                                </CardBody>
                            </Card>

                            <Card className='bg-light mt-3 text-center' style={{ width: 350 }}>
                                <CardImg src={require('../images/sandbar.jpg')} alt='Text Name' />
                                <CardBody>
                                    <CardTitle>Sand Bars</CardTitle>
                                    <CardText>A boating hazard, but a great place to park and relax</CardText>
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
                                    <CardTitle>Local Boat Access Restaurants</CardTitle>
                                    <CardText>Grab a bite to eat after a great day on the water</CardText>
                                </CardBody>
                            </Card>

                            <Card className='bg-light mt-3 text-center' style={{ width: 350 }}>
                                <CardImg style={{ height: 310 }} src={require('../images/shark.jpg')} alt='Text Name' />
                                <CardBody >
                                    <CardTitle>The Local Wildlife</CardTitle>
                                    <CardText>You're gonna need a bigger boat</CardText>
                                </CardBody>
                                <SharkAlert />
                            </Card>
                        </CardDeck><br />
                    </div>
                </div>


            </div>
        );
    }
}*/


export default Directory;