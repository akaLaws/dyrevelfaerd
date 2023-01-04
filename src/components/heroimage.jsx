const HeroImage = (props) => {
    const customStyle = {
        'backgroundImage': `url(${props.img})`
    };
    return ( 
        <div 
            className="
                w-full 
                h-80
                bg-center 
                bg-cover 
                bg-fixed
                flex 
                place-items-center 
                place-content-center
                p-4
                text-white
                
                " 
            style={customStyle}>
            <section className="w-3/4">
                <h2 className="
                    text-3xl
                    uppercase
                    pb-4
                    drop-shadow-lg
                ">
                    {props.headline}
                </h2>
                <p className="
                    text-lg
                    drop-shadow-lg
                    font-light
                ">
                    {props.text}
                </p>
            </section>
        </div>
     );
}
 
export default HeroImage;