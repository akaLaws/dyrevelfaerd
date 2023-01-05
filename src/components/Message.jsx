const Message = (props) => {

    // only works with red??7
    const color = props.content.color;
    const textcolor = `text-${color}-700` ;
    const bgcolor = `bg-${color}-700` ;
    const bordercolor = color ? `border-${color}-700` : `border-transparent`;
    const text = props.content.text;
    return ( 
        <p className={`
            ${props.className}
            ${textcolor}
            border
            ${bordercolor}
            rounded-sm
            ${bgcolor}
            w-full
            mx-auto
            my-2
            p-4
        `}>
            {text}
        </p>
     );
}
 
export default Message;