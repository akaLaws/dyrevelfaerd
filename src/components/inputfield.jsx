const InputField = (props) => {
    return ( 
        <span className="
            flex 
            w-full
            md:max-w-[45%]
            gap-4
            place-items-center
            
        ">
            <label 
                for={props.id}
                className="w-fit flex-initial text-left"
            >{props.label}</label>
            <input 
                type={props.type}
                id={props.id}
                placeholder={props.label}
                className="
                    p-2
                    rounded
                    border
                    border-blue-200
                    flex-auto
                    place-self-stretch
                    font-light
                "

            />
        </span>
        
     );
}
 
export default InputField;