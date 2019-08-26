import React from 'react'

import Card from '../Card/Card';

class FilteredList extends React.Component{

    state = {
        orders: [],
        worker: '',
    }


    componentDidMount(){

        const id = this.props.match.params.id;
        
        const filteredWorkers = this.props.workers.filter(worker => worker.id === Number(id));
        // console.log(filteredWorkers);
        const orders = this.props.orders.filter(order => order.workerId === Number(id));
        // console.log(orders);
        this.setState({
            orders: orders,
            worker: filteredWorkers[0]
        })
    }
    
    render(){

        return (
            <div className="d-flex flex-wrap">
                {this.state.orders && this.state.orders.map((order, i) => {
                    return <Card key={i} order={order} worker={this.state.worker} />
                 })}
            </div>
        )
    }
}

export default FilteredList
