import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import  Home  from './page/Home'
import  HomePresent  from './page/HomePresent'
import  Detail  from './page/Detail'
import  DetailPresent  from './page/DetailPresent'
import  HomeNew from './page/HomeNew'

function App() {
  return (
    <Router>
     <Switch>
       <Route component={Home} path='/' exact/>
       <Route component={HomePresent} path='/Home' />
       <Route component={Detail} path="/detail/:id" />
       <Route component={DetailPresent} path="/detailpresent/:id" />
       <Route component={HomeNew} path="/homenew" />
     </Switch>
   </Router>
  );
}

export default App;
