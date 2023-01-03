const InputField = (props) => {
    return ( 
        <div className="
            flex 
            
            w-full
            md:max-w-[45%]
            gap-2 
            place-items-center
            
        ">
            <label 
                for={props.id}
                className="w-10 flex-auto"
            >{props.label}</label>
            <input 
                type={props.type}
                id={props.id}
                placeholder={props.label}
                className="
                    p-2
                    rounded
                    
                    flex-auto
                    
                "

            />
        </div>
        
     );
}
 
export default InputField;