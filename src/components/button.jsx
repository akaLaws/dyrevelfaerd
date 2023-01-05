const Button = (props) => {
    return ( 
        <button 
            name={props.name}
            onClick={props.action}
            className="
                bg-sky-600
                p-2
                rounded
                hover:bg-sky-800
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