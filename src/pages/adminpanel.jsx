import CardGallery from "../components/CardGallery";
import ColorContainer from "../components/ColorContainer";
import List from "../components/List";

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
    ]
    
    return (
        <ColorContainer color="white">
            <CardGallery className="place-items-baseline gap-4">
                
                <List headline="Dyr på internatet">
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
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400">{item.about}</p>
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400">{item.img}</p>
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400">Dage på internat: {item.days}</p>
                            <span className="text-blue-600 p-1">| SLET  | REDIGÉR |</span>
                        </li>
                    )}
                </List>

                <List headline="Om os" className="md:max-w-[48%]">
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
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400">{item.about}</p>
                            <span className="text-blue-600 p-1">| SLET  | REDIGÉR |</span>
                        </li>
                    )}
                </List>

                <List headline="Frivilligt arbejde" className="md:max-w-[48%]">
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
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400">{item.about}</p>
                            <span className="text-blue-600 p-1">| SLET  | REDIGÉR |</span>
                        </li>
                    )}
                </List>

                <List headline="Banner billeder">
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
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400">{item.about}</p>
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400">{item.img}</p>
                            <span className="text-blue-600 p-1">| SLET  | REDIGÉR |</span>
                        </li>
                    )}
                </List>
                <List headline="Kontakt Informationer" className="md:max-w-[48%]">
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
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400">{item.about}</p>
                            <span className="text-blue-600 p-1">| SLET  | REDIGÉR |</span>
                        </li>
                    )}
                </List>
                <List headline="Partnere" className="md:max-w-[48%]">
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
                            <p className="border border-gray-200 rounded-sm p-1 text-gray-400">{item.img}</p>
                            <span className="text-blue-600 p-1">| SLET  | REDIGÉR |</span>
                        </li>
                    )}
                </List>


            </CardGallery>
        </ColorContainer>

     );
}
 
export default Adminpanel;