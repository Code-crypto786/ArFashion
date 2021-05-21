import React, { Component } from 'react';
import axios from "axios";
class Contact extends Component{
    constructor(props){
        super(props);
        this.nameHandler = this.nameHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.phoneHandler = this.phoneHandler.bind(this);
        this.messageHandler = this.messageHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name : "",
            email : "",
            phone : "",
            message : "",
            error : "",
            mesg : ""
        }

    }
    nameHandler(e){
        this.setState({
            name : e.target.value,

        });
    }
    emailHandler(e){
        this.setState({
            email : e.target.value,
        });
    }
    phoneHandler(e){
        this.setState({
            phone : e.target.value,

        });
    }
    messageHandler(e){
        this.setState({
            message : e.target.value,

        });
    }
    onSubmit(e){
        e.preventDefault();
        if(this.state.name == "" || this.state.email == "" || this.state.phone == "" || this.state.message == ""){
            this.setState({
                error : "All fields are required"
            });
        }else{
            const obj ={
                name : this.state.name,
                email : this.state.email,
                phone : this.state.phone,
                message : this.state.message,
            }
        axios.post('http://localhost/blog/insert.php',obj).then(res => console.log(res.data));
         this.setState({
            name : "",
            email : "",
            phone : "",
            message : "",
            error : "",
            mesg : " Thanks For Contact Us! we will contact you shortly"
            
        });
        }
        if(this.state.mesg != ""){
            this.setState({
                mesg: ""
            })
        }
    }
    render(){
        return(
           
            <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={this.onSubmit}>
                            <p className="error">{this.state.error}</p>
                            <p className="message">{this.state.mesg}</p>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" onChange={this.nameHandler} class="form-control" id="name" name="name" value={this.state.name}  placeholder="Enter your name"/>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" onChange={this.emailHandler} class="form-control" id="email" name="email" value={this.state.email}   placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">phone number</label>
                                <input type="text" onChange={this.phoneHandler} class="form-control" id="phone" name="phone" value={this.state.phone}   placeholder="+923...."/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message Us</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" name="message" value={this.state.message}  onChange={this.messageHandler} rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-outline-primary">
                                    submit form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </>
            
        )
    }
}
export default Contact;