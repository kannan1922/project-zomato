import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./HotelHomePage.css";
import { Link, Route, Routes } from "react-router-dom";
import Menu from "./Review";
import Photos from "./Photos";
import Navbar from "../Navbar/Navbar";
import OrderOnline from "./OrderOnline";
import Reviews from "./Review1";
import OrderOnline1 from "./Overview";
import Footer from "./Footer";
import SliderHotel from "../Slider/SliderHotel";
import Sliders from "../Slider/Slider";
interface Dish {
  Name: string;
  Images: string;
  Price: number;
  Rating: number;
  vote: number;
}

interface Review {
  comment: string;
}

interface Restaurant {
  Cuisine: string[];
  Delievery_Rating: number;
  Dining_Rating: number;
  Dishes: Dish[];
  Images: string;
  Location: string;
  Name: string;
  Opening: string;
  Pure_veg: string;
  Review: Review[];
  Sub_Location: string;
  Working_days: string;
}

const HotelHome: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("");

  const [url, setUrl] = useState<string>("");
  const [responseData, setResponseData] = useState<Restaurant[]>([]);
  const location = useLocation();

  const navigate = useNavigate();

  const lineStyle = {
    width: "1px",
    height: "12px",
    backgroundColor: "rgba(.0 , .0 ,.0 ,.4)",
    padding: "0px",
    margin: " 13px 10px",
  };

  const handleOtpMobile = async () => {
    try {
      const queryParams = new URLSearchParams(window.location.search);
      console.log("mewoooo");
      console.log(queryParams);
      const currentUrl = window.location.href;
      setUrl(currentUrl);
      console.log(currentUrl);
      console.log(url);
      const trimmedUrl = currentUrl.replace("http://localhost:3000/", "");
      console.log(trimmedUrl);
      console.log(`https://zomato-nuit.onrender.com/${trimmedUrl}`);
      const response = await axios.get(`http://localhost:4000/${trimmedUrl} `);
      console.log([response.data.hotel]);
      setResponseData([response.data.hotel]);
    } catch (error: any) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    const currentUrl = window.location.href;
    setUrl(currentUrl);
    console.log(`url: ${url}`);
    handleOtpMobile();
  }, [window.location.href]);

  const handleButtonClick = (path: string) => {
    navigate(path || "/");
  };

  const [isSticky, setSticky] = useState(false);

  const [isSticky1, setSticky1] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <Navbar />
      {/* <Sliders/> */}
      <div className="restWrap">
        {responseData.map((restaurant, index) => (
          <div>
            <div className="restImageWrap">
              <div>
                <img className="restImage" src={restaurant.Images[0]} alt="" />
              </div>
              <div>
                <div>
                  {" "}
                  <img className="restImage1" src={restaurant.Images[1]} alt="" />
                </div>
                <div>
                  {" "}
                  <img className="restImageA1" src={restaurant.Images[2]} alt="" />
                </div>
              </div>
              <div>
                <img className="restImage2" src={restaurant.Images[3]} alt="" />
              </div>
            </div>
            <div className={`s ${isSticky ? "sticky" : ""}`}>
              <div className={`nameRatingWrap`}>
                <div className="restName">{restaurant.Name}</div>
                <div>
                  <div className="ratingWrapz">
                    <div className="ratingColor">
                      <div className="ratingColor1">
                        {restaurant.Delievery_Rating}
                        <div className="searchSvg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="12"
                            height="12"
                          >
                            <path
                              d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                      </div>

                      <div className="SearchDeliveryText">DELIVERY</div>
                    </div>
                    <div style={lineStyle}></div>

                    <div className="ratingColor">
                      <div className="ratingColor1">
                        {restaurant.Dining_Rating}
                        <div className="searchSvg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="12"
                            height="12"
                          >
                            <path
                              d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="SearchDeliveryText">DINING</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cuisine">{restaurant.Cuisine}</div>
              <div className="location">
                {restaurant.Sub_Location},{restaurant.Location}
              </div>
              <div className="location">
                <span style={{ color: "orange" }}>opened-</span>
                {restaurant.Opening}
              </div>
            </div>
            <div className="whole">
              <div>
                <button className="resDirection">
                  <svg
                    fill="red"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 24"
                    width="20"
                    height="20"
                  >
                    <path d="M19.2 8.44l-7.22-7.22c-0.52-0.48-1.2-0.8-1.98-0.8s-1.46 0.32-1.98 0.8v0l-7.2 7.22c-0.52 0.5-0.82 1.2-0.82 1.98s0.3 1.46 0.82 1.98l7.2 7.2c0.5 0.52 1.2 0.82 1.98 0.82s1.48-0.3 1.98-0.82l7.22-7.2c0.5-0.52 0.8-1.22 0.8-1.98s-0.3-1.48-0.8-1.98v0zM18.16 11.38l-7.2 7.2c-0.24 0.24-0.58 0.38-0.94 0.38s-0.72-0.14-0.96-0.38v0l-7.22-7.2c-0.24-0.24-0.4-0.58-0.4-0.96s0.16-0.7 0.4-0.94v0l7.2-7.22c0.24-0.24 0.58-0.4 0.96-0.4s0.7 0.16 0.94 0.4l7.2 7.2c0.24 0.24 0.4 0.58 0.4 0.94s-0.16 0.72-0.4 0.96v0zM12.2 6.96c-0.040-0.040-0.080-0.060-0.12-0.060-0.1 0-0.18 0.080-0.18 0.18 0 0 0 0 0 0v0 1.66h-3.56c-1.18 0-2.14 0.96-2.14 2.16v0 2.38c0 0.26 0.2 0.46 0.46 0.46v0h0.48c0.26 0 0.48-0.2 0.48-0.46v0-2.38c0-0.4 0.32-0.72 0.72-0.72h3.56v1.66c0 0 0 0 0 0 0 0.1 0.080 0.18 0.18 0.18 0.040 0 0.080-0.020 0.12-0.060v0l2.34-2.32c0.040-0.040 0.080-0.1 0.080-0.18s-0.040-0.12-0.080-0.16v0z"></path>
                  </svg>
                  Direction
                </button>
              </div>
              <div>
                <button className="resBookmark">
                  <svg
                    fill="red"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path d="M12.38 7.8h-1.66v-1.68c0-0.26-0.22-0.46-0.48-0.46v0h-0.48c-0.26 0-0.48 0.2-0.48 0.46v0 1.68h-1.66c-0.26 0-0.48 0.2-0.48 0.48v0 0.46c0 0.28 0.22 0.48 0.48 0.48v0h1.66v1.68c0 0.26 0.22 0.46 0.48 0.46v0h0.48c0.26 0 0.48-0.2 0.48-0.46v0-1.68h1.66c0.26 0 0.48-0.2 0.48-0.48v0-0.46c0-0.28-0.22-0.48-0.48-0.48v0zM15.020 0.9h-10.020c-1.060 0-1.92 0.84-1.92 1.9v0 16.42c0 0.28 0.16 0.5 0.36 0.62v0c0.12 0.060 0.24 0.1 0.38 0.1s0.24-0.040 0.36-0.1v0l5.82-3.52 5.82 3.52c0.1 0.060 0.24 0.1 0.38 0.1v0c0 0 0 0 0 0 0.12 0 0.24-0.040 0.34-0.1v0c0.22-0.12 0.36-0.34 0.36-0.62v-16.46c-0.020-1.040-0.86-1.86-1.88-1.86v0zM15.48 17.96l-5.1-3.080c-0.12-0.060-0.24-0.1-0.38-0.1s-0.26 0.040-0.38 0.1v0l-5.1 3.080v-15.24c0.040-0.22 0.22-0.4 0.46-0.4 0 0 0 0 0.020 0v0h10.020c0 0 0 0 0 0 0.24 0 0.44 0.2 0.46 0.44v0z"></path>
                  </svg>
                  Bookmark
                </button>
              </div>
              <div>
                <button className="resShare">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="red"
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                  >
                    <title>share</title>
                    <path d="M0.72 19.94c-0.020 0-0.060 0-0.080 0s-0.060 0-0.080 0v0c-0.32-0.080-0.56-0.36-0.56-0.7 0 0 0 0 0-0.020v0c0-10.1 6.32-12.92 9.52-13.28v-4.34c0 0 0 0 0 0 0-0.38 0.32-0.7 0.72-0.7 0.18 0 0.36 0.060 0.48 0.18v0l9.060 8.32c0.14 0.14 0.22 0.34 0.22 0.54v0c0 0.2-0.1 0.4-0.24 0.52v0l-9.040 8.12c-0.12 0.1-0.3 0.18-0.46 0.18-0.12 0-0.22-0.040-0.32-0.080h0.020c-0.26-0.1-0.44-0.36-0.44-0.64v-4.3c-3.66 0.22-6.74 2.48-8.12 5.66l-0.020 0.060c-0.1 0.28-0.36 0.48-0.66 0.48v0zM10.24 12.32c0.4 0 0.72 0.32 0.72 0.72v0 3.4l7.26-6.5-7.26-6.66v3.32c0 0.4-0.32 0.72-0.72 0.72v0c-2.18 0-7.48 1.7-8.58 9 2.060-2.46 5.14-4 8.56-4 0.020 0 0.020 0 0.020 0v0z"></path>
                  </svg>
                  Share
                </button>
              </div>
            </div>
            <div className={`wholeRoute ${isSticky ? "sticky" : ""}`}>
              <button
                onClick={() => {
                  handleButtonClick(" ");
                  setActiveButton(" ");
                }}
                className={activeButton === " " ? "active" : ""}
              >
                Overview
              </button>
             
              <button
                onClick={() => {
                  handleButtonClick("reviews");
                  setActiveButton("reviews");
                }}
                className={activeButton === "reviews" ? "active" : ""}
              >
                Reviews
              </button>

              <button
                onClick={() => {
                  handleButtonClick("order");
                  setActiveButton("order");
                }}
                className={activeButton === "order" ? "active" : ""}
              >
                Order Online
              </button>
              <button
                onClick={() => {
                  handleButtonClick("photos");
                  setActiveButton("photos");
                }}
                className={activeButton === "photos" ? "active" : ""}
              >
                Photos
              </button>
              <button
                onClick={() => {
                  handleButtonClick("menu");
                  setActiveButton("menu");
                }}
                className={activeButton === "menu" ? "active" : ""}
              >
                Menu
              </button>
              <div className="linee"></div>
            </div>

            <Routes>
              <Route path="/" element={<OrderOnline1 />} />
              <Route path="?order" element={<OrderOnline />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="photos" element={<Photos />} />
              <Route path="menu" element={<Menu />} />
            </Routes>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default HotelHome;
