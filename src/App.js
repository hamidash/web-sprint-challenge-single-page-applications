import React from "react";
import Home from './components/Home';
import PizzaForm from './components/Form';
import {Route, Switch} from 'react-router-dom';
import './App.css';

const App = () => {
  return (

    <div className="App">
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path ="/pizza">
          <PizzaForm/>
        </Route>
      </Switch>
    </div>  
   
  );
};
export default App;
