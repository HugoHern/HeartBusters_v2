import React, {useEffect} from 'react'
import '../App.css'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';


export const Login = () => {

    const SECRET_KEY = process.env.REACT_APP_CLIENT_ID ;

    const onSuccess = (response) => {
        console.log('Sucess!', response);
    };

    const onFailure = (error) => {
        console.log('Failed!', error);
    };

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                client_id: SECRET_KEY,
                scope: ''
            })
        }

        gapi.load('client:auth2', initClient);
     })

  return (
    <GoogleLogin
    clientId={SECRET_KEY}
    buttonText="Sign in with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
/>
  )
}
