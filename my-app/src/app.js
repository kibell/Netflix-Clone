import React, { Fragment } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {HOME, BROWSE, SIGN_IN, SIGN_UP} from './pages'
import * as ROUTES from './constants/routes'


export default function app() {
  return(
  <>
    <Router>
     
      <Route exact path="/">
     <HOME/>
       </Route>
       
       <Route exact path ='/browse'>
         <BROWSE/>
       </Route>

       <Route exact path ='/signup'>
         <SIGN_UP/>
       </Route>

       <Route exact path ='/signin'>
         <SIGN_IN/>
       </Route>
    </Router>     
  </>
   ) }