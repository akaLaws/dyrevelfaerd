import Headline from "./Headline";

const TextSection = (props) => {
    return ( 
        <section className="
            flex-auto 
            max-w-full
            w-60
            flex 
            flex-col 
            p-2
            gap-2
            
        ">
            
            <Headline text={props.headline} className="text-blue-900"/>
            <p>{props.text}</p>
           
        </section>
     );
}
 
export default TextSection;