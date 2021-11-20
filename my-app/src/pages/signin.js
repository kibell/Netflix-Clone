import React, {useState, Fragment } from "react";
import Form from "../components/form";
import { FooterContainer } from "../containers/footer";
import {HeaderContainer} from "../containers/header"

export default function SignIn() {

const [emailAddress, setEmailAddress] = useState()
const [password, setPassword] = useState()
const [error, setError] = useState('');

//here we are going to check if the form inputs are valid
const isInValid = password === '' || emailAddress === '';
const handleSignIn = (event) => {

    event.preventDefault();



}

    return (

        <Fragment>
    <HeaderContainer>

        <Form>
            <Form.Title>Sign In</Form.Title>
            
            {error && <Form.Error> {error}</Form.Error>}

            <Form.Base onSubmit={handleSignIn} method ='POST'>
                <Form.Input 
                    placeholder ="Email Address"
                    value={emailAddress}
                    onChange={({ target }) => setEmailAddress(target.value)}
                    />
                
                <Form.Input 
                    placeholder ="Password"
                    type="password"
                    autoComplete="off"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    />

                    <Form.Submit disabled={isInValid} type='submit'>
                        Sign In
                    </Form.Submit>

            </Form.Base>

        </Form>
        </HeaderContainer> 
    
    <FooterContainer />
    </Fragment>
    )
}