import React from 'react'

import Selection from '../Selection/Selection';
import Card from '../Card/Card';

import {connect} from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';

import {configure} from '../../utils/utils';

class Main extends React.Component {


  async componentDidMount(){
    //fetch all work orders
    await this.props.fetchAllOrders();

    let userArr = configure(this.props.app.allOrders.orders);
    // console.log(userArr);

    //fetch all worker records
    await this.props.fetchWorker(userArr);

    // console.log(this.props.app)
    
  }


  render(){
  // console.log(this.props.app.allOrders);
  // console.log(this.props.employees);
    return (
        <div>
          <Selection />

          <div className="container my-5 bg-primary d-flex flex-wrap">
            {
              this.props.app.allOrders ? 
              this.props.app.allOrders.orders.map((order, i) => {
                // const currentEmployee = this.props.employees && this.props.employees.map(elem => elem);
                // console.log(currentEmployee);

                return <Card key={i} order={order.name} description={order.description} deadline={order.deadline} 
                          workerId={order.workerId} employees={this.props.employees} />
              })
              :
              <div>Loading</div>
            }
            {/* <Card/> */}
              
              
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
    employees: state.app.allEmployees
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllOrders: () => dispatch(actionCreators.fetch_all_orders()),
    fetchWorker: (usersArr) => dispatch(actionCreators.fetch_all_workers(usersArr))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
