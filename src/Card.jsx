import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
//import card1 from '../src/images/image3.jpg'
import ServiceImg from "./ServiceImg";

class Card extends Component{
    render(){
        return(
            <>
              <div className="col-md-4 col-10  mx-auto">
                                <div className="card" width="200px !important">
    
                                    <ServiceImg img={this.props.imgSrc}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{this.props.title}</h5>
                                        <p className="card-text">{this.props.detail}</p>
                                        { <NavLink to={'/order/'+this.props.id} className="btn btn-success" >Check it</NavLink>}
                                    </div>
                                </div>
                </div>
            </>
        )
    }
}

export default Card;
