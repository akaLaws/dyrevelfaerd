import CardGallery from "../components/CardGallery";
import ColorContainer from "../components/ColorContainer";
import InputField from "../components/InputField";
import List from "../components/List";
import Button from "../components/Button";
import InputText from "../components/InputText";

const Adminpanel = () => {
    const animals = [
        {
            id: 0, 
            name : 'Wolfie McCuddles', 
            about: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis.', 
            img: 'https://images.pexels.com/photos/755447/pexels-photo-755447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
            days: 4
        },
        {
            id: 1, 
            name : 'Lord Baah', 
            about: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis.', 
            img: 'https://images.pexels.com/photos/755447/pexels-photo-755447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
            days: 4
        },
        {
            id: 2, 
            name : 'Three Doggyteers', 
            about: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis.', 
            img: 'https://images.pexels.com/photos/755447/pexels-photo-755447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
            days: 4
        },
    ];

   
    return (
        <ColorContainer color="white">
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
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400 font-light">{item.img}</p>
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400 font-light">Dage på internat: {item.days}</p>
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

                <List headline="Frivilligt arbejde" className="md:max-w-[48%]">
                <li>
                        <form className="flex flex-wrap gap-2 py-2">
                            <InputField label="Titel" type="text" id="volunteerTitle" />
                            <InputText label="Beskrivelse" id="volunteerContent" />
                            <InputText label="Extra besked" id="volunteerExtra" />
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

                <List headline="Banner billeder">
                     <li>
                        <form className="flex flex-wrap gap-2 py-2">
                            <InputField label="Titel" type="text" id="bannerTitle" />
                            <InputField label="Billede" type="file" id="bannerImg" />
                            <InputText label="Beskrivelse" id="bannerContent" />
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
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400 font-light">{item.img}</p>
                            <span className="text-blue-600 p-1">| SLET  | REDIGÉR |</span>
                        </li>
                    )}
                </List>
                <List headline="Kontakt Informationer" className="md:max-w-[48%]">
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
                </List>


            </CardGallery>
        </ColorContainer>

     );
}
 
export default Adminpanel;