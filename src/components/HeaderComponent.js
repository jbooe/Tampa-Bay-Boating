import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavItem, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
                        <NavbarBrand className="mr-auto" href="/"><img src='/assets/images/anchor2.png' height="50" width="50" alt="Anchor Logo" /></NavbarBrand>
                        <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-list fa-lg" /> Directory
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact Me
                                    </NavLink>
                                </NavItem>
                            </Nav>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;