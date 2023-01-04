const ErrorHandling = (props) => {
    return ( 
        <section className="
            w-full
            md:max-w-[75%]
            mx-auto
            my-4
            p-4
            bg-red-200
            border
            border-red-800
            rounded-sm
            text-red-900
            text-md
            text-center
        ">
            <h3>
                Oops.. Ser ud til at vi ikke kan finde dataen - vi arbejder på sagen
            </h3>
            <p className="text-xs font-light">Fejlen er: {props.content}</p>
        </section>
        
     );
}
 
export default ErrorHandling;