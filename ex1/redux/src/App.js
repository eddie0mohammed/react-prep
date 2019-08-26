import React from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import Sorting from './components/Sorting/Sorting';
import AllCards from './components/AllCards/AllCards';
import SpecificCards from './components/SpecificCards/SpecificCards';

import {Switch, Route} from 'react-router-dom';


class App extends React.Component {


  render(){

    return (
        <div className="App">
        
          <SearchBar />
          <Sorting />



          <Switch>
            <Route exact path="/" component={AllCards} />
            <Route exact path="/:id" component={SpecificCards} />
          </Switch>




        </div>
    );
  }
}

export default App;
