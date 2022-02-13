import React, {component} from 'react';
import { Form, Select, Button } from 'react-bootstrap';

export default class WorkAdd extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const show = this.props.show;
        const data = this.props.data;
        const add = this.props.add;
        console.log("ABC: "+ JSON.stringify(data));
        const setValue = this.props.setValue;
        return <div>
            <h2>Add Work</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" value={data.name} onChange={setValue} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Start date</Form.Label>
                    <Form.Control name='startDate' type="datetime-local" placeholder="Start date" value={data.startDate} onChange={setValue} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>End date</Form.Label>
                    <Form.Control name='endDate' type="datetime-local" placeholder="End date" value={data.endtDate} onChange={setValue} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Status</Form.Label>
                    <Form.Select name='status' aria-label="Default select example"  value={data.status} onChange={setValue}>
                        <option value="1" >Planning</option>
                        <option value="2" >Doing</option>
                        <option value="3" >Complete</option>
                    </Form.Select>
                </Form.Group>
                
                <Button variant="primary" type="button" onClick={show()}>
                    Cansle
                </Button>
                <Button variant="primary" type="button" onClick={add()}>
                    Submit
                </Button>
            </Form>
        </div>
    }

    
}