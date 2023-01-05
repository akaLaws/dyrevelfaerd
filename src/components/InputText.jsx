const InputText = (props) => {
    return (  
        <span className="
            flex 
            flex-col
            w-full
            
            gap-4
            place-items-center
            
        ">
            <label 
                htmlFor={props.id}
                className="w-full flex-auto text-left"
            >{props.label}</label>
            <textarea 
                id={props.id}
                placeholder={props.label}
                value={props.value}
                onChange={props.action}
                className="
                    p-2
                    rounded
                    border
                    border-blue-200
                    flex-auto
                    w-full
                    font-light
                "
            ></textarea>
        </span>
    );
}
 
export default InputText;