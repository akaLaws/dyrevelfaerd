import 'tw-elements';
// Slider is used from the tailwind element library
const HeroSlider = (props) => {
    
    props.assets.map(item => console.log(item.id));
    // const [heroData, setHeroData] = useState();
    // const [assetData, setAssetData] = useState();

    // const  getData = async() => {

    //     const responseHero = await axios.get('http://localhost:4000/api/v1/adoptsections');
    //     console.log(responseHero);
    //     setHeroData(responseHero);

    //     const responseAsset = await axios.get('http://localhost:4000/api/v1/assets');
    //     console.log(responseAsset);
    //     setAssetData(responseAsset);
    // }
    // getData();
    

    return ( 

        <div
            id="carouselExampleCrossfade"
            className="carousel slide carousel-fade relative"
            data-bs-ride="carousel"
            >
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                
                <div className="carousel-item active float-left w-full h-80 overflow-hidden">
                <img
                    src='http://localhost:4000/file-bucket/1589743589738adopt.jpg'
                    className="block w-full object-cover"
                    alt="Wild Landscape"
                />
                </div>
                <div className="carousel-item float-left w-full h-80 overflow-hidden">
                <img
                    src='http://localhost:4000/file-bucket/1589743651917kittens.jpg'
                    className="block w-full object-cover"
                    alt="Camera"
                />
                </div>
                <div className="carousel-item float-left w-full h-80 overflow-hidden">
                <img
                    src='http://localhost:4000/file-bucket/1589743660929save.jpg'
                    className="block w-full object-cover"
                    alt="Exotic Fruits"
                />
                </div>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
     );
}
 
export default HeroSlider;