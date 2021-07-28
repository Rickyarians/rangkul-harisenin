import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import  Home  from './page/Home'
import  Detail  from './page/Detail'


function App() {
  return (
    <Router>
     <Switch>
       <Route component={Home} path='/' exact/>
       <Route component={Detail} path="/detail/:id" />
     </Switch>
   </Router>
  );
}

export default App;
