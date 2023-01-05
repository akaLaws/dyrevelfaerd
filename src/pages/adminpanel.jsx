import CardGallery from "../components/CardGallery";
import ColorContainer from "../components/ColorContainer";
import InputField from "../components/InputField";
import List from "../components/List";
import Button from "../components/Button";
import InputText from "../components/InputText";

import AdoptForm from "../components/AdoptForm";
import AboutForm from "../components/AboutForm";
import VolunteerForm from "../components/VolunteerForm";
import HeroForm from "../components/HeroForm";



import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';


const Adminpanel = () => {

    // Styling of the displayed elements from the database
    const rowDisplayStyle = `
        flex
        flex-wrap
        gap-2
        border-b
        border-blue-900
        place-content-between
        p-2"`;

    const colDisplayStyle = `
        border 
        border-gray-200 
        rounded-sm p-1 
        text-gray-400 
        font-light
    `;

    const titleDisplayStyle = `
        text-lg 
        p-1
    `;

    const editDisplayStyle = `
        text-blue-600 
        p-1
        flex
        gap-2
    `;
    
    // Auth Data for the headers
    const cookies = new Cookies();
    const token = cookies.get('token');
    

    // Data variables
    const [aboutData,setAboutData] = useState();
    const [heroData,setHeroData] = useState();
    const [adoptData,setAdoptData] = useState();
    const [volunteerData,setVolunteerData] = useState();
    const [assetData,setAssetData] = useState();


    // Using promise.all to fetch multiple responses as almost all the database is needed for the landingpage.
    // NOTE : As of July 15, 2020, Axios updated its GitHub README file to reflect that the axios.all helper method has been deprecated and should be replaced with Promise.all.
    
    const getData = () =>{
        
        const endpoints = [
            'http://localhost:4000/api/v1/abouts', 
            'http://localhost:4000/api/v1/adoptsections', 
            'http://localhost:4000/api/v1/animals', 
            'http://localhost:4000/api/v1/volunteers', 
            'http://localhost:4000/api/v1/assets', 
        ];
        
        // If one fail, all fails... 
        // it might make more sense to modulate the architecture by seperating each table to it's own component hens breaking up this get.
        // This will be on the list of refactor-todos
        Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then(([
            {data: about}, 
            {data: hero}, 
            {data: adopt}, 
            {data: volunteer},
            {data: asset}
        ] )=> {
            setAboutData(about);
            setHeroData(hero);
            setAdoptData(adopt);
            setVolunteerData(volunteer);
            setAssetData(asset);
        })
        .catch(error =>{
            console.log(error);
        });
    }
    useEffect(() =>  {
        getData();
    },[]);

    
    // Delete entries from the database - these could be put in a component or function instead of being copy pasted..
    // NOTE: The image will NOT be deleted from the Database as it might be af dependency of other entries. 
    // ...also there isn't a delete function for the assets in the backend so I should add this as well
    // But this is not a priority as this is a frontend assignment 🤷‍♀️

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

    const deleteAbout = (event) =>{
        event.preventDefault();

        const id = event.target.getAttribute('name');
        const endpoint = `http://localhost:4000/api/v1/abouts/${id}`;
        const localHeader = {headers: {
            'Authorization': `Bearer ${token}`
        }};

        console.log(id, endpoint, localHeader);

        axios.delete(endpoint, localHeader)
        .then(() => alert('Om os sektionen er fjernet fra databasen'))
        .catch(error => console.log(error));

    }

    const deleteVolunteer = (event) =>{
        event.preventDefault();

        const id = event.target.getAttribute('name');
        const endpoint = `http://localhost:4000/api/v1/volunteers/${id}`;
        const localHeader = {headers: {
            'Authorization': `Bearer ${token}`
        }};

        console.log(id, endpoint, localHeader);

        axios.delete(endpoint, localHeader)
        .then(() => alert('Om os sektionen er fjernet fra databasen'))
        .catch(error => console.log(error));

    }

    const deleteHero = (event) =>{
        event.preventDefault();

        const id = event.target.getAttribute('name');
        const endpoint = `http://localhost:4000/api/v1/adoptsections/${id}`;
        const localHeader = {headers: {
            'Authorization': `Bearer ${token}`
        }};

        console.log(id, endpoint, localHeader);

        axios.delete(endpoint, localHeader)
        .then(() => alert('Om os sektionen er fjernet fra databasen'))
        .catch(error => console.log(error));

    }
    

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


    return (
        <ColorContainer color="white">
            
            <CardGallery className="place-items-baseline gap-4">
                
                <List headline="Dyr på internatet">
                    <li>
                    <AdoptForm />
                    </li>
                    
                    {adoptData && adoptData.map(item => 
                        <li
                            key={item.id} 
                            className={rowDisplayStyle}
                        >
                            <p className={titleDisplayStyle}>{item.name}</p>
                            <p className={colDisplayStyle}>{item.description}</p>
                            <p className={colDisplayStyle}>{assetData && assetData.filter(asset => asset.id === item.assetId).map((asset) => asset.url)}</p>
                            <p className={colDisplayStyle}>Dage på internat: {item.age}</p>
                            <span className={editDisplayStyle}>
                                <Button name={item.id} text="Slet" action={deleteAdopt} />
                                <Button name={`adoptEditForm${item.id}`} text="Rediger" action={showEditForm} />
                            </span> 
                            <div 
                                id={`adoptEditForm${item.id}`}
                                className="hidden p-4 border-2 border-blue-600 border-2 border-blue-600"
                            >
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

                <List headline="Om os" className="md:max-w-[48%]">
                <li>
                        <form className="flex flex-wrap gap-2 py-2">
                            <InputField label="Navn" type="text" id="aboutTitle" />
                            <InputText label="Beskrivelse" id="aboutContent" />
                            <Button text="Tilføj" />
                        </form>
                    </li>
                    {aboutData && aboutData.map(item => 
                        <li
                            key={item.id} 
                            className={rowDisplayStyle}
                        >
                            <p className={titleDisplayStyle}>{item.title}</p>
                            <p className={rowDisplayStyle}>{item.content}</p>
                            <span className={editDisplayStyle}>
                                <Button name={item.id} text="Slet" action={deleteAbout} />
                                <Button name={`aboutEditForm${item.id}`} text="Rediger" action={showEditForm} />
                            </span> 
                            <div 
                                id={`aboutEditForm${item.id}`}
                                className="hidden p-4 border-2 border-blue-600 border-2 border-blue-600"
                            >
                                <AboutForm 
                                    title={item.name} 
                                    content={item.content}
                                    editId={item.id}
                                />

                            </div>
                        </li>
                    )}
                </List>

                <List headline="Frivilligt arbejde" className="md:max-w-[48%]">
                <li>
                        <form className="flex flex-wrap gap-2 py-2">
                            <InputField label="Titel" type="text" id="volunteerTitle" />
                            <InputText label="Beskrivelse" id="volunteerContent" />
                            <InputText label="Extra besked" id="volunteerExtra" />
                            <Button text="Tilføj" />
                        </form>
                    </li>
                    {volunteerData && volunteerData.map(item => 
                        <li
                            key={item.id} 
                            className={rowDisplayStyle}
                        >
                            <p className={titleDisplayStyle}>{item.title}</p>
                            <p className={colDisplayStyle}>{item.content}</p>
                            <p className={colDisplayStyle}>{assetData && assetData.filter(asset => asset.id === item.assetId).map((asset) => asset.url)}</p>
                            <p className={colDisplayStyle}>{item.extra}</p>
                            <span className={editDisplayStyle}>
                                <Button name={item.id} text="Slet" action={deleteVolunteer} />
                                <Button name={`volunteerEditForm${item.id}`} text="Rediger" action={showEditForm} />
                            </span> 
                            <div 
                                id={`volunteerEditForm${item.id}`}
                                className="hidden p-4 border-2 border-blue-600 border-2 border-blue-600"
                            >
                                <VolunteerForm 
                                    title={item.title} 
                                    file={assetData && assetData.filter(asset => asset.id === item.assetId).map((asset) => asset.url)}
                                    content={item.content}
                                    extra={item.extra}
                                    editId={item.id}
                                />

                            </div>
                        </li>
                    )}
                </List>

                <List headline="Banner billeder">
                     <li>
                        <form className="flex flex-wrap gap-2 py-2">
                            <InputField label="Titel" type="text" id="bannerTitle" />
                            <InputField label="Billede" type="file" id="bannerImg" />
                            <InputText label="Beskrivelse" id="bannerContent" />
                            <Button text="Tilføj" />
                        </form>
                    </li>
                    {heroData && heroData.map(item => 
                        <li
                            key={item.id} 
                            className={rowDisplayStyle}
                        >
                            <p className={titleDisplayStyle}>{item.title}</p>
                            <p className={colDisplayStyle}>{item.content}</p>
                            <p className={colDisplayStyle}>{assetData && assetData.filter(asset => asset.id === item.assetId).map((asset) => asset.url)}</p>
                            <span className={editDisplayStyle}>
                                <Button name={item.id} text="Slet" action={deleteHero} />
                                <Button name={`heroEditForm${item.id}`} text="Rediger" action={showEditForm} />
                            </span> 
                            <div 
                                id={`heroEditForm${item.id}`}
                                className="hidden p-4 border-2 border-blue-600 border-2 border-blue-600"
                            >
                                <HeroForm 
                                    title={item.title} 
                                    file={assetData && assetData.filter(asset => asset.id === item.assetId).map((asset) => asset.url)}
                                    content={item.content}
                                    editId={item.id}
                                />

                            </div>
                        </li>
                    )}
                </List>


            </CardGallery>
        </ColorContainer>

     );
}
 
export default Adminpanel;