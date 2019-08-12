import React from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import Main from './components/Main/Main';
import Specific from './components/Specific/Specific';

import {Switch, Route} from 'react-router-dom';


class App extends React.Component {


  render(){
  return (
    <div className="container my-5">

      <SearchBar />


      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/:id' component={Specific} />

      </Switch>




    </div>
  );
  }
}

export default App;
