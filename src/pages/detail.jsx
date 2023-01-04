// Layout components
import CardGallery from "../components/CardGallery";
import ColorContainer from "../components/ColorContainer";
import HeroImage from "../components/HeroImage";
import TextSection from "../components/TextSection";

// React and library components
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {

    const detailId = useParams();

    // Data variables
    const [adoptData,setAdoptData] = useState();
    const [assetData,setAssetData] = useState();

    const [errors,setErrors] = useState([]);

    errors === true && console.log('error is true')
    // Using promise.all to fetch multiple responses as almost all the database is needed for the landingpage.
    // NOTE : As of July 15, 2020, Axios updated its GitHub README file to reflect that the axios.all helper method has been deprecated and should be replaced with Promise.all.
    
    const getData = () =>{
        const endpoints = [
            `http://localhost:4000/api/v1/animals/${detailId.detailId}`, 
            'http://localhost:4000/api/v1/assets', 
        ];
        Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then(([
                {data: adopt}, 
                {data: asset}
            ] )=> {
                setAdoptData(adopt);
                setAssetData(asset);
            })
            .catch(error =>{
                setErrors(true);
                console.log(error);
            });
    }
    useEffect(() =>  {
        getData();
    });

    return ( 
         <article>
                <HeroImage 
                    img={adoptData && assetData && assetData.filter(asset => asset.id === adoptData.assetId).map((asset) => asset.url)} 
                    alt={adoptData && adoptData.name}
                    headline={adoptData && adoptData.name}
                    text={`Har været på internatet ${adoptData && adoptData.age} dage`}
                />
                <ColorContainer color="white">
                    <CardGallery>
                        <TextSection 
                            headline={`Hvem er ${adoptData && adoptData.name}?`}
                            text={adoptData && adoptData.description}
                            className="md:max-w-full"
                        />
                        
                    </CardGallery>
                </ColorContainer>
                
            </article>    

    );
}
 
export default Detail;