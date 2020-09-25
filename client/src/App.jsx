import React from 'react';
import './App.css';
import Home from './screens/Home'
import Products from './screens/Products'
import ProductCreate from './screens/ProductCreate'
// import ProductEdit from './screens/ProductEdit'
// import ProductDetail from './screens/ProductDetail'
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
       <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/add" component={ProductCreate} /> 
        {/* <Route exact path="/products/:id/edit" component={ProductEdit} /> */}
        {/* <Route exact path="/products/:id" component={ProductDetail} /> */}
      </Switch>
    </div>
  );
}

export default App;
