// Layout components
import HeroImage from "../components/HeroImage";
import ColorContainer from "../components/ColorContainer";
import CardGallery from "../components/CardGallery";

import CardVertical from "../components/CardVertical";
import CardHorizontal from "../components/CardHorizontal";
import TextSection from "../components/TextSection";

import Headline from "../components/Headline";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Message from "../components/Message";

// React and package imports
import axios from "axios";
import { useEffect, useState } from "react";


const Onepage = () => {

    // Data variables
    const [aboutData,setAboutData] = useState();
    const [heroData,setHeroData] = useState();
    const [adoptData,setAdoptData] = useState();
    const [volunteerData,setVolunteerData] = useState();
    const [assetData,setAssetData] = useState();
    // const [subscribeData,setSubscribeData] = useState();

    const [subName, setSubName] = useState();
    const [subMail, setSubMail] = useState();
    const [message, setMessage] = useState();

    // const [errors,setErrors] = useState([]);

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
                // setErrors(true);
                console.log(error);
            });
        }
    useEffect(() =>  {
        getData();
    },[]);

    const newSubscriber = (event) => {
        event.preventDefault();

        console.log(subMail);
        const endpoint = `http://localhost:4000/api/v1/subscribers`;
        axios.post(endpoint, {
            name :subName, 
            email :subMail
        }).then(response => {
            // setSubscribeData(response);
            console.log(response);
            setMessage('Du er nu Tilmeldt');
        }).catch(error => {
            // setErrors(true);
            console.log(error);
        });

        document.querySelector('#name').value='';
        document.querySelector('#email').value='';

        

    }

    return (
        <>
            
            {heroData && heroData.filter(item => item.id === 1).map(item => 
                <HeroImage 
                    key={item.id}
                    img={assetData && assetData.filter(asset => asset.id === item.assetId).map((asset) => asset.url)} 
                    headline={item.title}
                    text={item.content}
                />
            )}
            
            <div id="about"></div>

            <ColorContainer color="white">
                <CardGallery>
                    {aboutData && aboutData.map(item => 
                        <TextSection 
                            key={item.id} 
                            headline={item.title} 
                            text={item.content} />
                    )}
                </CardGallery>

            </ColorContainer>

            <div id="volunteer"></div>

            <CardGallery>
                <Headline text="Bliv frivillig" className="text-blue-900"/>
                    {volunteerData && volunteerData.map(item => 
                        <CardVertical 
                            key={item.id} 
                            headline={item.title} 
                            img={assetData && assetData.filter(asset => asset.id === item.assetId).map((asset) => asset.url)} 
                            text={item.content} 
                            msg={item.extra} />
                    )}
            </CardGallery>
      
            <div id="emergency"></div>

            {heroData && heroData.filter(item => item.id === 2).map(item => 
                <HeroImage 
                    key={item.id}
                    img={assetData && assetData.filter(asset => asset.id === item.assetId).map((asset) => asset.url)} 
                    headline={item.title}
                    text={item.content}
                />
            )}

            <CardGallery>
            
                <TextSection 
                    headline="Tilmeld vores Nyhedsbrev" 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
                    
                />
                <form className="
                    flex
                    flex-wrap
                    flex-auto
                    place-content-between
                    mt-8
                    gap-2

                ">
                    <InputField 
                        label="E-mail" 
                        type="email" 
                        id="email" 
                        action={(event) => setSubMail(event.target.value)}
                    />
                    <InputField 
                        label="Navn" 
                        type="text" 
                        id="name" 
                        action={(event) => setSubName(event.target.value)}
                    />
                    <span className="w-full flex place-content-end gap-2 place-items-center">
                    
                    <Button 
                        text="send"
                        action={newSubscriber} 
                    />
                    </span> 
                </form>
                <Message text={message} color="green" />
            </CardGallery>

            {heroData && heroData.filter(item => item.id === 3).map(item => 
                <HeroImage 
                    key={item.id}
                    img={assetData && assetData.filter(asset => asset.id === item.assetId).map((asset) => asset.url)} 
                    headline={item.title}
                    text={item.content}
                />
            )}

            <div id="adopt"></div>

            <ColorContainer color="white">
                <CardGallery>
                    <Headline text="Dyr hos os" className="text-blue-900 text-3xl" />
                    <Headline text={adoptData ? adoptData.length + ' dyr' : '0'} className="text-gray-400 text-lg pb-8" />
                    {adoptData && adoptData.map(item => 
                            <CardHorizontal
                                key={item.id}
                                img={assetData && assetData.filter(asset => asset.id === item.assetId).map((asset) => asset.url)} 
                                alt={item.name}
                                headline={item.name}
                                text={item.description}
                                days={item.age}
                                linkId={item.id.toString()}
                            />
                    )}
                </CardGallery>

            </ColorContainer>
        </>
      );
}
 
export default Onepage;