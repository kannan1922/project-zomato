
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="custom-arrow prev-arrow left-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <circle cx="12" cy="12" r="11" fill="white" />
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </button>
    );
  };
  
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="custom-arrow next-arrow right-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <circle cx="12" cy="12" r="11" fill="white" />
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </button>
    );
  };
  
  
  

function SliderHotel() {

  const navigate = useNavigate();
  const [filterParams, setFilterParams] = useState<string[]>([]);

  const handleNavigateHotelName = (name: string,city:any) => {
    let updatedFilterParams = [...filterParams];
    if(city)
    updatedFilterParams.push(`${city}`);
    if (name) {
      updatedFilterParams.push(`${name}`);
    }
    setFilterParams(updatedFilterParams);
    const filterUrl = `/Coimbatore/${updatedFilterParams.join("/")}`;
    navigate(filterUrl);
    // setUrl(window.location.href);
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };


  return (
    <div className="w-75 m-auto">
      <div className="margin-top-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div onClick={()=>handleNavigateHotelName(d.name,d.Sub_Location)} key={d.name} className="bg-white height-450 text-black rounded-xl">
                <img style={{cursor:"pointer"}}src={d.img} alt="" className="height-44 width-44 rounded-full" />
                <div className='kkk'>{d.name}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Sri_Annapoorna",
    Sub_Location:"Kuniyamuthur",
    img: `https://b.zmtcdn.com/data/brand_creatives/logos/381f5d7481d4cf08b35a063b8787070b_1617918168.png?output-format=webp`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `SS_Hyderabad`,
    Sub_Location:"Gandhipuram",
    img: `https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187820.png?output-format=webp`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
 
    name: `Pizza_Hut`,
    Sub_Location:"Peelamedu",
    img: `https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
 
  {
    name: `Abhita_Restaurant`,
    Sub_Location:"Ukkadam",
    img: `https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983649.png?output-format=webp`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },

  {
    name: `Domino's_Pizza`,
    Sub_Location:"Saibaba Colony",
    img: `https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655800804.png?output-format=webp`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },

  {
    name: `Arya_Bhavan`,
    Sub_Location:"RS Puram",
    img: `https://b.zmtcdn.com/data/brand_creatives/logos/50760f50e2c9d1220c3c98e5a32eba28_1661166543.png?output-format=webp`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Dindigul_Thalapakkatti`,
    "Sub_Location":"Gandhipuram",
    img: `https://b.zmtcdn.com/data/brand_creatives/logos/0956194de2534812e820317cd4b0ccd3_1630505737.png?output-format=webp`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },

];

export default SliderHotel;
