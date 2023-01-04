
import { Outlet } from "react-router-dom";
import TopMenu from "../components/TopMenu";


const Landing = () => {
    const styleHeader = `
        w-full
        h-1/8
        flex
        place-content-around
        bg-white
        p-2
        fixed
    `;

    const styleFooter = `
        w-3/4
        mx-auto
        min-h-fit
        flex
        flex-wrap
        gap-6
        place-content-between
        p-2
        py-8
      
    `;

    const styleMain = `
        w-full
        flex
        flex-col
        mt-[5%]
    `;
    return ( 
        <>
            <header className={styleHeader}>
                <div className="flex gap-1">
                    <img src="https://raw.githubusercontent.com/rts-cmk/dyrevelfaerd-opgave/main/logo.png" alt="logo" className="h-12" />
                    <h1 className="self-center text-lg">Foreningen for Dyrevelfærd</h1>
                </div>
                
                <TopMenu />
            </header>
            <main className={styleMain}>
                
                <Outlet />
                
            </main>
            <footer className={styleFooter}>
                {/* Contacts */}
                <ul>
                    <li>KONTAKT</li>
                    <li className="font-light">Tornebuskvej 22, 1.</li>
                    <li className="font-light">1131 København K</li>
                    <li className="font-light">CVR: 22446187</li>
                    <li className="font-light">Husk at du kan få fradrag på donationer op til 16.00 kr.</li>
                </ul>
                <ul>
                    <li>PARTNERE</li>
                    <li className="font-light text-blue-600">ANIMA</li>
                    <li className="font-light text-blue-600">World Animal Protection</li>
                    <li className="font-light text-blue-600">Fødevarestyrelsen</li>
                    <li className="font-light text-blue-600">Faktalink</li>
                </ul>
                <p className="w-full text-center">&#169; Copyright 2020 - Foreningen For Dyrevelfærd</p>
            </footer>
        </>
     );
}
 
export default Landing;