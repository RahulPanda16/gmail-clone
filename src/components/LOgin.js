import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import { auth, provider } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

function Login() {
    const dispatch = useDispatch()
    const signin = () =>{
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
        })
        .catch(err => alert(err.message))
    }

  return (
    <div className='login'>
        <div className="login__container">
            <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt="" />
            <Button variant='contained' color='primary' onClick={signin}>Login</Button>
        </div>
    </div>
  )
}

export default Login