import CardGallery from "../components/CardGallery";
import ColorContainer from "../components/ColorContainer";
import HeroImage from "../components/HeroImage";
import TextSection from "../components/TextSection";

const Detail = (props) => {
    return ( 
        <article>
            <HeroImage 
                img="https://images.pexels.com/photos/755447/pexels-photo-755447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Wolfie" 
                headline="Wolfie McCuddles" 
                text="Har været på internatet x antal dage" 
            />
            <ColorContainer color="white">
                <CardGallery>
                    <TextSection 
                        headline="Hvem er Wolfie McCuddles?" 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis."
                    />
                    <TextSection 
                        headline="Hvordan adopterer jeg?" 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis."
                    />
                </CardGallery>
            </ColorContainer>

            
            
        </article>
    
    );
}
 
export default Detail;