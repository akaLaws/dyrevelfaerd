
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
        z-20
        shadow-md
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
        mt-[3%]
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
                    <li className="font-bold">KONTAKT</li>
                    <li className="font-light">Tornebuskvej 22, 1.</li>
                    <li className="font-light">1131 København K</li>
                    <li className="font-light">CVR: 22446187</li>
                    <li className="font-light">Husk at du kan få fradrag på donationer op til 16.00 kr.</li>
                </ul>
                <ul>
                    <li className="font-bold">PARTNERE</li>
                    <li className="text-sky-700">ANIMA</li>
                    <li className="text-sky-700">World Animal Protection</li>
                    <li className="text-sky-700">Fødevarestyrelsen</li>
                    <li className="text-sky-700">Faktalink</li>
                </ul>
                <p className="w-full text-center">&#169; Copyright 2020 - Foreningen For Dyrevelfærd</p>
            </footer>
        </>
     );
}
 
export default Landing;