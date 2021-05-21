import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from "../src/images/logo.png";

    const Navbar = () =>{
        return(
            <>
            <div className="container-fluid default-color">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg">
                            
                                    <NavLink className="navbar-brand" to="/"> <img src={logo} alt="" width="150" height="150"/> </NavLink>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" exact activeClassName="menu_active"  to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu_active"   to="/service">Products</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu_active"  to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeClassName="menu_active"  to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            
                        </nav>
                    </div>
                </div>
                   
            </div>
            </>
        );
    }

export default Navbar;