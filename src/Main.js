import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Route } from 'react-router-dom'

// Import Components
import Home from "./components/Home";
import Templates from "./components/Templates"
import Builder from "./components/Builder"
import NavBar from './compiler/NavBar';
import Footer from './compiler/Footer';

class Main extends Component {
    grabUser = () => {
        
    }
    render() {
        return (
            
                <main>   
                    <NavBar />                 
                    <Route exact path="/home/" component={Home} />
                {/* <Route exact path="/home/builder" component={Builder} /> */}
                    <Route exact path="/home/builder/:userUID" component={Builder} />
                    {/* <Route exact path="/home/templates" component={Templates} /> */}
                    <Footer />
                </main>
            
        )
    }
}

export default Main;