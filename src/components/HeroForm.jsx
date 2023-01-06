import InputField from "./InputField";
import InputText from "./InputText";
import Button from "./Button";
import Message from "./Message";

import axios from "axios";
import { useCookies } from 'react-cookie';
import { useState } from "react";

const HeroForm = (props) => {
    // Auth Data for the headers
    const cookies = useCookies(['token']);
    const token = cookies[0].token;
    
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
   


    const newHero = () => {

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
    

    const editHero = () =>{

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
    const validateForm = (event) => {
        event.preventDefault();

        const validInputRegex = new RegExp('^[-a-zA-Z0-9!@&()`.,/"\']{3,1500}$');
        
        !validInputRegex.test(heroTitle) && setHeroMsg({text:'Titel er ugyldigt', color:'red'});
        !validInputRegex.test(heroContent) && setHeroMsg({text:'Indhold er ugyldigt', color:'red'});
        
        if(validInputRegex.test(heroTitle) && validInputRegex.test(heroContent)){
            setHeroMsg({text:'Loading..', color:'blue'});
            props.editId && props.editId !== '' ? editHero() : newHero();
        }
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
            action={validateForm} />
    </form>
    <Message content={heroMsg} />
    </>
     );
}
 
export default HeroForm;