import React, { Component } from 'react';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem, CardImgOverlay, CardBody, CardText, ModalHeader, Modal, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FadeTransform } from 'react-animation-components';

//I created the Directory Component to hold the state isModalOpen for the toggle verses creating a Functional Component.  

class Directory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }

    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    /* Created cards to show the directoryLists items and establish a link to the array of object literals to describe each location. The state
    of directoryLists are held in the Main Component so i passed them in using props. I used the Fade Transform from React Animation to show some dynamic 
    animation for display purposes.  The BreadCrumb is used to link Home and Directory. I created a modal using the 3rd indexed object image in the 
    directoryLists array as the link to display some fun factual information*/

    render() {
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
                                <CardImg width='100%' height={270} src={this.props.directoryLists[0].image} alt={this.props.directoryLists[0].name} />
                                <CardImgOverlay>
                                    <CardTitle>{this.props.directoryLists[0].name}</CardTitle>
                                </CardImgOverlay>
                            </Link>
                            <CardBody>
                                <CardText>{this.props.directoryLists[0].description}</CardText>
                            </CardBody>
                        </Card>
                        <Card className="col-md-5 m-1">
                            <Link to='/displaysandbars'>
                                <CardImg  width='100%' height={270} src={this.props.directoryLists[1].image} alt={this.props.directoryLists[1].name} />
                                <CardImgOverlay>
                                    <CardTitle>{this.props.directoryLists[1].name}</CardTitle>
                                </CardImgOverlay>
                            </Link>
                            <CardBody>
                                <CardText>{this.props.directoryLists[1].description}</CardText>
                            </CardBody>
                        </Card>
                        <Card className="col-md-5 m-1">
                            <Link to='/displayrestaurants'>
                                <CardImg width='100%' height={270} src={this.props.directoryLists[2].image} alt={this.props.directoryLists[2].name} />
                                <CardImgOverlay>
                                    <CardTitle>{this.props.directoryLists[2].name}</CardTitle>
                                </CardImgOverlay>
                            </Link>
                            <CardBody>
                                <CardText>{this.props.directoryLists[2].description}</CardText>
                            </CardBody>
                        </Card>
                        <Card className="col-md-5 m-1">
                            <Link onClick={this.toggleModal} >
                                <CardImg width='100%' height={270} src={this.props.directoryLists[3].image} alt={this.props.directoryLists[3].name} />
                                <CardImgOverlay>
                                    <CardTitle>{this.props.directoryLists[3].name}</CardTitle>
                                </CardImgOverlay>
                            </Link>
                            <CardBody>
                                <CardText>{this.props.directoryLists[3].description}</CardText>
                            </CardBody>
                        </Card>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader className='modal-content bg-info' toggle={this.toggleModal} >Be Aware!</ModalHeader>
                            <ModalBody>
                                Fun Fact:  About a dozen shark species frequent Tampa Bay.
                                Tenants include hammerheads, bonnetheads, nurse sharks, blacktips, lemon sharks and bull sharks to name a few.
                                Sharks migrate in and out of Florida's waters each year. Their movements are usually associated with temperature
                                change or the presence of prey such as small baitfish, mullet and menhaden. Expecting mothers often travel into shallow-water estuaries,
                                give birth and then leave. Although the bay attracts both a frenzy of shark and human activity during the summer, shark attacks are rare.
                                The odds of being attacked by a shark in the U.S. are roughly 1 in 6 million, according to the International Shark Attack Files.
                    </ModalBody>
                        </Modal>
                    </div>
                </FadeTransform>
                <br />
            </div>

        );
    }
}



export default Directory;