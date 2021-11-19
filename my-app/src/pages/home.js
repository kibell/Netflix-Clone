import React from "react";
import JumbotronContainer from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import {HeaderContainer} from "../containers/header"
import { Header } from "../components/accordian/styles/accordian";

export default function Home(){
return (

    <>
    <HeaderContainer>
      <JumbotronContainer />
       <FaqsContainer/>
       <FooterContainer/>
     </HeaderContainer>
    </>
)


}