import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        };


        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/aboutus' component={About} />
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                
                <Footer />
            </div>

        );
    };
}

export default Main;