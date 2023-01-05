import InputField from "./InputField";
import InputText from "./InputText";
import Button from "./Button";
import Message from "./Message";

import axios from "axios";
import Cookies from 'universal-cookie';
import { useState } from "react";

const AdoptForm = (props) => {
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
    const [aboutTitle, setAboutTitle] = useState(props.title || '');
    const [aboutContent, setAboutContent] = useState(props.content || '');

    const [aboutMsg, setAboutMsg] = useState({});
   


    const newAbout = (event) => {
        event.preventDefault();

        const endpoint = `http://localhost:4000/api/v1/animals`;
        const body = {
            title: aboutTitle,
            content: aboutContent,
        };
        

        axios.post(endpoint, body, header('application/json', token))
        .then(response =>{
            console.log(response);
            setAboutMsg({text:'Det nye dyr er tilføjet',color:'green'});
        })
        .catch(error => {
            console.log(error);
            setAboutMsg({text:'Noget gik galt', color:'red'});
        });

       setAboutTitle('');
       setAboutContent('');

    }
    

    const editAbout = (event) =>{
        event.preventDefault();

        const endpoint = `http://localhost:4000/api/v1/animals/${props.editId}`;
        const body = {
            name: aboutTitle,
            description: aboutContent,
        };
        

        axios.put(endpoint, body, header('application/json', token))
        .then(response =>{
            console.log(response);
            setAboutMsg({text:'Dyret er opdateret',color:'green'});
        })
        .catch(error => {
            console.log(error);
            setAboutMsg({text:'Noget gik galt', color:'red'});
        });

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
            action={props.editId ? editAbout : newAbout} />
    </form>
    <Message content={aboutMsg} />
    </>
     );
}
 
export default AdoptForm;