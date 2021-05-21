import React, { Component } from 'react';
import "./Order.css";
import axios from "axios";
import Orderform from "./Orderform"
import ServiceImg from "./ServiceImg";
class Order extends Component
{
    constructor(props){
        super(props);
            this.state = {
                id : "",
                imgSrc : "",
                title :"",
                detail :"",
                price : ""
            };
        
    }
    componentDidMount(){
        axios.get("http://localhost/blog/userOrder.php?id="+this.props.match.params.id)
        .then(response =>{
            this.setState({
                id : response.data.id,
                imgSrc : response.data.imgSrc,
                title : response.data.title,
                detail : response.data.detail,
                price : response.data.price
                
            });
            //console.log(response.data.imgSrc);
        })
        .catch(function(error){
            console.log(error);
        });
    }
    render(){
            return(
            <>
            <div className="container my-5 gy-5">
            <div className="row ">
            <div className="col-sm-6 col-xs-12">
                <div className="card">
                    <p>{this.state.imgSrc}</p>
                <img src={process.env.PUBLIC_URL + 'assets/images/'+this.state.imgSrc} alt="book" height="400px"/>
                  <div className="card-body">
                  <b>Design:</b><p className="card-text">{this.state.title}</p>
                      <b>Price:</b><p className="card-text">{this.state.price}$</p>
                      <br/>
                      <b>Detail</b>:<p className="card-text">{this.state.detail}</p>
                      
                  </div>
                </div>
            </div>
            <div className="col-sm-6 col-xs-12">
                <Orderform/>
            </div>
            </div>
            </div>
            </>
        )
    }
}
export default Order;
