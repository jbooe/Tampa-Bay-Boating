import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt='Boating in Tampa Bay' />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}



function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.boat} />
                </div>
            </div>
        </div>
    );
}

export default Home;