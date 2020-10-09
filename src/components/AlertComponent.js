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
            }, 7000)
        });
    }

    render() {
        return (
            <div className="App">
                <Button type="button" color="danger" className='mb-3' onClick={() => { this.onShowAlert() }} >Important!</Button>
                <Alert color="info" isOpen={this.state.visible} ><i className="ni ni-like-2">I am an alert and I will disappear in 7sec.!</i>
                    
        </Alert>
            </div>
        );
    }
}

export default SharkAlert;