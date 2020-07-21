import React, { Component } from 'react';
import Navbar from './Layout/Navbar';
import Home from './Pages/home';
import Auth from './Pages/auth';
import AddMemo from './Pages/addMemo';

class App extends Component{
  render(){
    return(
      <div>
        <Navbar/>
        {/* <Home/> */}
        {/* <Auth/> */}
        <AddMemo/>
      </div>
    )
  }
}

export default App;