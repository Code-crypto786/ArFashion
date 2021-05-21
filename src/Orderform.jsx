import React, { Component } from 'react';
import axios from "axios";
class Orderform extends Component{
    constructor(props){
        super(props);
        this.orderNameHandler = this.orderNameHandler.bind(this);
        this.orderEmailHandler = this.orderEmailHandler.bind(this);
        this.orderPhoneHandler = this.orderPhoneHandler.bind(this);
        this.paymentHandler = this.paymentHandler.bind(this);
        this.orderAddressHandler = this.orderAddressHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            orderName : "",
            orderEmail : "",
            orderPhone : "",
            orderAddress : "",
            payment : "",
            error : "",
            message : ""
            
        }
    }

    orderNameHandler(e){
        this.setState({
            orderName : e.target.value,

        });
    }
    orderEmailHandler(e){
        this.setState({
            orderEmail : e.target.value,
        });
    }
    orderPhoneHandler(e){
        this.setState({
            orderPhone : e.target.value,

        });
    }
    paymentHandler(e){
        this.setState({
            payment : e.target.value,

        });
    }
    orderAddressHandler(e){
        this.setState({
            orderAddress : e.target.value,

        });
    }
    onSubmit(e){
        e.preventDefault();
        if(this.state.orderName == "" || this.state.orderPhone == "" || this.state.orderEmail == "" || this.state.orderAddress == "" || this.state.payment == "" ){
            
            this.setState({
                error : "All fields are required"
            });
            
        }else{
            const obj ={
                orderName : this.state.orderName,
                orderEmail : this.state.orderEmail,
                orderPhone : this.state.orderPhone,
                orderAddress: this.state.orderAddress,
                payment : this.state.payment,
            }
        axios.post('http://localhost/blog/order.php',obj).then(res => console.log(res.data));
        this.setState({
            orderName : "",
            orderEmail : "",
            orderPhone : "",
            orderAddress:"",
            error : "",
            message: "Order Confirm Successfully"
            
        });
        }
        if(this.state.message != ""){
            this.setState({
                message: ""
            })
        }
    }
   
    render(){
        return(
            <>
             
                      <form onSubmit={this.onSubmit}>
                      <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" name="orderName" onChange={this.orderNameHandler} value={this.state.orderName} placeholder="Enter your name" aria-describedby="emailHelp"/>
                            
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="orderEmail" onChange={this.orderEmailHandler} value={this.state.orderEmail}  placeholder="Enter your Email" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">phone</label>
                            <input type="text" name="orderPhone" onChange={this.orderPhoneHandler} value={this.state.orderPhone} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Enter your full Address</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" name="orderAddress" value={this.state.orderAddress} onChange={this.orderAddressHandler} rows="3"></textarea>
                            </div>
                        <b>Payment Method:</b><br/>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="payment" onChange={this.paymentHandler}  id="inlineRadio1" value="onDeleviry" />
                            <label className="form-check-label" for="payment">On deleviry</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="payment" id="inlineRadio2" value="jazzCash" disabled />
                            <label className="form-check-label" for="payment">Jazz Cash</label>
                        </div>
                        <br/>
                        <p className="error">{this.state.error}</p>
                        <p className="message">{this.state.message}</p>
                        <button type="submit" className="btn btn-success">confirm Order</button>
                        </form>
            </>
        )
    }
}
export default Orderform;
