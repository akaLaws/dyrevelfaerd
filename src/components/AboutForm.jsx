import InputField from "./InputField";
import InputText from "./InputText";
import Button from "./Button";
import Message from "./Message";

import axios from "axios";
import { useCookies } from 'react-cookie';
import { useState } from "react";

const AboutForm = (props) => {
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
    const [aboutTitle, setAboutTitle] = useState(props.title || '');
    const [aboutContent, setAboutContent] = useState(props.content || '');

    const [aboutMsg, setAboutMsg] = useState({});
   


    const newAbout = () => {
        
        const endpoint = `http://localhost:4000/api/v1/abouts`;
        const body = {
            title: aboutTitle,
            content: aboutContent,
        };
        

        axios.post(endpoint, body, header('application/json', token))
        .then(response =>{
            console.log(response);
            setAboutMsg({text:'Det nye info er tilføjet',color:'green'});
        })
        .catch(error => {
            console.log(error);
            setAboutMsg([{text:'Noget gik galt', color:'red'}]);
        });

       setAboutTitle('');
       setAboutContent('');

    }
    
    
    const editAbout = () =>{

        const endpoint = `http://localhost:4000/api/v1/abouts/${props.editId}`;
        const body = {
            name: aboutTitle,
            description: aboutContent,
        };
        

        axios.put(endpoint, body, header('application/json', token))
        .then(response =>{
            console.log(response);
            setAboutMsg({text:'info er opdateret',color:'green'});
        })
        .catch(error => {
            console.log(error);
            setAboutMsg({text:'Noget gik galt', color:'red'});
        });

    }

    const validateForm = (event) => {
        event.preventDefault();

        const validInputRegex = new RegExp('^[A-Za-z0-9]{3,20}$');

        !validInputRegex.test(aboutTitle) && setAboutMsg({text:'Titel er ugyldigt', color:'red'});
        !validInputRegex.test(aboutContent) && setAboutMsg({text:'Indhold er ugyldigt', color:'red'});
        
        if(validInputRegex.test(aboutTitle) && validInputRegex.test(aboutContent)){
            setAboutMsg({text:'Loading..', color:'blue'});
            props.editId && props.editId !== '' ? editAbout() : newAbout();
        }
    }
    
    return ( 
        <>
            <form className="flex flex-wrap gap-2 py-2">
                <InputField 
                    label="Titel" 
                    type="text" 
                    id="aboutTitle"
                    value={aboutTitle} 
                    action={(event) => setAboutTitle(event.target.value)}/>
                <InputText 
                    label="Indhold" 
                    id="aboutContent" 
                    value={aboutContent} 
                    action={(event) => setAboutContent(event.target.value)}/>
                <Button 
                    text={props.editId ? 'Rediger' : 'Tilføj'}
                    action={validateForm}
                />
            </form>
            <Message content={aboutMsg} />
        </>
     );
}
 
export default AboutForm;