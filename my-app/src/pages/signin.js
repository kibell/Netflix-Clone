import React, {useState, Fragment, useContext } from "react";
import Form from "../components/form";
import {FirebaseContext} from '../context/firebase'
import { FooterContainer } from "../containers/footer";
import {HeaderContainer} from "../containers/header"
import * as ROUTES from '../constants/routes'

export default function SignIn() {
const { firebase } = useContext(FirebaseContext)

const [emailAddress, setEmailAddress] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('');

//here we are going to check if the form inputs are valid
const isInValid = password === '' || emailAddress === '';
const handleSignIn = (event) => {
    event.preventDefault();

//firebase 

firebase.auth()
    .signInWithEmailAndPassword(emailAddress, password)
    .then(() =>{
        //if the sign in is sucessfull then we want to push them to another page


    })
    .catch((error) => {
        setEmailAddress('')
        setPassword('')
        setError(error.message);
    })

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
                    //type password will mask the password
                    type="password"
                    autoComplete="off"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    />

                    <Form.Submit disabled={isInValid} type='submit'>
                        Sign In
                    </Form.Submit>

            </Form.Base>

            <Form.Text>
                New to Netflix? <Form.Link to="/signup">Sign up Now.</Form.Link>
            </Form.Text>

            <Form.TextSmall>
                This page is protected by Google reCAPTCHA
            </Form.TextSmall> 

        </Form>
        </HeaderContainer> 
    
    <FooterContainer />
    </Fragment>
    )
}