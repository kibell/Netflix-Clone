import React, {useState, Fragment, useContext } from "react";
import Form from "../components/form";
import {FirebaseContext} from '../context/firebase'
import { FooterContainer } from "../containers/footer";
import {HeaderContainer} from "../containers/header"
import * as ROUTES from '../constants/routes'
//this allows us to push to different pages on an action
import { useHistory } from "react-router-dom";


export default function SignIn() {

    const history = useHistory();   
    const { firebase } = useContext(FirebaseContext)

    const [firstName, setFirstName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');


    const isInValid = firstName==='' || password === '' || emailAddress === '' ;
    const handleSignUp = (event) => {
        event.preventDefault();
    
    //firebase 
    
    firebase.auth()
        .createUserWithEmailAndPassword(emailAddress, password)
        .then((result) =>{
            result.user
            .updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5) +1,

            })
            .then(() => {
                history.push(ROUTES.BROWSE);
                 
            })
           
        })
        .catch((error) => {
            setFirstName('')
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

        <Form.Base onSubmit={handleSignUp} method ='POST'>
           <Form.Input 
           placeholder="First Name"
           value ={firstName}
           onChange={({ target }) => setFirstName(target.value)}
           />
           
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
                    Sign Up
                </Form.Submit>

        </Form.Base>

        <Form.Text>
            Already a User? <Form.Link to="/signin">Sign In Now.</Form.Link>
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

