import React from 'react'
import Card from '../Card/Card';
import Button from 'react-bootstrap/Button';

import {connect} from 'react-redux';


class Specific extends React.Component {

    // componentDidMount(){
    //     // console.log(this.props.id);
       
    //     console.log(specificOrders);
        
    
    // }

    render(){
        const specificEmployees = this.props.employees.filter(employee => employee.id === Number(this.props.id));
        
        const specificOrders = this.props.allOrders.orders.filter(order => order.workerId === Number(this.props.id));

        return (
            <div>
                <div className="container my-5 bg-primary">
                    {
                        specificOrders.map((order, i) => {
                            return <Card key={i} order={order.name} description={order.description} deadline={order.deadline} 
                            workerId={order.workerId} employees={specificEmployees} />
                        })
                    }            
                </div>

                <Button className="primary" onClick={() => this.props.history.push('/')}>Back</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.app.id,
        allOrders: state.app.allOrders,
        employees: state.app.allEmployees
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Specific)
