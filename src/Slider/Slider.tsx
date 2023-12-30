
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import { useNavigate } from "react-router-dom";
import { useState ,useEffect} from 'react';

const PrevArrow = (props: any) => {
  const { onClick, currentSlide } = props;
  return (
    <button
      onClick={onClick}
      className={`custom-arrow1 prev-arrow left-center ${currentSlide === 0 ? 'hidden' : ''}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <circle cx="12" cy="12" r="11" fill="white" />
        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick, currentSlide, slideCount } = props;
  return (
    <button
      onClick={onClick}
      className={`custom-arrow1 next-arrow right-center ${currentSlide === 2 ? 'hidden' : ''}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <circle cx="12" cy="12" r="11" fill="white" />
        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    </button>
  );
};

  
  

function Sliders() {

  const navigate = useNavigate();
  const [filterParams, setFilterParams] = useState<string[]>([]);


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };


  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

  

  }, []);

  const handleNavigateHotelName = (name: string) => {
    const getFilterParamsFromUrl = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const paramsFromUrl: string[] = [];
      urlParams.forEach((value, key) => {
        paramsFromUrl.push(`${key}=${value}`);
      });
      setFilterParams(paramsFromUrl);
    };
  
    getFilterParamsFromUrl();
  
    setFilterParams((prevFilterParams) => {
      let updatedFilterParams = [...prevFilterParams];
  
      // Check if Dish parameter already exists
      const existingDishIndex = updatedFilterParams.findIndex((param) =>
        param.startsWith('Dish=')
      );
  
      if (existingDishIndex !== -1) {
        // If Dish parameter exists, replace it with the new one
        updatedFilterParams[existingDishIndex] = `Dish=${name}`;
      } else {
        // If Dish parameter doesn't exist, add it
        if (name) {
          updatedFilterParams.push(`Dish=${name}`);
        }
      }
  
      // Extract the main location and sublocation from the path
      const pathSegments = window.location.pathname.split('/');
      const mainLocation = pathSegments[1];
      const subLocation = pathSegments.slice(2).join('/');
  
      // Construct the base URL with the main location
      let filterUrl = `/${mainLocation}`;
  
      // Append the sublocation if it exists
      if (subLocation) {
        filterUrl += `/${subLocation}`;
      }
  
      if (updatedFilterParams.length > 0) {
        filterUrl += `?${updatedFilterParams.join('&')}`;
      }
  
      navigate(filterUrl);
  
      return updatedFilterParams;
    });
  };
  
  
  
  return (
    <div className="w-75 m-auto">
            <div className='top1'>Inspiration for your first order</div>
      <div className="margin-top-20">
        <Slider {...settings}>
          {data.map((d) => (
            <>
            <div onClick={() => handleNavigateHotelName(d.name)} key={d.name} className="bg-white height-450 text-black rounded-xl">
              <img style={{ cursor: "pointer" }} src={d.img} alt="" className="height-44 width-44 rounded-full" />
              
            </div>
            <div className='kkk1'>{d.name}</div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Idly`,
    img: `https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Dosa`,
    img: `https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Meals`,
    img: `https://b.zmtcdn.com/data/o2_assets/e1b5ebed94e25d832f8dea96824537521678798686.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Pasta`,
    img: `https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Noodles`,
    img: `https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },

  {
    name: `Biriyani`,
    img: `https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },



  {
    name: `Veg Pizza`,
    img: `https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
 
  {
    name: `Dosa`,
    img: `https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

export default Sliders;
