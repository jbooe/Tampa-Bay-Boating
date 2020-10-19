import React from 'react';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem, CardImgOverlay, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDirectoryItem({ directoryItem }) {

    return (

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
    );
}

export function DisplaySandbars(props) {

    const directory = props.sandbars.map(directoryItem => {
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