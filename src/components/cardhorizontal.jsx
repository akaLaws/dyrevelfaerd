import { Link } from "react-router-dom";

const CardHorizontal = (props) => {
    return ( 
        <section className="
            w-full
            md:max-w-[45%]
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
                {/* This link is a little clumsy - I'd rather it was the whole card but the takes som CSS adjustments and I'm in hurry for now */}
                <Link to={`/detail/${props.linkId}`} >
                    <h3 className="text-lg hover:text-blue-600">
                        {props.headline}
                    </h3>
                </Link>
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