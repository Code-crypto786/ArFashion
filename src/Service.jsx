import React, { Component } from 'react';
import Card from './Card';
import axios from "axios";
class Service extends Component{
    constructor(props){
        super(props);
        this.state = {
             products : []
        };

    }
    componentDidMount(){
        axios.get('http://localhost/blog/items.php/').then(response =>{
            this.setState({
                products:response.data
            
            });
        })
        .catch(function(error){
            console.log(error);
        });
    }
    userList(){
        return this.state.products.map((val,index) =>{
            return <Card imgSrc={val.imgSrc} title={val.title} detail={val.detail} id={val.id}/>
        });
    }
    render(){
        
        return( 
            <>
            <div className="my-5">
                <h1 className="text-center">Our Best Designings</h1>
            </div>
            <div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                          {this.userList()}
                        </div>
		    		</div>
           		</div>
 		</div>
            </div>
            </>
        )
    }
}
export default Service;