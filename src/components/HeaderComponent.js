import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Jumbotron >
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Tampa Bay Boating</h1>
                                <h2>Let the adventure begin</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src={require('../images/anchor2.png')} height="50" width="50" alt="Anchor Logo" /></NavbarBrand>
                        
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;