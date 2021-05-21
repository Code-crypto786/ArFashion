import React, { Component } from 'react';
//import card1 from '../src/images/image3.jpg';

class ServiceImg extends Component{
   
    image(){
        return <img src={process.env.PUBLIC_URL + 'assets/images/'+this.props.img} alt="book" height="400px"/>
    }
    render(){ 
        return (
        <> 
        {this.image()}
        </>
        )
    }
}
export default ServiceImg