const InputField = (props) => {
    return ( 
        <div className="
            flex 
            w-full
            md:max-w-[45%]
            gap-4
            place-items-center
            
        ">
            <label 
                for={props.id}
                className="min-w-[40%] flex-auto text-right"
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
                "

            />
        </div>
        
     );
}
 
export default InputField;