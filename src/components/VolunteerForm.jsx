import InputField from "./InputField";
import InputText from "./InputText";
import Button from "./Button";
import Message from "./Message";

import axios from "axios";
import { useCookies } from 'react-cookie';
import { useState } from "react";

const VolunteerForm = (props) => {
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
    const [volunteerTitle, setVolunteerTitle] = useState(props.title || '');
    const [volunteerImg, setVolunteerImg] = useState(props.file || ''); 
    const [volunteerContent, setVolunteerContent] = useState(props.content || '');
    const [volunteerExtra, setVolunteerExtra] = useState(props.extra || '');

    const [volunteerMsg, setVolunteerMsg] = useState({});
   


    const newVolunteer = () => {

        const endpoint = `http://localhost:4000/api/v1/volunteers`;
        const body = {
            name: volunteerTitle,
            description: volunteerContent,
            file: volunteerImg,
            extra: volunteerExtra
        };
        

        axios.post(endpoint, body, header('multipart/form-data', token))
        .then(response =>{
            console.log(response);
            setVolunteerMsg({text:'Det nye frivillig segment er tilføjet',color:'green'});
        })
        .catch(error => {
            console.log(error);
            setVolunteerMsg({text:'Noget gik galt', color:'red'});
        });

       setVolunteerTitle('');
       setVolunteerImg('');
       setVolunteerContent('');

    }
    

    const editVolunteer = () =>{

        const endpoint = `http://localhost:4000/api/v1/volunteers/${props.editId}`;
        const body = {
            name: volunteerTitle,
            description: volunteerContent,
            file: volunteerImg,
            extra: volunteerExtra
        };
        

        axios.put(endpoint, body, header('multipart/form-data', token))
        .then(response =>{
            console.log(response);
            setVolunteerMsg({text:'Dyret er opdateret',color:'green'});
        })
        .catch(error => {
            console.log(error);
            setVolunteerMsg({text:'Noget gik galt', color:'red'});
        });

    }

    const validateForm = (event) => {
        event.preventDefault();

        const validInputRegex = new RegExp('^[-a-zA-Z0-9!@&()`.,/"\']{3,1500}$');

        !validInputRegex.test(volunteerTitle) && setVolunteerMsg({text:'Titel er ugyldigt', color:'red'});
        !validInputRegex.test(volunteerContent) && setVolunteerMsg({text:'Indhold er ugyldigt', color:'red'});
        !validInputRegex.test(volunteerExtra) && setVolunteerMsg({text:'Melding er ugyldigt', color:'red'});
        
        if(validInputRegex.test(volunteerTitle) && validInputRegex.test(volunteerContent) && validInputRegex.test(volunteerExtra)){
            setVolunteerMsg({text:'Loading..', color:'blue'});
            props.editId && props.editId !== '' ? editVolunteer() : newVolunteer();
        }
    }
        
    
    return ( 
        <>
        <form className="flex flex-wrap gap-2 py-2">
        <InputField 
            label="Titel" 
            type="text" 
            id="volunteerTitle"
            value={volunteerTitle} 
            action={(event) => setVolunteerTitle(event.target.value)}/>
        <InputField 
            label="Billede" 
            type="file" 
            id="volunteerImg" 
            // value={props.file} 
            action={(event) => setVolunteerImg(event.target.files[0])}/>
            {props.file && <img src={props.file} alt={props.title} />}
        
        <InputText 
            label="Indhold" 
            id="volunteerContent" 
            value={volunteerContent} 
            action={(event) => setVolunteerContent(event.target.value)}/>
        <InputText 
            label="Melding" 
            id="volunteerExtra" 
            value={volunteerExtra} 
            action={(event) => setVolunteerExtra(event.target.value)}/>
        <Button 
            text={props.editId ? 'Rediger' : 'Tilføj'}
            action={validateForm} />
    </form>
    <Message content={volunteerMsg} />
    </>
     );
}
 
export default VolunteerForm;