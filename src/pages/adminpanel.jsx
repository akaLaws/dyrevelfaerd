import CardGallery from "../components/CardGallery";
import ColorContainer from "../components/ColorContainer";
import InputField from "../components/InputField";
import List from "../components/List";
import Button from "../components/Button";
import InputText from "../components/InputText";
import { useEffect, useState } from "react";
import axios from "axios";
import ErrorHandling from "../components/ErrorHandling";

const Adminpanel = () => {

    // Data variables
    const [aboutData,setAboutData] = useState();
    const [heroData,setHeroData] = useState();
    const [adoptData,setAdoptData] = useState();
    const [volunteerData,setVolunteerData] = useState();
    const [assetData,setAssetData] = useState();

    const [errors,setErrors] = useState([]);

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
            setErrors(true);
            console.log(error);
        });
    }
    useEffect(() =>  {
        getData();
    },[]);

   
    return (
        <ColorContainer color="white">
            {errors === true && <ErrorHandling content={errors} />}
            <CardGallery className="place-items-baseline gap-4">
                
                <List headline="Dyr på internatet">
                    <li>
                        <form className="flex flex-wrap gap-2 py-2">
                            <InputField label="Navn" type="text" id="animalName" />
                            <InputField label="Billede" type="file" id="animalImg" />
                            <InputField label="Alder" type="number" id="animalAge" />
                            <InputText label="Beskrivelse" id="animalDesribe" />
                            <Button text="Tilføj" />
                        </form>
                    </li>
                    
                    {adoptData && adoptData.map(item => 
                        <li
                            key={item.id} 
                            className="
                                flex
                                flex-wrap
                                gap-2
                                border-b
                                border-blue-900
                                place-content-between
                                p-2"
                        >
                            <p className="text-lg p-1">{item.name}</p>
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400 font-light">{item.description}</p>
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400 font-light">{assetData && assetData.filter(asset => asset.id === item.assetId).map((asset) => asset.url)}</p>
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400 font-light">Dage på internat: {item.age}</p>
                            <span className="text-blue-600 p-1">| SLET  | REDIGÉR |</span>
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
                            className="
                                flex
                                flex-wrap
                                gap-2
                                border-b
                                border-blue-900
                                place-content-between
                                p-2"
                        >
                            <p className="text-lg p-1">{item.title}</p>
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400 font-light">{item.content}</p>
                            <span className="text-blue-600 p-1">| SLET  | REDIGÉR |</span>
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
                            className="
                                flex
                                flex-wrap
                                gap-2
                                border-b
                                border-blue-900
                                place-content-between
                                p-2"
                        >
                            <p className="text-lg p-1">{item.title}</p>
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400 font-light">{item.content}</p>
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400 font-light">{assetData && assetData.filter(asset => asset.id === item.assetId).map((asset) => asset.url)}</p>
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400 font-light">{item.extra}</p>
                            <span className="text-blue-600 p-1">| SLET  | REDIGÉR |</span>
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
                            className="
                                flex
                                flex-wrap
                                gap-2
                                border-b
                                border-blue-900
                                place-content-between
                                p-2"
                        >
                            <p className="text-lg p-1">{item.title}</p>
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400 font-light">{item.content}</p>
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400 font-light">{assetData && assetData.filter(asset => asset.id === item.assetId).map((asset) => asset.url)}</p>
                            <span className="text-blue-600 p-1">| SLET  | REDIGÉR |</span>
                        </li>
                    )}
                </List>
                {/* <List headline="Kontakt Informationer" className="md:max-w-[48%]">
                <li>
                        <form className="flex flex-wrap gap-2 py-2">
                            <InputField label="adresse" type="text" id="adressStreet" />
                            <InputField label="zip" type="number" id="adressZip" />
                            <InputField label="by" type="text" id="adressCity" />
                            <InputField label="cvr" type="text" id="adressCvr" />
                            <Button text="Tilføj" />
                        </form>
                    </li>
                    {animals.map(item => 
                        <li
                            key={item.id} 
                            className="
                                flex
                                flex-wrap
                                gap-2
                                border-b
                                border-blue-900
                                place-content-between
                                p-2"
                        >
                            <p className="text-lg p-1">{item.name}</p>
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400 font-light">{item.about}</p>
                            <span className="text-blue-600 p-1">| SLET  | REDIGÉR |</span>
                        </li>
                    )}
                </List>
                <List headline="Partnere" className="md:max-w-[48%]">
                    <li>
                        <form className="flex flex-wrap gap-2 py-2">
                            <InputField label="Titel" type="text" id="partnerTitle" />
                            <InputField label="URL" type="url" id="partnerLink" />
                            <Button text="Tilføj" />
                        </form>
                    </li>
                    {animals.map(item => 
                        <li
                            key={item.id} 
                            className="
                                flex
                                flex-wrap
                                gap-2
                                border-b
                                border-blue-900
                                place-content-between
                                p-2"
                        >
                            <p className="text-lg p-1">{item.name}</p>
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400 font-light">{item.img}</p>
                            <span className="text-blue-600 p-1">| SLET  | REDIGÉR |</span>
                        </li>
                    )}
                </List> */}


            </CardGallery>
        </ColorContainer>

     );
}
 
export default Adminpanel;