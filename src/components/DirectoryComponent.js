import React from 'react';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem, CardImgOverlay, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

function RenderDirectoryItem({ directoryItem }) {
    return (
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}
        >
            <Card>
                <Link to={`/directory/${directoryItem.id}`}>
                    <CardImg width='100%' height={270} src={directoryItem.image} alt={directoryItem.name} />
                    <CardImgOverlay>
                        <CardTitle>{directoryItem.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
                <CardBody>
                    <CardText>{directoryItem.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
}

function Directory(props) {

    const directory = props.directoryLists.map(directoryItem => {
        return (
            <div key={directoryItem.id} className="col-md-5 m-1" >
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
            <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                {directory}
            </div>
            <br />
        </div>

    );
}



export default Directory;