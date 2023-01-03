import Headline from "../components/Headline";
import ColorContainer from "../components/ColorContainer";
import TextSection from "../components/TextSection";
import CardHorizontal from "../components/CardHorizontal";
import InputField from "../components/InputField";
import Button from "../components/Button";
import CardGallery from "../components/CardGallery";
import CardVertical from "../components/CardVertical";
import HeroImage from "../components/HeroImage";

const Onepage = () => {
    return (
        <>
        <HeroImage 
                    img="https://images.pexels.com/photos/850602/pexels-photo-850602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    headline="headline"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <div id="about"></div>
                <ColorContainer color="white">
                    <CardGallery>
                        <TextSection 
                            headline="headline"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis. " 
                        />
                        <TextSection 
                            headline="headline"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis. " 
                        />
                        <TextSection 
                            headline="headline"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis. " 
                        />
                    </CardGallery>
                    <div id="volunteer"></div>
                </ColorContainer>
                <CardGallery>
                    <Headline text="Bliv frivillig" className="text-blue-900"/>
                    <CardVertical 
                        headline="headline" 
                        img="https://raw.githubusercontent.com/rts-cmk/dyrevelfaerd-opgave/main/logo.png" 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis. "
                        msg="boop"
                    />
                    <CardVertical 
                        headline="headline" 
                        img="https://raw.githubusercontent.com/rts-cmk/dyrevelfaerd-opgave/main/logo.png" 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis. "
                        msg="boop"
                    />
                    <CardVertical 
                        headline="headline" 
                        img="https://raw.githubusercontent.com/rts-cmk/dyrevelfaerd-opgave/main/logo.png" 
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend luctus metus sit amet consectetur. Proin luctus consequat facilisis. "
                        msg="boop"
                    />
                </CardGallery>
                <div id="emergency"></div>
                <HeroImage 
                    img="https://images.pexels.com/photos/288621/pexels-photo-288621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    headline="headline"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    
                />
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
                        mt-16
                        gap-2

                    ">
                        <InputField 
                            label="E-mail: " 
                            type="email" 
                            id="email" 
                        />
                        <InputField 
                            label="Navn: " 
                            type="text" 
                            id="name" 
                        />
                        <span className="w-full flex place-content-end">
                        <Button 
                            text="send" 
                        />
                        </span>
                        
                    </form>
                </CardGallery>
                <HeroImage 
                    img="https://images.pexels.com/photos/755447/pexels-photo-755447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    headline="headline"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <div id="adopt"></div>
                <ColorContainer color="white">
                    <CardGallery>
                        <Headline text="Dyr hos os" className="text-blue-900 text-3xl" />
                        <Headline text="X dyr" className="text-gray-400 text-lg pb-8" />
                        <CardHorizontal
                            img="https://images.pexels.com/photos/3508173/pexels-photo-3508173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="sneaky kitty"
                            headline="animal"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            days="4"
                        />
                        <CardHorizontal
                            img="https://images.pexels.com/photos/3508173/pexels-photo-3508173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="sneaky kitty"
                            headline="animal"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            days="4"
                        />
                        <CardHorizontal
                            img="https://images.pexels.com/photos/3508173/pexels-photo-3508173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="sneaky kitty"
                            headline="animal"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            days="4"
                        />
                        <CardHorizontal
                            img="https://images.pexels.com/photos/3508173/pexels-photo-3508173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="sneaky kitty"
                            headline="animal"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            days="4"
                        />
                        <CardHorizontal
                            img="https://images.pexels.com/photos/3508173/pexels-photo-3508173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="sneaky kitty"
                            headline="animal"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            days="4"
                        />
                        <CardHorizontal
                            img="https://images.pexels.com/photos/3508173/pexels-photo-3508173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="sneaky kitty"
                            headline="animal"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            days="4"
                        />
                    </CardGallery>
                </ColorContainer>
        </>
      );
}
 
export default Onepage;