import React, { Fragment } from "react";
import jumboData from './fixtures/jumbo.json'

import Jumbotron from "./components/jumbotron";
import JumbotronContainer from "./containers/jumbotron";
import { FooterContainer } from "./containers/footer";

export default function app() {
  return(
  <>
  <JumbotronContainer />
           <FooterContainer/>
           
  </>
   ) }