const Headline = (props) => {
    const style = `w-full text-xl ${props.className}`;
    return ( 
        <h2 className={style}>{props.text}</h2>
     );
}
 
export default Headline;