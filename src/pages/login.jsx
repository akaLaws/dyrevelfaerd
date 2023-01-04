import InputField from "../components/InputField";
import Button from "../components/Button";
import Message from "../components/Message";

import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const cookies = new Cookies();
    const navigate = useNavigate();

    const [loginUser, setLoginUser] = useState();
    const [loginPass, setLoginPass] = useState();
    const [message, setMessage] = useState({text:'', color:''});

    const loginAuth = (event) => {
        event.preventDefault();

        const endpoint = 'http://localhost:4000/auth/token';
        const body = {username: loginUser, password: loginPass};

        axios.post(endpoint, body)
        .then(response => {
            console.log(response)
             // Sets cookie to expire after an hour of login
            cookies.set('token', response.data.token, {path:'/', maxAge:3600});
            setMessage({text:'Du er looget ind', color:'green'});
        })
        .catch(error => {
            console.log(error);
            setMessage({text:'Forkert brugernavn/password', color:'red'});
            
        });

        document.querySelector('#user').value = '';
        document.querySelector('#password').value = '';
        
        navigate('/adminpanel');
    }
    return ( 
    <>
    <form className="
        w-full
        md:max-w-[50%]
        p-8
        bg-white
        flex
        flex-col
        place-items-center
        gap-2
        m-auto
        mt-16
    ">
        <InputField 
            type="text" 
            id="user" 
            label="Brugernavn" 
            action={(event) => setLoginUser(event.target.value)}
        />
        <InputField 
            type="password" 
            id="password" 
            label="Password" 
            action={(event) => setLoginPass(event.target.value)}
        />
        <Button 
            text="Login" 
            action={loginAuth}
        />
    </form>
    <Message text={message.text} color={message.color} />
    </>
    );
}
 
export default Login;