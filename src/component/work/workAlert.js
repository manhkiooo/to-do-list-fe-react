import React, { Component } from "react";
import TableWork from "../work/workTable";
import ReactDOM from "react-dom";
import { Alert } from 'react-bootstrap';


export default class AlertWork extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            alert:{
                visible : false,
                type : 'info',
                content : ''
            }
        }
    }

    loadAlert = (type, message) =>{
        return (event) => {
            console.log("error 2: "+ type);
            console.log("content 2: "+ message);
            var alert = {
                visible : true,
                type : type,
                content : message
            }
            this.setState({response: alert});
        }
        
    }

    render(){
        return <div>
            <Alert color={this.state.alert.type} isOpen={this.state.alert.visible} >
                {this.state.alert.content}
            </Alert>
        </div>
    }
}