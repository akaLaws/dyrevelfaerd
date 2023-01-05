import InputField from "../components/InputField";
import Button from "../components/Button";
import Message from "../components/Message";

import {  useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
   

    const [cookies,setCookies] = useCookies(['token']);
    const navigate = useNavigate();


    const [loginUser, setLoginUser] = useState();
    const [loginPass, setLoginPass] = useState();
    const [message, setMessage] = useState([]);

    const  postToken = async() => {
        const endpoint = 'http://localhost:4000/auth/token';
        const body = {username: loginUser, password: loginPass};

        const response = await axios.post(endpoint, body);
        console.log(response);
        setCookies('token', response.data.token, {path:'/', maxAge:3600});
        navigate('/adminpanel', {replace:true})

       
    }

    const loginAuth = (event) => {
        event.preventDefault();

        const validInputRegex = new RegExp('^[A-Za-z0-9]{3,20}$');

        !validInputRegex.test(loginUser) && setMessage([...message, ' - brugernavn er ugyldigt']);
        !validInputRegex.test(loginPass) && setMessage([...message, ' - password er ugyldigt']);
        
        if(validInputRegex.test(loginUser) && validInputRegex.test(loginPass)){
            setMessage('Loading..');
            postToken();
        }
            
    }
     
        
    return (
        
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
            {cookies && <p>DU ER LOGGET IND <Link to="/adminpanel" className="text-blue-600 hover:text-blue-900">GÅ TIL ADMINPANEL</Link></p>}
            
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
            <Message content={message} color='blue' />
            <p>{message}</p>
        </form>
    
    )
        
}
 
export default Login;