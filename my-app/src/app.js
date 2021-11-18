import React, { Fragment } from "react";
import jumboData from './fixtures/jumbo.json'

import Jumbotron from "./components/jumbotron";
import JumbotronContainer from "./containers/jumbotron";
import { FooterContainer } from "./containers/footer";
import { FaqsContainer } from "./containers/faqs";

export default function app() {
  return(
  <>
  <JumbotronContainer />
  <FaqsContainer/>
  <FooterContainer/>
           
  </>
   ) }