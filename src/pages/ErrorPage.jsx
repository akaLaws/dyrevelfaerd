import Button from "../components/Button"
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return ( 
        <div className="
            flex
            flex-col
            place-items-center
            gap-8
            
        ">
            <h2 className="
                text-5xl
                text-white
                text-center
                mt-8
            ">
                Ups.. Vi kunne ikke finde siden du ledte efter
            </h2> 
            <Link to={`/`}>
                <Button text="Vend tilbage til websiden" />
            </Link>
        </div>
    );
}
 
export default ErrorPage;