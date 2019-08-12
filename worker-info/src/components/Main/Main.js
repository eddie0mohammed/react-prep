import React from 'react'

import Selection from '../Selection/Selection';
import Card from '../Card/Card';

import {connect} from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';

class Main extends React.Component {


  componentDidMount(){
    //fetch all work orders
    this.props.fetchAllOrders();

  }


  render(){
  console.log(this.props.app);
    return (
        <div>
          <Selection />

          <div className="container my-5 bg-primary d-flex flex-wrap">

              <Card />
              <Card />
              <Card />
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllOrders: () => dispatch(actionCreators.fetch_all_orders()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
