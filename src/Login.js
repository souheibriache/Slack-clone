import React from 'react'
import {Button } from '@material-ui/core'
import {auth , provider} from './firebase';
import './Login.css'
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';
function Login() {
    const [user , dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type : actionTypes.SET_USER ,
                user : result.user
            })
        }).
        catch(err => {alert(err.message)});
    }

    return (
        <div className ="login" >
            <div className="login__container" >
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-970-80.jpg.webp" alt="" >
                </img>

                <h1>Sign up to slack clone</h1>
                <p>slack.clone.com</p>
                <Button onClick={signIn} >Sign in with google</Button>
            </div>
        </div>
    )
}

export default Login
