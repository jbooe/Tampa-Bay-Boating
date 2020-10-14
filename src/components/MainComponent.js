import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Directory from './DirectoryComponent';
import { DIRECTORYLISTS } from '../shared/directoryItems';
import { ISLANDS } from '../shared/islands';
import { RESTAURANTS } from '../shared/restaurants';
import { SANDBARS } from '../shared/sandbars';
import { BOATS } from '../shared/boating';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';




class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            directoryLists: DIRECTORYLISTS,
            islands: ISLANDS,
            restaurants: RESTAURANTS,
            sandbars: SANDBARS,
            boats: BOATS
        };

    }

    
    render() {

        const homePage = () => {
            return (
                
                <Home boats={this.state.boats[0]}/>
                
            );
        };


        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/aboutus' component={About} />
                    <Route path='/home' component={homePage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/directory' render={() => <Directory directoryLists={this.state.directoryLists} />} /> 
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>

        );
    };
}

export default withRouter(Main);