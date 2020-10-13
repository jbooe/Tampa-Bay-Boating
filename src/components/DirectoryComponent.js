import React from 'react';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDirectoryItem({ directoryItem }) {
    return (
        <Card>
            <Link to={`/directory/${directoryItem.id}`}>
            <CardImg width="100%" height={270} src={directoryItem.image} />
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



export default Directory;