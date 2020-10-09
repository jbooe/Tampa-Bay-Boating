import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Directory from './DirectoryComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';



class Main extends Component {
    render() {

        const homePage = () => {
            return (
                <Home />
            );
        };


        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/aboutus' component={About} />
                    <Route path='/home' component={homePage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/directory' component={Directory} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>

        );
    };
}

export default withRouter(Main);