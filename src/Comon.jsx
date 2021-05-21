import React from 'react';
import {NavLink} from 'react-router-dom';
  const Comon = (props) => {
        return(
           
              <section id="header">
                    <div className="container-fluid nav-bg">
                	        <div className="row">
                    		    <div className="col-10 mx-auto">
                                    <div className="row">
                                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 de-flex justifay">
                                        <h1>
                                            {props.name}<br/>
                                            <strong className="brand-name"> best online shoping tool </strong>
                                        </h1>
                                        <h2 className="my-3">
                                            we give you best Services.
                                        </h2>
                                        <div className="mt-3">
                                        <NavLink to={props.Visit} className="btn-get-started">
                                            {props.btnName}
                                        </NavLink>
                                        </div>
                                        </div>
                                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                                            <img 
                                            src={props.imgSrc}
                                            className="img-fluid animated"
                                            alt="home img"
                                            width="400px"
                                            />
                                        </div>
                                    </div>
		    		            </div>
           		            </div>
 		            </div>
              </section>
            
        )
    }
export default Comon;