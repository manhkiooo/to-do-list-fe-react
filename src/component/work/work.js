import React, { Component } from "react";
import TableWork from "../work/workTable";
import WorkAdd from "../work/workAdd";
import ReactDOM from "react-dom";
import { Alert, Button  } from 'react-bootstrap';
import WorkPagination from "./workPagination";


export default class SearchWork extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            limit : 3,
            sort : "id",
            response:{
                    page: 1,
                    totalPage: 3,
                    limit: 3,
                    list: []
            },
            search:{
                page: 1,
                limit: 3,
                firstName:''
            },
            alert:{
                visible : false,
                type : 'info',
                content : ''
            },
            add:{
                visible : false,
                name : "",
                startDate : "",
                endDate : "",
                status : 1
            }
        }
    }

    componentDidMount(){
        this.loadWork();
    }

     loadWork = ()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
        var url = "http://localhost:8080/work?page="+ this.state.response.page +"&limit="+ this.state.limit +"&sort="+ this.state.sort;
   

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {this.setState({response: result})})
        .catch(error => console.log('error', error));
    }

    loadWorkAndAlert = (alert)=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");


        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
        var url = "http://localhost:8080/work?page="+ this.state.search.page +"&limit="+ this.state.search.limit +"&sort=";
        console.log("url: "+ url)

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => {this.setState({response: result, alert: alert})})
        .catch(error => console.log('error', error));

        setTimeout(
            function() {
                this.setState({ alert:{
                    visible : false,
                    type : '',
                    content : ''
                } });
            }
            .bind(this),
            3000
        );
    }

    deleteWork = (id) =>{
        return (event) => {
            console.log("ID: "+ id);
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
                redirect: 'follow'
                };
                var url = "http://localhost:8080/work/"+id;
                console.log("url: "+ url)
        
                fetch(url, requestOptions)
                .then(response => response.json())
                .then(result => {console.log("Data0: "+ JSON.stringify(result)); 
                var type = "success";
                if(result.error > 0){
                    type = "danger";
                }

                var alert = {
                    visible : true,
                    type : type,
                    content : result.message
                }
                this.loadWorkAndAlert(alert);})
                .catch(error => console.log('error', error));
        }
        
    }

    updateWork = (id, name, startDate, endDate, event) =>{
        return (event) => {
            var status = event.target.value;
            console.log("status: "+ status);
            var data = {
                workName : name,
                startDate : startDate,
                endDate : endDate,
                status : status,
                id : 0
            }

            console.log("ID: "+ id);
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                redirect: 'follow',
                body: JSON.stringify(data)
                };
                var url = "http://localhost:8080/work/"+id;
                console.log("url: "+ url)
        
                fetch(url, requestOptions)
                .then(response => response.json())
                .then(result => {console.log("Data0: "+ JSON.stringify(result)); 
                var type = "success";
                if(result.error > 0){
                    type = "danger";
                }

                var alert = {
                    visible : true,
                    type : type,
                    content : result.message
                }
                this.loadWorkAndAlert(alert);})
                .catch(error => console.log('error', error));
        }
        
    }

    search = (event)=>{
        let value = event.target.value
        let search = {
            page: 1,
            limit: 6,
            firstName:value
        }
        this.setState({search}, this.loadWork)
    }

    parseStringDate(date){
        try {
            var arrDateTime = date.split("T");
            var arrDate = arrDateTime[0].split("-")
            return arrDateTime[1] + " " + arrDate[2] +"/"+arrDate[1] +"/"+arrDate[0];
          }
          catch(err) {
            return "";
          }
        

    }

    showForm = ()=>{
        return (event) => {

            this.setState({add: {visible: !this.state.add.visible}})
        }
        
    }

    addWork = ()=>{
        return (event) => {
            const data = this.state.add;
            console.log("namw: "+ data.name);
            console.log("parseStringDate: "+ this.parseStringDate(data.startDate));
            console.log("parseStringDateEnd: "+ this.parseStringDate(data.endDate));
            console.log("namw: "+ data.status);
            var alert = {
                visible : false,
                type : "",
                content : ""
            }
            if(data.name == ""){
                alert = {
                    visible : true,
                    type : "danger",
                    content : "Name is required"
                }
                this.setState({alert: alert});
                setTimeout(
                    function() {
                        this.setState({ alert:{
                            visible : false,
                            type : '',
                            content : ''
                        } });
                    }
                    .bind(this),
                    3000
                );
            }else if(data.startDate == ""){
                alert = {
                    visible : true,
                    type : "danger",
                    content : "Start date is required"
                }
                this.setState({alert: alert});
                setTimeout(
                    function() {
                        this.setState({ alert:{
                            visible : false,
                            type : '',
                            content : ''
                        } });
                    }
                    .bind(this),
                    3000
                );
            }
            else if(data.endDate == ""){
                alert = {
                    visible : true,
                    type : "danger",
                    content : "End date is required"
                }
                this.setState({alert: alert});
                setTimeout(
                    function() {
                        this.setState({ alert:{
                            visible : false,
                            type : '',
                            content : ''
                        } });
                    }
                    .bind(this),
                    3000
                );
            }else if(this.parseStringDate(data.startDate)  == ""){
                alert = {
                    visible : true,
                    type : "danger",
                    content : "Start date must corret format"
                }
                this.setState({alert: alert});
                setTimeout(
                    function() {
                        this.setState({ alert:{
                            visible : false,
                            type : '',
                            content : ''
                        } });
                    }
                    .bind(this),
                    3000
            );
            }
            else if(this.parseStringDate(data.endDate)  == ""){
                alert = {
                    visible : true,
                    type : "danger",
                    content : "End date must corret format"
                } 
                this.setState({alert: alert});
                setTimeout(
                    function() {
                        this.setState({ alert:{
                            visible : false,
                            type : '',
                            content : ''
                        } });
                    }
                    .bind(this),
                    3000
                );
            }
            else{
                var dataAdd = {
                    workName : data.name,
                    startDate : this.parseStringDate(data.startDate) ,
                    endDate : this.parseStringDate(data.endDate),
                    status : data.status == undefined ? 1 : data.status
                }

                console.log("data1111111111: "+ JSON.stringify(dataAdd));
                console.log("data.status: "+ data.status);
                console.log("data.status2: "+ data.status == undefined ? 1 : data.status);
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    redirect: 'follow',
                    body: JSON.stringify(dataAdd)
                    };
                    var url = "http://localhost:8080/work/";
                    console.log("url: "+ url)
            
                    fetch(url, requestOptions)
                    .then(response => response.json())
                    .then(result => {console.log("Data0: "+ JSON.stringify(result)); 
                            var type = "success";
                            if(result.error > 0){
                                type = "danger";
                            }

                            alert = {
                                visible : true,
                                type : type,
                                content : result.message
                            };
                            this.setState({alert: alert, add: {visible : false,
                                name : "",
                                startDate : "",
                                endDate : "",
                                status : 1}});

                            setTimeout(
                                function() {
                                    this.setState({ alert:{
                                        visible : false,
                                        type : '',
                                        content : ''
                                    } });
                                }
                                .bind(this),
                                3000
                            );
                        }
                    ).catch(error => console.log('error', error));

                }
        }
    }

    setValue = (event)=>{
        var data = this.state.add;
        data[event.target.name] = event.target.value;
        this.setState({ add : data})
    }

    setPage = (page)=>{
        return (event) => {
            var data = this.state.response;
            data.page = page;
            this.setState({ response : data})
            this.loadWork();
        }
    }
    showForm = ()=>{
        return (event) => {

            this.setState({add: {visible: !this.state.add.visible}})
        }
        
    }

    setSort = (sort)=>{
        return (event) => {
            this.setState({ sort : sort})
            this.loadWork();
        }
    }

    render(){
        const data = this.state.response.list;
        const page = this.state.response;
        return <div>
           <TableWork data={data} fc={this.deleteWork} update={this.updateWork} sort={this.state.sort} setSort={this.setSort}/>
            <WorkPagination page={page} setPage={this.setPage} />
            {this.state.alert.visible
                ? <Alert color={this.state.alert.type} isOpen={this.state.alert.visible} >
                    {this.state.alert.content}
                </Alert>
                : ""
            }

            {!this.state.add.visible
                ? <Button className="bt-add" variant="primary" onClick={this.showForm()} >
                Add Work
                </Button>
                : 
                <WorkAdd data={this.state.add} show={this.showForm} setValue={this.setValue} add={this.addWork} />
            }
      
        </div>
    }
}
