import Headline from "./Headline";

const List = (props) => {
    const style = `
        w-full
        text-xs
        ${props.className}
        `;
    return ( 
        <ul className={style}>
            <li className="
                bg-blue-900
                p-4
            ">
                <Headline className="text-white" text={props.headline} />
            </li>
            
            {props.children}
           
        </ul>
     );
}
 
export default List;