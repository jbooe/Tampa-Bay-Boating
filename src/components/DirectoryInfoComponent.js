import React from 'react';
import { Card, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderItem({ directoryItem }) {
    return (
        <Card>
            <Link>
                <CardImg top src={directoryItem.image} alt={directoryItem.name} />
                <CardTitle>{directoryItem.name}</CardTitle>
                <CardBody>
                    <CardText>{directoryItem.description}</CardText>
                    <CardText>{directoryItem.coord}</CardText>
                </CardBody>
            </Link>
        </Card>
    );
}

function DirectoryInfo(props) {

    const directory = props.islands.map(directoryItem => {
        return (
            <div key={directoryItem.id} className="col-md-5 m-1">
                <RenderItem directoryItem={directoryItem} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.directoryItem.name}</BreadcrumbItem>
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
    



export default DirectoryInfo;




