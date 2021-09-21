import React from 'react';
import { Route, Switch } from 'react-router-dom';
 
import myHome from './components/CountryDetails';
import myFuntion from './components/Country';
 
export default function Routes() {
 return (
   <Switch>
      <Route path="/" exact component={myHome} />
      <Route path="/cart" exact component={myFuntion} />
   </Switch>
 );
}