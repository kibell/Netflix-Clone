import React, { Fragment } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {HOME, BROWSE, SIGN_IN, SIGN_UP} from './pages'
import * as ROUTES from './constants/routes'


export default function app() {
  return(
  <>
    <Router>
     
      <Route exact path="/">
     <HOME></HOME>
       </Route>
       
       <Route exact path ='/BROWSE'>
         <BROWSE></BROWSE>
       </Route>

       <Route exact path ='/SIGN_UP'>
         <SIGN_UP></SIGN_UP>
       </Route>

       <Route exact path ='/SIGN_IN'>
         <SIGN_IN></SIGN_IN>
       </Route>
    </Router>     
  </>
   ) }