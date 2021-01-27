import React, { useState } from "react";

const LoginForm = (props) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const handleUserChange = (e) => {
        setUser(e.target.value);
    }
    const handlePwChange = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //TODO API POST request as form data is submitted
        // const userLogin = user;
        // const pwdLogin = password;
        props.setLogin(true);
        setUser("");
        setPassword("");

    }
    //     setPics is from state [pic, setPics]
    //     Then pass down addPic={ addPic } as prop to parent component after e.preventDefault()
    // const addPic = (newPic) => {
    //     
    //     setPics(items => [...items, { newPic }])
    // }

    return (
        <form onSubmit={ handleSubmit } >
            <label htmlFor="user" >Username</label>
            <input 
                className="form-control form-control-lg"
                type="text" 
                onChange={ handleUserChange } 
                id="user" 
                value={ user } 
            />
            <label htmlFor="password" >Password</label>
            <input 
                className="form-control form-control-lg"
                type="password" 
                onChange={ handlePwChange } 
                id="password" 
                value={ password } 
             />
            <button 
                class="btn btn-lg btn-block" 
            >
            Sign In</button>
        </form>
    )
}

export default LoginForm;