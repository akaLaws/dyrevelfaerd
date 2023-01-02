import TopMenu from "../components/TopMenu";


const Landing = () => {
    const styleHeader = `
        w-full
        h-1/6
        flex
        place-content-around
        bg-white
        p-2
    `;

const styleFooter = `
        w-full
        min-h-fit
        flex
        flex-wrap
        gap-6
        place-content-around
        p-2
        mt-auto
        
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
            <main>
                
            </main>
            <footer className={styleFooter}>
                {/* Contacts */}
                <ul>
                    <li>KONTAKT</li>
                    <li>Tornebuskvej 22, 1.</li>
                    <li>1131 København K</li>
                    <li>CVR: 22446187</li>
                    <li>Husk at du kan få fradrag på donationer op til 16.00 kr.</li>
                </ul>
                <ul>
                    <li>PARTNERE</li>
                    <li>ANIMA</li>
                    <li>World Animal Protection</li>
                    <li>Fødevarestyrelsen</li>
                    <li>Faktalink</li>
                </ul>
                <p className="w-full text-center">&#169; Copyright 2020 - Foreningen For Dyrevelfærd</p>
            </footer>
        </>
     );
}
 
export default Landing;