const CardVertical = (props) => {
    return ( 
        <section className="
            flex-auto 
            w-full
            md:max-w-[30%]
            bg-gray-100 
            border-gray-400 
            border
            flex 
            flex-col 
            text-gray-600
            place-self-stretch
        ">
            <h3 className="
                w-full 
                p-2
            ">
                {props.headline}
            </h3>
            <div className="
                bg-white 
                border-gray-400
                border-y
                p-2
                font-light
            ">
                <img src={props.img} alt={props.alt} className="w-full object-contain" />
                <p className="my-4">{props.text}</p>
            </div>
            <p className="
                italic 
                p-2 
                font-light
            ">
                {props.msg}
            </p>
        </section>
     );
}
 
export default CardVertical;