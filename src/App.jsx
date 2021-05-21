import React from 'react';
import Home from "./Home";
import Contact from "./Contact";
import  Service from "./Service";
import  Order from "./Order";
//import  Order from "./Order";
////<Route exact path="/order" component={Order}/>
import About from "./About";
import 'tachyons';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/js/dist/collapse';
import { Switch , Route, Redirect } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import "./App.css";
  const App = () => {
        return(
            <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/service" component={Service}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/order/:id" component={Order}/>
                <Redirect to="/"/>
            </Switch>
            <Footer />
            </>
            
        )
    }
export default App;