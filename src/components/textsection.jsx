import Headline from "./Headline";

const TextSection = (props) => {
    return ( 
        <section className={`
            md:max-w-[30%]
            w-full
            flex 
            flex-col 
            p-2
            gap-2
            flex-auto
            ${props.className}
            `}>
            
            <Headline text={props.headline} className="text-blue-900"/>
            <p className="font-light">{props.text}</p>
           
        </section>
     );
}
 
export default TextSection;