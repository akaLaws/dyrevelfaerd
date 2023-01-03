const ColorContainer = (props) => {
    const style = `
    w-full
    bg-${props.color}
    `;

    return ( 
        <div className={style}>
            {props.children}
        </div>
     );
}
 
export default ColorContainer;