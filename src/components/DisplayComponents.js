import React from 'react';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem, CardImgOverlay, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-animation-components';

/* The functional Component RenderDirectoryItem is used as the framework for the Cards and is passed 
in while mapping through the array of object literals.  Fade is used to add some dynamic behaviour 
for demonstrative purposes. */

function RenderDirectoryItem({ directoryItem }) {

    return (
        <Fade in >
            <Card>
                <CardImg width='100%' height={270} src={directoryItem.image} alt={directoryItem.name} />
                <CardImgOverlay>
                    <CardTitle>{directoryItem.name}</CardTitle>
                </CardImgOverlay>
                <CardBody>
                    <CardText>{directoryItem.description}</CardText>
                    <CardText>Located At {directoryItem.coord}</CardText>
                </CardBody>
            </Card>
        </Fade>
    );
}

/* The 3 functional Components listed below are used to display the selected directoryLists items 
from the Directory Component. Each one has a BreadcrumbItem to redirect the link back to the Directory.*/

export function DisplaySandbars(props) {

    const directory = props.sandbars.map(directoryItem => {
        return (
            <div key={directoryItem.id} className="col-md-5 m-1"  >
                <RenderDirectoryItem directoryItem={directoryItem}
                />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Sandbars</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Sandbars</h2>
                    <hr />
                </div>
            </div>
            <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                {directory}
            </div>
            <br />
        </div>

    );
}
export function DisplayRestaurants(props) {

    const directory = props.restaurants.map(directoryItem => {
        return (
            <div key={directoryItem.id} className="col-md-5 m-1" >
                <RenderDirectoryItem directoryItem={directoryItem}
                />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Restaurants</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Restaurants</h2>
                    <hr />
                </div>
            </div>
            <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                {directory}
            </div>
            <br />
        </div>

    );
}
export function DisplayIslands(props) {

    const directory = props.islands.map(directoryItem => {
        return (
            <div key={directoryItem.id} className="col-md-5 m-1" >
                <RenderDirectoryItem directoryItem={directoryItem}
                />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Islands</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Islands</h2>
                    <hr />
                </div>
            </div>
            <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                {directory}
            </div>
            <br />
        </div>

    );
}