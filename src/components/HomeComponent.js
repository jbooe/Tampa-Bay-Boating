
import React from 'react';
import { Card, CardImg } from 'reactstrap';

//The functional Component RenderCard is used to display the home page Image and is probably not necessary but was used for demonstration.

function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt='Boating in Tampa Bay' />
        </Card>
    );
}

//The functional Component Home is a simple card using RenderCard and also displays a nautical poem.

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col m-1" >
                    <RenderCard item={props.boats} />
                </div>
                <div className="col col-md-4">
                    <h3>Estrella</h3>

                    <p style={{ fontStyle: "italic" }}> Sometimes when the night comes on <br />
                        and Venus rises bright over the river,<br /><br />

                        I think I can see a boat floating white<br />
                        in the mist, and my heart opens<br /><br />

                        with a fainting motion, laying back<br />
                        on its bed of flesh.<br /><br />

                        Oh, to see the boat, going its way<br />
                        towards the great, unfathomable sea.<br /><br />
                    </p>
                        —L.L. Barkat, author
                </div>

            </div>
        </div>
    );
}

export default Home;