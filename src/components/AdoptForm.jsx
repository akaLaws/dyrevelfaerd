import InputField from "./InputField";
import InputText from "./InputText";
import Button from "./Button";
import Message from "./Message";

import axios from "axios";
import { useCookies } from 'react-cookie';
import { useState } from "react";

const AdoptForm = (props) => {
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
    const [adoptName, setAdoptName] = useState(props.name || '');
    const [adoptImg, setAdoptImg] = useState(props.file || ''); 
    const [adoptAge, setAdoptAge] = useState(props.age || '');
    const [adoptDescribe, setAdoptDescribe] = useState(props.description || '');

    const [adoptMsg, setAdoptMsg] = useState({});
   


    const newAdopt = () => {

        const endpoint = `http://localhost:4000/api/v1/animals`;
        const body = {
            name: adoptName,
            description: adoptDescribe,
            age: adoptAge,
            file: adoptImg
        };
        

        axios.post(endpoint, body, header('multipart/form-data', token))
        .then(response =>{
            console.log(response);
            setAdoptMsg({text:'Det nye dyr er tilføjet',color:'green'});
        })
        .catch(error => {
            console.log(error);
            setAdoptMsg({text:'Noget gik galt', color:'red'});
        });

       setAdoptName('');
       setAdoptImg('');
       setAdoptAge('');
       setAdoptDescribe('');

    }
    

    const editAdopt = () =>{

        const endpoint = `http://localhost:4000/api/v1/animals/${props.editId}`;
        const body = {
            name: adoptName,
            description: adoptDescribe,
            age: adoptAge,
            file: adoptImg
        };
        

        axios.put(endpoint, body, header('multipart/form-data', token))
        .then(response =>{
            console.log(response);
            setAdoptMsg({text:'Dyret er opdateret',color:'green'});
        })
        .catch(error => {
            console.log(error);
            setAdoptMsg({text:'Noget gik galt', color:'red'});
        });

    }
    const validateForm = (event) => {
        event.preventDefault();

        const validInputRegex = new RegExp('^[A-Za-z0-9]{3,20}$');

        !validInputRegex.test(adoptName) && setAdoptMsg({text:'Navn er ugyldigt', color:'red'});
        !validInputRegex.test(adoptAge) && setAdoptMsg({text:'Alder er ugyldigt', color:'red'});
        !validInputRegex.test(adoptDescribe) && setAdoptMsg({text:'Beskrivelse er ugyldigt', color:'red'});
        
        if(validInputRegex.test(adoptName) && validInputRegex.test(adoptDescribe) && validInputRegex.test(adoptAge)){
            setAdoptMsg({text:'Loading..', color:'blue'});
            props.editId && props.editId !== '' ? editAdopt() : newAdopt();
        }
    }
    return ( 
        <>
        <form className="flex flex-wrap gap-2 py-2">
        <InputField 
            label="Navn" 
            type="text" 
            id="animalName"
            value={adoptName} 
            action={(event) => setAdoptName(event.target.value)}/>
        <InputField 
            label="Billede" 
            type="file" 
            id="animalImg" 
            // value={props.file} 
            action={(event) => setAdoptImg(event.target.files[0])}/>
            {props.file && <img src={props.file} alt={props.name} />}
        <InputField 
            label="Alder" 
            type="number" 
            id="animalAge" 
            value={adoptAge} 
            action={(event) => setAdoptAge(event.target.value)}/>
        <InputText 
            label="Beskrivelse" 
            id="animalDescribe" 
            value={adoptDescribe} 
            action={(event) => setAdoptDescribe(event.target.value)}/>
        <Button 
            text={props.editId ? 'Rediger' : 'Tilføj'}
            action={validateForm} />
    </form>
    <Message content={adoptMsg} />
    </>
     );
}
 
export default AdoptForm;