const Message = (props) => {
    return ( 
        <p className={`
            ${props.className}
            text-${props.color}-800
            border
            border-${props.color}-800
            rounded-sm
            bg-${props.color}-200
            w-full
            mx-auto
            my-2
        `}>
            {props.text}
        </p>
     );
}
 
export default Message;