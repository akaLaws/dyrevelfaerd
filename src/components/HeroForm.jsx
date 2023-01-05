import InputField from "./InputField";
import InputText from "./InputText";
import Button from "./Button";
import Message from "./Message";

import axios from "axios";
import Cookies from 'universal-cookie';
import { useState } from "react";

const HeroForm = (props) => {
    // Auth Data for the headers
    const cookies = new Cookies();
    const token = cookies.get('token');
    
    const header = (contentType) => {
        return {headers: {
            'Content-Type': contentType,
            'Authorization': `Bearer ${token}`
        }};
    }

    // Create a new animal for adoption
    // NOTE: added image upload in backend for the create functions 
    const [heroTitle, setHeroTitle] = useState(props.title || '');
    const [heroImg, setHeroImg] = useState(props.file || ''); 
    const [heroContent, setHeroContent] = useState(props.content|| '');

    const [heroMsg, setHeroMsg] = useState({});
   


    const newHero = (event) => {
        event.preventDefault();

        const endpoint = `http://localhost:4000/api/v1/adoptsections`;
        const body = {
            name: heroTitle,
            description: heroContent,
            file: heroImg
        };
        

        axios.post(endpoint, body, header('multipart/form-data', token))
        .then(response =>{
            console.log(response);
            setHeroMsg({text:'Det nye banner billede er tilføjet',color:'green'});
        })
        .catch(error => {
            console.log(error);
            setHeroMsg({text:'Noget gik galt', color:'red'});
        });

       setHeroTitle('');
       setHeroImg('');
       setHeroContent('');

    }
    

    const editHero = (event) =>{
        event.preventDefault();

        const endpoint = `http://localhost:4000/api/v1/adoptsections/${props.editId}`;
        const body = {
            name: heroTitle,
            description: heroContent,
            file: heroImg
        };
        

        axios.put(endpoint, body, header('multipart/form-data', token))
        .then(response =>{
            console.log(response);
            setHeroMsg({text:'Banner billedet er opdateret',color:'green'});
        })
        .catch(error => {
            console.log(error);
            setHeroMsg({text:'Noget gik galt', color:'red'});
        });

    }

    return ( 
        <>
        <form className="flex flex-wrap gap-2 py-2">
        <InputField 
            label="Titel" 
            type="text" 
            id="heroTitle"
            value={heroTitle} 
            action={(event) => setHeroTitle(event.target.value)}/>
        <InputField 
            label="Billede" 
            type="file" 
            id="heroImg" 
            // value={props.file} 
            action={(event) => setHeroImg(event.target.files[0])}/>
            {props.file && <img src={props.file} alt={props.title} />}
   
        <InputText 
            label="Indhold" 
            id="heroContent" 
            value={heroContent} 
            action={(event) => setHeroContent(event.target.value)}/>
        <Button 
            text={props.editId ? 'Rediger' : 'Tilføj'}
            action={props.editId ? editHero : newHero} />
    </form>
    <Message content={heroMsg} />
    </>
     );
}
 
export default HeroForm;