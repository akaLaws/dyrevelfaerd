import InputField from "../components/InputField";
import Button from "../components/Button";

const Login = () => {
    return ( 
    <form className="
        w-full
        md:w-1/3
        p-8
        bg-white
        flex
        flex-col
        place-items-between
        gap-2
        m-auto
        mt-8
    ">
        <InputField type="text" id="user" label="Brugernavn" />
        <InputField type="password" id="password" label="Password" />
        <Button text="Login" />
    </form>
    
    );
}
 
export default Login;