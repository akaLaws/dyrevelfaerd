const CardHorizontal = (props) => {
    return ( 
        <section className="
            w-full
            md:max-w-[48%]
            flex-auto
            grid
            grid-rows-1
            grid-cols-2
            gap-4
            border
            border-gray-400
        ">
            <img 
                src={props.img} 
                alt={props.alt} 
                className="
                    min-h-full
                    grid-start-1
                    row-start-1
                    object-cover
                "
            />
            <div className="
                col-start-2 
                row-start-1
                flex
                flex-col
                place-content-between
                py-8"
            > 
                <h3 className="text-lg">
                    {props.headline}
                </h3>
                <p className="font-light mb-4">
                    {props.text}
                </p>
                <p className="text-gray-400 font-light">
                    Været på internatet i {props.days} dage
                </p>
            </div>
            

        </section>
     );
}
 
export default CardHorizontal;