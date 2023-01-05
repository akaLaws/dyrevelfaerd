import { Link } from "react-router-dom";

const TopMenu = () => {
    
    const styleUl = `
        gap-4
        text-gray-400
        md:place-items-center
        md:flex
        md:flex-row
    `;
    const visibilityMenu = `
        hidden
        md:flex
        md:flex-row
        md:gap-4
        z-10
    `;
    
    
    
    // still a little buggy in responsiveness and need small csss adjustment but This is saved for the final sweep-through

    const toggleMenu = (event) =>{
        event.preventDefault();

        const menu = document.querySelector('#menu');

        if(menu.classList.contains('hidden')){
            menu.classList.add('flex', 'flex-col','w-full', 'gap-2','absolute','mt-[5%]','bg-white','p-2','rounded-b-sm', 'md:static', 'md:mt-auto');
            menu.classList.remove('hidden');
        }
        else{
            menu.classList.add('hidden');
            menu.classList.remove('flex', 'flex-col','w-full', 'gap-2','absolute','mt-[5%]','bg-white','p-2','rounded-b-sm', 'md:static', 'md:mt-auto');
        }  
    };
   

    return ( 
        <nav className={styleUl}>
            <button id="toggle" className="md:hidden" onClick={toggleMenu}>MENU</button>

            <div className={visibilityMenu} id="menu">
                <Link reloadDocument to="/" className="hover:text-black">Hjem</Link>
                <Link reloadDocument to="/#about" className="hover:text-black">Om os</Link>
                <Link reloadDocument to="/#emergency" className="hover:text-black">Dyr i nød?</Link>
                <Link reloadDocument to="/#volunteer" className="hover:text-black">Bliv Frivillig</Link>
                <Link reloadDocument to="/#adopt" className="hover:text-black">Adoptér et dyr</Link>
            </div>
        </nav>
     );
}
 
export default TopMenu;