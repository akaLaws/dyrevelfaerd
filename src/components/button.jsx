const Button = (props) => {
    return ( 
        <button 
            name={props.name}
            onClick={props.action}
            className="
                bg-blue-500
                p-2
                rounded
                hover:bg-blue-900
                text-white
                w-fit
                h-fit
                place-self-end
            "
            type="button"
        >
            {props.text}
        </button>
     );
}
 
export default Button;