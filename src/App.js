
import React from 'react'
import './App.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Home from './Component/Home';
import Profile from './Component/Profile';
import ProductList from './Component/ProductList';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom';
import AddProduct from './Component/AddProduct';
import AddEnquiry from './Component/AddEnquiry';

function App() {
  return (
  <Router >
 <Header/>
 <div className="container">
<Sidebar/>
<Switch>
  <Route exact path="/">
  <Home/>
  </Route>
  <Route path="/Profile">
  <Profile/>
  </Route>
  <Route path="/ProductList">
   <ProductList/>
  </Route>
  <Route path="/AddProduct">
   <AddProduct/>
  </Route>
  <Route path="/AddEnquiry">
   <AddEnquiry/>
  </Route>
</Switch>
   
   

 </div>
 

  </Router>
    
   
  );
}

export default App;
