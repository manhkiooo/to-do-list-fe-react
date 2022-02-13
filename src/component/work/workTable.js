import React, {component} from 'react';
import { Form, Select } from 'react-bootstrap';
import icon from './down.svg';

export default class WorkTable extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const data = this.props.data;
        const fc = this.props.fc;
        const update = this.props.update;
        const sort = this.props.sort;
        const setSort = this.props.setSort
        console.log("Data: "+ JSON.stringify(data));
        return <div>
            <table>
                <thead>
                    <tr>
                        <th onClick={setSort("id")}>ID {sort == "id"
                            ? <img src={icon} width={22} />
                            : ""
                        }</th>
                        <th onClick={setSort("name")}>Name{sort == "name"
                            ? <img src={icon} width={22} />
                            : ""
                        }</th>
                        <th onClick={setSort("startDate")}>Strat Date{sort == "startDate"
                            ? <img src={icon} width={22} />
                            : ""
                        }</th>
                        <th onClick={setSort("endDate")}>End Date{sort == "endDate"
                            ? <img src={icon} width={22} />
                            : ""
                        }</th>
                        <th onClick={setSort("status")}>Status{sort == "status"
                            ? <img src={icon} width={22} />
                            : ""
                        }</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((u)=>{
                        return <TrBody work={u} fc={fc} update={update} />
                        }) }
                </tbody>
            </table>
        </div>
    }

    
}
function TrBody(props){
    console.log("Data2: "+ JSON.stringify(props));

    return <tr>
        <td>{props.work.id}</td>
        <td>{props.work.workName}</td>
        <td>{props.work.startDate}</td>
        <td>{props.work.endDate}</td>
        <td>
            <Form.Select aria-label="Default select example" onChange={props.update(props.work.id, props.work.workName, props.work.startDate, props.work.endDate)} >
                <option value="1" selected= {props.work.status == 1 ? true : false }>Planning</option>
                <option value="2" selected= {props.work.status == 2 ? true : false } >Doing</option>
                <option value="3" selected= {props.work.status == 3 ? true : false }>Complete</option>
            </Form.Select>
        </td>
        <td>
            <button className="bt-delete" onClick={props.fc(props.work.id)}>Remove</button>
        </td>
    </tr>
}