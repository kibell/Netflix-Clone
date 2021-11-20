import React from "react";
import JumbotronContainer from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import {HeaderContainer} from "../containers/header"
import { OptForm, Feature } from "../components";
export default function Home(){
return (

    <>
    <HeaderContainer>
        <Feature>
            <Feature.Title>Unlimited films, TV programs and more.</Feature.Title>
            <Feature.SubTitle>Watch anywhere. Cancel at anytime</Feature.SubTitle>
        

    <OptForm>
    <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try it Now</OptForm.Button>
            <OptForm.Text>
            Ready to watch? Enter your email to create or restart your membership
            </OptForm.Text>

    </OptForm>
    </Feature>
    </HeaderContainer>
      <JumbotronContainer />
       <FaqsContainer/>
       <FooterContainer/>
    
    </>
)


}