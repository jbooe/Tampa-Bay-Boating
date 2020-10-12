import React, { Component } from 'react';
import { Button, Alert } from 'reactstrap';






class SharkAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    onShowAlert = () => {
        this.setState({ visible: true }, () => {
            window.setTimeout(() => {
                this.setState({ visible: false })
            }, 11000)
        });
    }

    render() {
        return (
            <div className="App">
                <Button type="button" color="danger" className='mb-3' onClick={() => { this.onShowAlert() }} >Important!</Button>
                <Alert color="info"isOpen={this.state.visible} ><i className="ni ni-like-2">Fun Fact: Tampa Bay is the shark capital of the world, with the largest population
                and the largest variety, but that shouldn't keep you out of the water. You are more likely to die from a sink hole, boating accident, tornado,
                or lightning in Florida than die from a shark bite.</i>
                </Alert>
            </div>
        );
    }
}

export default SharkAlert;