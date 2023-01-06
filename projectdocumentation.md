# Foreningen for Dyrevelfærd
*Af: Sarah-Elizabeth Laws*

Link til deb ændrede backend: `https://github.com/akaLaws/dyrevelfaerd-api`

Link til lokal hosting af sitet: `http://localhost:3000/`

Link til login: `http://localhost:3000/login`

```
Brugernavn: admin
Kode: 1234
```



## Teknologien
Projektet er udført som en Singlepage Application (SPA) med [React.js](https://reactjs.org/) biblioteket. Valget af react er baseret i at det er dette bibliotek der primært undervises i på Roskilde Tekniske Skole og derfor reflektere de nødvendige kompetencer for at kunne undervise i det givent pensum. Alternative teknologier til udførsel kunne bl.a. have været [Vue.js](https://vuejs.org/) eller [Svelte](https://svelte.dev/).

App'en oplever noget lack på performance der kunne gøre det interessant at teste [Svelte](https://svelte.dev/) eller endda [Vue petite](https://github.com/vuejs/petite-vue) give app'ens begrænsede størrelse.

Der er brugt [Tailwind](https://tailwindcss.com/) som utility framework til CSS'en. Valget er baseret på tilgengæligheden og fleksibilitieten i den direkte inline tilgang til stylingen. Hvorom at jeg perosnligt foretrækker en mere semantisk komponent tilgang til CSS er det svært ikke at benægte fordelne ved [Tailwind](https://tailwindcss.com/). Givet den generelle modulære arkitektoniske tilgang til [React.js](https://reactjs.org/) så er inline stylingen ikke for overvældende gjort korrekt.

**Tilføjelserne**
En kærlig tanke skal sendes til [npm](https://www.npmjs.com/) der gør det muligt at installere pakker som bibllioteker der kan lette arbejdet med udviklingen lidt. Dem som jeg har brugt i dette projekt er følgende:

* [React Router 6.4](https://reactrouter.com/en/main) - Bibliotek til navigationen gennem react applikationen
* [Create React app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) - Toolchain til at sætte React miljøet op hurtigt og nemt
* [React Cookie](https://www.npmjs.com/package/react-cookie) - Bibliotek til håntering af cookies i react
* [Axios](https://axios-http.com/) - Promise baseret HTTP Client for browseren der håndtere kald til backend API'et 
* [Tailwind](https://tailwindcss.com/) - CSS Utility framework til at style komponenterne
* [Tailwind Elements](https://tailwind-elements.com/) - UI komponent bibliotk i taiilwind for færdig styling og funktionalitet af nogle elementer herunder slideren

Valget af pakker er baseret til dels på erfaringer og anbefalinger. Nogle har jeg arbejdet med før og er derfor oplagte at bruge i et tidspresset projekt. Om disse initielt var først på googles resultat liste eller anbefalinger fra andre. Enkelte tilføjelser har jeg først arbejdet med i dette projekt på baggrund af anbefalinger og søgninger, huender [Axios](https://axios-http.com/) og [Tailwind Elements](https://tailwind-elements.com/).

### Tredjeparts kode
Den eneste koierede tredjepartskode er for [Carousel slideren](https://tailwind-elements.com/docs/standard/components/carousel/) som er et komponent i [Tailwind Elements](https://tailwind-elements.com/). Årsagen til brug af tredjepart kompnenet i dette tilfælde falder på at asiminilationen man ser i design for web baseret på erfaringer i UX giver muligheden for brugen af UI biblioteker da UI komponenter netop går igen på tværs af designs. Dette betyder at udvikleren kan bruge mindre tid på implementering af design og i stedet fokusere på funktionaliteten af et site. Medmindre man er ansat direkte som UX ingeniør eller UI udvikler vil man enten skulle sidde med API integration eller generel JavaScript til udvikling af bestemte features. Det er derfor en fordel at kunne spare tid ved anvendelsen af et UI komponents bibliotek. 

Havde jeg selv skulle levere esignet for opgaven vil jeg i større grad have gjort brug af eksisterende UI kompnenter til formålet netop for at spare tid. 

Implementering af koden kan ses i [HeroSlider.jsx komponentet](src/components/HeroSlider.jsx).

## Design valg 
I opgaven bliver der lagt op til frit design af hhv. slideren til landingpage, login siden og administrationspanelet for indholdsredigeren. 

### Slideren
Valget på løsningen af slideren er baseret signmæssigt ud fra det færdige [Carousel slider](https://tailwind-elements.com/docs/standard/components/carousel/) komponent fra [Tailwind Elements](https://tailwind-elements.com/). Den er placeret i bunden af siden da dette giver en mere harmonisk æstestik i kontekst af de eksisterende Hero billeder med tekst. At den er placeret i bunden af listen med dyr til adoption gør det oplagt at lade den slide mellem billeder fra databasen af disse. Dette er dog ikke sat op endnu givet prioriteringen af andre features. 

### Login
Login siden viderefører designet fra resten af sitet med en simpel form box med hvis baggrund. Da denne kun er ment som adgang til redigering af indhold på siden er der ikke gjort mere ud af stylingen iht. evt. grafik samt der heller ikke er mulighed for login med ekstern authentication, da igen det er administrativt login. 

Når man er logget ind gemmes input felterne for at blive erstattet med en melding om at man er logget ind med link videre til administrationspanelet. Denne kunne også blive løst med en direkte omdirigering af login siden til administrationspanelet.  

### Administrationspanelet
Adminpanelet består af en simpel liste der hhv. indeholder overskrift på sektionen, formular for nye tilføjelser, eksisterende indhold fra databasen samt en formular for redigering af disse som enten kan skjules eller vises ved behov. 

Det enkelte indhold fra databasen er udskrevet i bokse med gråd skrift og kant for at seperere dem og gøre det mindre visuelt overvældende for brugeren. Idealt havde jeg tilføjet ikoner og labels til at forbedre UX iht at kunne overskue disse. En mulihed kunne ogs være at indsætte dem direkte i en inaktiv form som vil blive aktiveret ved at klikke på rediger knappen. Jeg holdte dog implementering minimalistisk og desværre lidt klodset for at prioritere kodningen af funktonaliteten.

Det klarer jobbet men det er ikke ideal UX og med mere tid ville denne side også se meget anderledes ud. 

Igen er designet holdt til at stemme overens med det eksisterende design herunder UI kompnenter som knapper og inputfelter. Liste designet er nyt med udgangspunkt i en mørk baggrund for den hvide overskirft for netop tydeligt at adskille komponenterne for bedre overblik til trods for den misforståede minimalisme i designets udførsel. 

### Responsiveness
Med primære breakpoint i tailwinds `md:` hvilket svare til `768px` og enkelte elementer med breakpoint i `sm:` svarende til `640px` er sitet fuldt responsive. Dette er bl.a. primært løst med CSS flexbox. Dette er blot rent omstændigt da der ikke var mange komponenter der behøvede grid. Det kunne dog være oplagt at implementere grid i et redesign af administrationspanelet. 

Menuen i mindre format kan trænge til noget optimering ved at tildels minimere logoet til kun at indeholde grafikken og ikke teksten. Derudover vil jer gerne erstatte `'MENU'` teksten med et ikon. 

### Småjusteringer
Der er tilføjet en `drop-shadow` til menuen for at illustrere overgangen mellem denne og indholdet da den er sat til at være `fixed` når der scrolles.

Derudover er der tilføjet at parallax scroll effekt på hero billederne da det giver følelsen af en mere interaktiv overgang mellem disse og ikke mindst skaber en fastholdelse af interesse hos brugeren gennem bevægelse. 

Jeg havde gerne tilføjet flere microtransitions på diverse elementer men det ligger langt ude for et minimal viable product (MVP) scope.

## Kode til bedømmelse
Til specifikt bedømmelse vil jeg hive fat i de komponenenter som adminpanelet er bygget op over. På denne side er der træffet nogle specifikke valg for bedre eller værre og ikke mindst har der været nogle interessante udfordringer herunder med backenden som krævede at jeg tilføjede ændringer til denne for at kunne løse opgaven. Ikke mindst er der en gæsteoptræden af vores alles favorit "RegEx". 

Alt i alt tilbyder adminpanelets kompenenter en god repræsentation af sites funktionalitet i helhed. 

### AdoptForm
Hvert komponent består af en liste `<List />` der indeholder oprettelsesform og redigeringsform `<AdoptForm />` samt dataen skrevet ud i `<p></p>` tags. Derudover er der to knapper der henholdvis viser redigeringsformen ved hjælp af `sjowEditForm` funktionen eller sletter indholdet fra databasen ved hjælp af `deleteAdopt` funktionen. 

```JSX
// List komponentet laver en unordered list som indenholder en fast styling for denne samt tager listens overskrift som prop
// Adoptform indeholder formularen til hhv redigering og oprettelse af elementer til databasen.
// da input krav variere er der lavet et komponent per tabel (borste fra asset)
<List headline="Dyr på internatet">
    <li>
    <AdoptForm />
    </li>
    
    {/*Indholdet fra databasen hentes med en promiseall funktion længere oppe i dokumentet og gemmes i adoptData og asseData (dem der skal bruges her)
     Disse mappes ud med fælles opsætning*/}
    {adoptData && adoptData.map(item => 
        <li
            key={item.id} 
            className={rowDisplayStyle}
        >
            <p className={titleDisplayStyle}>{item.name}</p>
            <p className={colDisplayStyle}>{item.description}</p>

            {/* Da billedet er gemt som en krydsreference til asset tabellen bliver asset data filtreret for at kunne finde den tilsvarende URL
            til det angivne asset id i animals tabellen */}
            <p className={colDisplayStyle}>{assetData && assetData.filter(asset => asset.id === item.assetId).map((asset) => asset.url)}</p>
            <p className={colDisplayStyle}>Dage på internat: {item.age}</p>
            <span className={editDisplayStyle}>

                {/* Knappen kalder en funktion der sletter dataen fra databasen*/}
                <Button name={item.id} text="Slet" action={deleteAdopt} />

                {/* Knappens navn bliver brugt i funktionen til at identificere elementet der henholdsvis skal vises eller skjules
                Knappens tekst vil også ændre sig under visningen af redigeringsformularen til at være et kryds for at lukke den igen*/}
                <Button name={`adoptEditForm${item.id}`} text="Rediger" action={showEditForm} />
            </span> 
            <div 
                id={`adoptEditForm${item.id}`}
                className="hidden p-4 border-2 border-blue-600 border-2 border-blue-600"
            >
                {/* I redigeringsformularen bliver dataen tilføjet som props da disse skal være faste værdier i formularen formularen */}
                <AdoptForm 
                    name={item.name} 
                    file={assetData && assetData.filter(asset => asset.id === item.assetId).map((asset) => asset.url)}
                    age={item.age}
                    description={item.description}
                    editId={item.id}
                />

            </div>
        </li>
    )}
    
</List>
```

For at gå mere i dybden med funktionaliteten kan vi starte med at se på de funktioner der findes lokalt i [adminpanel.jsx](src/pages/Adminpanel.jsx). Herunder `deleteAdopt` og `showEditForm`.

```JavaScript

// Funktionen sletter dataen i animals tabellen i databasen. Id for dataen der skal slettes er viderført fra name på knap komponentet
// Der gives en alert da elementet er slettet og der derfor ikke kan udskrives en besked til denne. Dette kan sagtens gøres mere elegant
// forbedringen vuderedes da uden for MVP scope

// NOTE: Denne funktion sletter IKKE billedet. Der var ikke en indbygget endpoint for at slette assets.
// Jeg tænker at dette er for at undgå evt. kryds dependencies. Dog er der en fare for at oversvømme databasen med ghost billeder. 
// JEg tilføjede ikke en slet funktion til backenden da dette ligger ude for scope af en frontend opgave. 

const deleteAdopt = (event) =>{
        event.preventDefault();

        const id = event.target.getAttribute('name');
        const endpoint = `http://localhost:4000/api/v1/animals/${id}`;
        const localHeader = {headers: {
            'Authorization': `Bearer ${token}`
        }};

        console.log(id, endpoint, localHeader);

        axios.delete(endpoint, localHeader)
        .then(() => alert('Dyret er fjernet fra databasen'))
        .catch(error => console.log(error));

    }

// Denne funktion hhv fjerne og tilføjer classes for at toggle visningen ad redigeringsformularen 

const showEditForm = (event) =>{
        event.preventDefault();

        const formName = event.target.getAttribute('name');
        const hiddenForm = document.querySelector(`#${formName}`);

        if(hiddenForm.classList.contains('hidden')){
            hiddenForm.classList.remove('hidden');
            hiddenForm.classList.add('flex','flex-col');
            event.target.innerHTML = 'X';
        }
        else{
            hiddenForm.classList.remove('flex','flex-col');
            hiddenForm.classList.add('hidden');
            event.target.innerHTML = 'Rediger';
        }
    }

```

Inde i selve [AdoptForm.jsx](src/components/AdoptForm.jsx) komponentet ligger formularen  men også oprettelses og redigerings funktionerne for denne samt valideringen.

```JSX

// Formularen sætter værdien af input felterne til at være lig med states for disse som i retur er defienret ud fra props. 
// De er tomme ved oprettelses kaldet og udfyldt af eksisterende data ved redigeringskaldet. 
// Deruover opdateres state ved ændring af værdien på feltet. Knappen kalder valideringsfunktionen

return ( 
    <>
    <form className="flex flex-wrap gap-2 py-2">
    <InputField 
        label="Navn" 
        type="text" 
        id="animalName"
        value={adoptName} 
        action={(event) => setAdoptName(event.target.value)}/>
    <InputField 
        label="Billede" 
        type="file" 
        id="animalImg" 
        action={(event) => setAdoptImg(event.target.files[0])}/>

        {/* Hvis der findes en props.file så hvis billedet så man kan se det allerede findes iht redigerings formularen */}
        {props.file && <img src={props.file} alt={props.name} />}
    <InputField 
        label="Alder" 
        type="number" 
        id="animalAge" 
        value={adoptAge} 
        action={(event) => setAdoptAge(event.target.value)}/>
    <InputText 
        label="Beskrivelse" 
        id="animalDescribe" 
        value={adoptDescribe} 
        action={(event) => setAdoptDescribe(event.target.value)}/>
    <Button 
        text={props.editId ? 'Rediger' : 'Tilføj'}
        action={validateForm} />
</form>
<Message content={adoptMsg} />
</>
    );     
```

Validerings funktionen `validateForm` er blot udviklet ud fra den simpleste all-around regex og kunne sagtens forbedres i sin kompleksitet. Ved dette ville jeg dog vælge at bruge en pakke til formålet som f.eks. [React Hook Form](https://react-hook-form.com/). Grunden til dette ikke er gjort er fordi jeg ikke havde tiden til at sætte mig ind i dokumnetationen af disse. 

```JavaScript

// Valideringsfunktionen tager udgangspunkt i en regex sætning og tester input felterne ud fra disse. Her er der taget udgangspunkt i tekst fleterne 
// da number feltet kommer med en indbygget begrænsning herunder også fil input. Disse kunne med fordel blive ydeligere valideret i en komplex løsning.

const validateForm = (event) => {
    event.preventDefault();

    console.log(adoptName, adoptDescribe,adoptAge)

    // Der opstod nogle prblemer med valideringen af textarea der muligvis kunne løses ved at inkludere \s i regex.
    // ES lint brokkede sig dog over dette og jeg havde ikke tiden til at få sat mig ind i dette. Jeg tænker dog løsningen nok er simpel. 
    const validInputRegex = new RegExp('^[-a-zA-Z0-9!@&()`.,/"\']{3,1500}$');

    !validInputRegex.test(adoptName) && setAdoptMsg({text:'Navn er ugyldigt', color:'red'});
    !validInputRegex.test(adoptDescribe) && setAdoptMsg({text:'Beskrivelse er ugyldigt', color:'red'});

    if(validInputRegex.test(adoptName) && validInputRegex.test(adoptDescribe) ){
        setAdoptMsg({text:'Loading..', color:'blue'});

        // Alt efter om der er sat et data id i props vil valideringen eksekvere enten en redigering eller oprettelses funktion
        props.editId && props.editId !== '' ? editAdopt() : newAdopt();
    }
}

```

Oprettelses og redigeringsfunktionerne ligner hinanden med forskel af brugen af put/post.

```JavaScript

// Her hentes token fra cookies til brug af authentification. Det variere over koden om der skal bruges cookies[0].token eller cookies.token
// for at hente dataen. Jeg ved ikke om dette er en bug i react-cookie eller hos mig. 
// Det er dog implmenteret ud fra hvad der virkede så vær forberedt på variationer 

const cookies = useCookies(['token']);
const token = cookies[0].token;

// header er for det meste ens og er sat tila t have en variabel contentType da det er en generel funtkion der brude smides ud i et component.
// Bemærk at i modsætningen til API dokumentationen er content type sat til multiform he da jeg har lavet en ændring i backenden.
// Ændringen gør det muligt at post/put billeder sammen med resten af dataen til animals tabellen 
const header = (contentType) => {
    return {headers: {
        'Content-Type': contentType,
        'Authorization': `Bearer ${token}`
    }};
}

// States til at holde dataen der skal sendes til databasen sættes til tomme hvis der ikke er nogle props defineret
const [adoptName, setAdoptName] = useState(props.name || '');
const [adoptImg, setAdoptImg] = useState(props.file || ''); 
const [adoptAge, setAdoptAge] = useState(props.age || '');
const [adoptDescribe, setAdoptDescribe] = useState(props.description || '');

const [adoptMsg, setAdoptMsg] = useState({});


// Opretter en ny data række i animals tabellen.
// Bemærk at file er tilføjet i body denne bliver overført til assets tabellen og sender en krydsreference på id'et til animals tabellen
const newAdopt = () => {

    const endpoint = `http://localhost:4000/api/v1/animals`;
    const body = {
        name: adoptName,
        description: adoptDescribe,
        age: adoptAge,
        file: adoptImg
    };
    

    axios.post(endpoint, body, header('multipart/form-data', token))
    .then(response =>{
        console.log(response);
        setAdoptMsg({text:'Det nye dyr er tilføjet',color:'green'});
    })
    .catch(error => {
        console.log(error);
        setAdoptMsg({text:'Noget gik galt', color:'red'});
    });

    // Nulstiller formularen - mest for UX så man får fornemmelsen af at dataen er sendt afsted rent fysisk
    setAdoptName('');
    setAdoptImg('');
    setAdoptAge('');
    setAdoptDescribe('');
    document.querySelector('#animalImg').value= '';
}

// Redigerings funktionen afviger ikke meget bortset fra at vi ikke vil nulstille tabellen her
const editAdopt = () =>{

    const endpoint = `http://localhost:4000/api/v1/animals/${props.editId}`;
    const body = {
        name: adoptName,
        description: adoptDescribe,
        age: adoptAge,
        file: adoptImg
    };
    

    axios.put(endpoint, body, header('multipart/form-data', token))
    .then(response =>{
        console.log(response);
        setAdoptMsg({text:'Dyret er opdateret',color:'green'});
    })
    .catch(error => {
        console.log(error);
        setAdoptMsg({text:'Noget gik galt', color:'red'});
    });

}

```

Som udgangspunkt var det ikke muligt at oprette blledet sammen med resten af dataen for de tabeller der bruger billeder. Dette virkede som at kunne blive et potentielt kringlet UI at skulle sætte op i frontenden. Jeg tillod mig derfor at tilføje en ændring i backenden for hhv. oprettelse og redigering i controllerne der tilføjer billedet før dataen og sender id'et med til data oprettelsen.

```JavaScript

async function createSingleAnimal(req, res, next) {
	try {

		// -----------------------------------------------------
        // Disse snippets er blevet tilføjet til create og update på hhv. animalcontroler.js, adoptsection.controller.js og volunteer.controller.js i backenden for at tilføje billed fil til asset ved oprettelse og redigering af data til de respektive tabeller.
        
        var saveFile = require("../services/asset");

        // -----------------------------------------------------
        
		const file = req.files.file
		let asset
		if (file) {
			let file = saveFile(req.files.file);
			asset = await Asset.create({
				url: "http://localhost:4000/file-bucket/" + file
			});
		}

        // -----------------------------------------------------

		let animal = await Animal.create({
			name: req.fields.name,
			description: req.fields.description,
			age: req.fields.age,

            // -----------------------------------------------------
			assetId: file ? asset.dataValues.id : req.fields.assetId
            // -----------------------------------------------------
		});
		res.json(animal);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}


```

## Egen vurdering
Processen gik forholdsvist som forventet. Tidsplanen blev overholdt og de opgaver der ligger tilbage på [kanban boardet](https://github.com/users/akaLaws/projects/2/views/1) er ikke en del af kravspecifikationen eller den originale plan men derimod opgaver jeg ville kigge på hvis der blev tid. Som udgangspunkt er der blevet arbejdet over i løbet af ugen men ikke til et punkt at jeg følte at deadlinen var presset eller jeg ikke kunne tillade mig en pause. 

De bugs og fejl der opstod kunne nemt løses ved et par sessioner med pairprogramming og rubberducking og var ofte en forudsigelig overseelse. Bl.a. havde jeg glemt at opdatere oprettelsesformularene i [adminpanel.jsx](src/pages/Adminpanel.jsx) med de nye komponenter jeg havde lavet for dem, til trods for at have lavet en mental note. Dette var dog forventelige typer fejl.

Jeg vil gerne have arbejdet mere moduleret fra start ved at starte med at hente indholdet fra databasen imens jeg oprettede designet. At starte med et statisk MVP er logisk men jeg vurderede at det kunne klares inde for deadline at inkludere det dynamiske i min MVP. Det vil have sparet meig lidt tid. 

PRojektarbejdet blev også afbrudt af møder på arbejdet som tilføjede noget overarbejde. Som udgangspunkt arbejde jeg dog effektivt hjemmefra for at mindske chancrne for disse. 

I forhold til designet vil jeg gerne have gjort en del anderledes. Jeg vil foreslå et alternativ card design for kunden for at modernisere designet. Foruden at tilføje nogle call to actions og bryde teksen mere op i nogle af tilfældende. Derudover mangler der information om HVORDAN man adoptere et dyr. I forhold til at formålet er markedsføring så ligger designet ikke op til handling fra kundens side. Jeg ville tilføje en accent farve der kunne bryde den blå. Alternativt ville jeg overveje et andet farveskema igen med fokus på at skabe handling. 

Jeg vil gerne have forbedre UI på adminpanelet. Herunder koplapset dataen så visningen kunne blige togglet ligesom med redigeringsformularen. Derskulle desuden som minimum tilføøjes beskrivelser og ikoner på elementerne der blev vist. Evt. kunne visningen ske i cards der emulerer visningen for brugeren. 

Derudover ville jeg ideelt gerne have implementeret et bibliotek til valideringen af formularene.

Jeg vil også gerne have gjort slideeren dynamisk og leget lidt med placeringen af billederne i slider containeren eller støørelsen af denne. Evt. vil jeg placere denne i toppen frem for hero billedet og inkludere tekst i denne samt en call to action. 

Der er desuden mange andre elementer jeg gerne vil have finpudset og justeret på. 

Mit største ønske havde jeg mere tid ville være at kunen refactor min kode. Den trænger desperat til et clean sweep. Der er flere elementer herunder delete funktionerne som kunne med forsel smides ud i komponenter. Der er semantik eller mangel på samme der kan krølle tæer foruden der kun er skænket en begrænset tanke til accesability. Sitet fungere som et MVP men det er langt fra et færdigt produkt og vil kun aflevere det til kunden som en midlertidig løsning mens jeg fik styr på det sidste. Dog ville det nok ikke tage mere end max en arbejdsuge inkl. buffer tid. 

... når ja.. og så ville jeg selvfølgelig gerne have den deployed.

Overordnet set er jeg tilfreds. Siden opfylder kravene og den fungere. Jeg nåede mine mål og overholdt min tidsplan og jeg er ikke stresset.
