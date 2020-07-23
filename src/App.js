import React, { Component } from 'react';
import Navbar from './Layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/home';
import Auth from './Pages/auth';
import AddMemo from './Pages/addMemo';
import Content from './Pages/content';


class App extends Component{
  render(){
    return(
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/amnet" component={Home}/>
          <Route path="/amnet/add" component={AddMemo}/>
          <Route path="/amnet/auth" component={Auth}/>
          <Route path="/amnet/main" component={Content}/>
        </Switch>
      </Router>
    )
  }
}

export default App;