const CardGallery = (props) => {
    const style = `
        flex
        flex-wrap
        gap-2
        w-full
        md:max-w-[75%]
        mx-auto
        place-content-between
        place-items-start
        py-8
        px-2
        ${props.className}
    `;
    return ( 
        <div className={style}>
            {props.children}
        </div>
     );
}
 
export default CardGallery;