import React, { Component } from 'react';
import Navbar from './Layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/home';
import Auth from './Pages/auth';
import AddMemo from './Pages/addMemo';

class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Navbar/>
          <Route path="/" component={Home}/>
          <Route path="/add" component={AddMemo}/>
          <Route path="/auth" component={Auth}/>
        </Switch>
      </Router>
    )
  }
}

export default App;