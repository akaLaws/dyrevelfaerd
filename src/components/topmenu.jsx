const TopMenu = () => {
const styleUl = `
    flex
    gap-4
    text-gray-400
    place-items-center
`;

    return ( 
        <nav className={styleUl}>
            <a href="#home" className="hover:text-black" >Hjem</a>
            <a href="#about" className="hover:text-black" >Om os</a>
            <a href="#animals" className="hover:text-black" >Dyr i nød?</a>
            <a href="#volunteer" className="hover:text-black" >Bliv Frivillig</a>
            <a href="#adopt" className="hover:text-black" >Adoptér et dyr</a>
        </nav>
     );
}
 
export default TopMenu;