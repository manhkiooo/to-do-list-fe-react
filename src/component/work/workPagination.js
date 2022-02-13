import React, {component} from 'react';
import { Pagination } from 'react-bootstrap';

export default class WorkPagination extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        var page = this.props.page;
        var setPage = this.props.setPage;
        let active = page.page;
        let items = [];
        for (let number = 1; number <= page.totalPage; number++) {
            items.push(
            <Pagination.Item key={number} active={number === active} onClick={setPage(number)}>
                {number}
            </Pagination.Item>,
            );
        }
        
        const paginationBasic = (
            <div>
                <Pagination>{items}</Pagination>
            <br />
            </div>
        );

        return paginationBasic;
    }

    
}