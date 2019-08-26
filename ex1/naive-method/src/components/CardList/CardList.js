import React from 'react'

import Card from '../Card/Card';

class CardList extends React.Component{

 
    render(){

        return (
            <div className="d-flex flex-wrap">

                {this.props.workers && this.props.orders.map((order, i) => {
                    const workerId = order.workerId;
                    const worker = this.props.workers.filter(worker => worker.id === workerId)[0];
                    
                    return <Card key={i} order={order} worker={worker}/>
                })}
                
            </div>
        )
    }
}

export default CardList
