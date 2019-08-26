import React from 'react';
import axios from 'axios';


import SearchBar from './components/SearchBar/SearchBar';
import Filters from './components/Filters/Filters';
import CardList from './components/CardList/CardList';
import FilteredList from './components/FilteredList/FilteredList';

import Button from 'react-bootstrap/Button';


import {Switch, Route} from 'react-router-dom';


class App extends React.Component{
    state = {
      orders: [],
      workers: []
  }

  async componentDidMount(){
      const res_orders = await axios.get('https://www.hatchways.io/api/assessment/work_orders');
      const orders = res_orders.data.orders;

      const allWorkers = [];

      orders.forEach(order => {
          if (!allWorkers.includes(order.workerId)){
              allWorkers.push(order.workerId)
          }
      });

      const worker_array = [];
      for (let i = 0; i < allWorkers.length; i++){
          const res_worker = await axios.get(`https://www.hatchways.io/api/assessment/workers/${allWorkers[i]}`);
          const worker_info = res_worker.data.worker;
          worker_array.push(worker_info);
          
      }
    
      this.setState({
          orders: orders,
          workers: worker_array
      })

      // console.log(orders);
      // console.log(allWorkers);
      // console.log(worker_array);
      // console.log(this.state);
      // console.log(this.state.workers);
  }

  ascending = () => {
    const orders = this.state.orders;
    // console.log(orders);
    orders.sort((a,b) => a.deadline - b.deadline);
    
    this.setState({
      orders: orders
    })
    console.log('ascending');
  }

  descending = () => {
    const orders = this.state.orders;
    orders.sort((a,b) => b.deadline - a.deadline);
    
    this.setState({
      orders: orders
    })
    console.log('descending');

  }

  render(){

    return (
      <div className="App">
        
        <SearchBar />
        {/* <Filters /> */}
        <div className="container d-flex justify-content-center">
          
          <Button className="btn-md btn-primary mx-5" onClick={this.ascending}>Earliest first</Button>
          <Button className="btn-md btn-primary mx-5" onClick={this.descending}>Latest first</Button>
        
        </div>


        <Switch>
          <Route exact path='/' render={(props) => (<CardList {...props} orders={this.state.orders} workers={this.state.workers}/>)} />
          <Route exact path="/:id" render={(props) => (<FilteredList {...props} orders={this.state.orders} workers={this.state.workers} />)} />
        </Switch>
        

      </div>
    );
  }
}

export default App;
