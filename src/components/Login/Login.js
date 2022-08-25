import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css'

const Login = () => {
    const { SignInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>please login</h2>
            <button onClick={SignInWithGoogle} className='googleSignIn'>Google Sign In</button>
            <br />
            <input type="email" name="" placeholder='your email' />
            <br />
            <input type="password" name="" placeholder='your password ' />
            <br />
            <input type="submit" value="Login" />
        </div>
    );
};

export default Login;