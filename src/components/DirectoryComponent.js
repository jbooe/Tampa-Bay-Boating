import React from 'react';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem, CardImgOverlay, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';



function Directory(props) {
     

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/display">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}
        >
            <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
           
                <Card className="col-md-5 m-1">
                    <Link to='/displayislands'>
                        <CardImg width='100%' height={270} src={props.directoryLists[0].image} alt={props.directoryLists[0].name} />
                        <CardImgOverlay>
                            <CardTitle>{props.directoryLists[0].name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                    <CardBody>
                        <CardText>{props.directoryLists[0].description}</CardText>
                    </CardBody>
                </Card>
                <Card className="col-md-5 m-1">
                    <Link to='/displaysandbars'>
                        <CardImg width='100%' height={270} src={props.directoryLists[1].image} alt={props.directoryLists[1].name} />
                        <CardImgOverlay>
                            <CardTitle>{props.directoryLists[1].name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                    <CardBody>
                        <CardText>{props.directoryLists[1].description}</CardText>
                    </CardBody>
                </Card>
                <Card className="col-md-5 m-1">
                    <Link to='/displayrestaurants'>
                        <CardImg width='100%' height={270} src={props.directoryLists[2].image} alt={props.directoryLists[2].name} />
                        <CardImgOverlay>
                            <CardTitle>{props.directoryLists[2].name}</CardTitle>
                        </CardImgOverlay>
                    </Link>
                    <CardBody>
                        <CardText>{props.directoryLists[2].description}</CardText>
                    </CardBody>
                </Card>
                <Card className="col-md-5 m-1">
                        <CardImg width='100%' height={270} src={props.directoryLists[3].image} alt={props.directoryLists[3].name} />
                        <CardImgOverlay>
                            <CardTitle>{props.directoryLists[3].name}</CardTitle>
                        </CardImgOverlay>
                    <CardBody>
                        <CardText>{props.directoryLists[3].description}</CardText>
                    </CardBody>
                </Card>
                
            </div>
            </FadeTransform> 
            <br />
        </div>

    );
}



export default Directory;