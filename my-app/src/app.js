import React, { Fragment } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import JumbotronContainer from "./containers/jumbotron";
import { FooterContainer } from "./containers/footer";
import { FaqsContainer } from "./containers/faqs";
import * as ROUTES from './constants/routes'


export default function app() {
  return(
  <>
    <Router>
     
      <Route exact path="/">
       <JumbotronContainer />
       <FaqsContainer/>
       <FooterContainer/>
       </Route>
       
    </Router>     
  </>
   ) }