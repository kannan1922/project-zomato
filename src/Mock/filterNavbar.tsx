import { useState, useEffect } from "react";
import "./filter.css";
import "./filterOverlay.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FilterResult1 from "./FilterResultNew";
import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import Navbar  from "../Navbar/Navbar";
import SliderHotel from "../Slider/SliderHotel";
import Footer from "../Hotels/Footer";
import Sliders from "../Slider/Slider";
const FilterNavbar = () => {
  const [rat, setrat] = useState(false);
  const [filterParams, setFilterParams] = useState<string[]>([]);
  const [pureveg, setPureVeg] = useState(true);
  const [show, setShow] = useState(false);
  const apiurl = process.env.REACT_APP_URL;
  console.log("urlllllllllll");
  console.log(apiurl);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmitFilter= async () => {
    try {
      const trimmedUrl = url.replace("http://localhost:3000/", ""); 
      const response = await axios.get(
        `http://localhost:4000/${trimmedUrl}`
      );
      console.log(response.data);
      setval(response.data.hotels);
 
    } catch (error: any) {
      console.log("Error:", error);
    }
  };


  const handleSubmitFilterz= async () => {
    try {
      const trimmedUrl = url.replace("http://localhost:3000/Coimbatore", ""); 
      const response = await axios.get(
        `http://localhost:4000/${trimmedUrl}`
      );
      console.log(response.data);
      setval(response.data.hotels);
 
    } catch (error: any) {
      console.log("Error:", error);
    }
  };

  const handleSubmitFilter1 = async () => {
    try {
      const trimmedUrl = url.replace("http://localhost:3000/", "");
      // console.log(`https://zomato-nuit.onrender.com/${trimmedUrl}`)
      const response = await axios.get(
        `http://localhost:4000/${trimmedUrl}`
      );
      console.log(response.data.hotel);
      setval(response.data.hotel);
    } catch (error: any) {
      console.log("Error:", error);
    }
  };
  const [val, setval] = useState<any>();

  const marks = [
    {
      value: 20,
      label: "1",
    },
    {
      value: 0,
      label: "0",
    },
    {
      value: 40,
      label: "2",
    },
    {
      value: 60,
      label: "3",
    },
    {
      value: 80,
      label: "4",
    },
    {
      value: 100,
      label: "5",
    },
  ];

  const marks1 = [
    {
      value: 20,
      label: "100",
    },
    {
      value: 0,
      label: "0",
    },
    {
      value: 40,
      label: "200",
    },
    {
      value: 60,
      label: "300",
    },
    {
      value: 80,
      label: "400",
    },
    {
      value: 100,
      label: "500",
    },
  ];
  function valuetext(value: number) {
    setRating(value);
    return `${temp}`;
  }

  function valuetext1(value: number) {
    return `${value}°C`;
  }
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    const separatedValues = Array.isArray(newValue) ? newValue : [newValue];

    const value1 = 5 * separatedValues[0];
    const value2 = 5 * separatedValues[1];
    setValue1(value1);
    setValue2(value2);
    setValue(separatedValues);
  };

  const [props, setprops] = useState<string>("");
  const navigate = useNavigate();
  const [url, setUrl] = useState<string>("");
  const [temp, setTemp] = useState<any>(0);
  const [activeFilter, setActiveFilter] = useState<string>("budget");
  const [value1, setValue1] = React.useState<number>(0);
  const [value2, setValue2] = React.useState<number>(500);
  const [rating, setRating] = useState<number>(80);
  const [showFilter, setShowFilter] = useState(false);
  const [showSortByResults, setShowSortByResults] = useState(false);
  const [showSortByCuisines, setShowSortByCuisines] = useState(false);
  const [showSortByRating, setShowSortByRating] = useState(true);
  const [showSortByBudget, setShowSortByBudget] = useState(false);
  const handleExitFilterOverlay = () => {
    setShowFilter(false);

    setShow(false);
  };
  const handleSortByResults = () => {
    setShowSortByResults(true);
    setShowSortByCuisines(false);
    setShowSortByBudget(false);
    setShowSortByRating(false);
    setActiveFilter("results");
  };

  const handleSortByCuisines = () => {
    setShowSortByResults(false);
    setShowSortByCuisines(true);
    setShowSortByBudget(false);
    setShowSortByRating(false);
    setActiveFilter("cuisines");
  };
  const handleSortByBudget = () => {
    setShowSortByResults(false);
    setShowSortByCuisines(false);
    setShowSortByBudget(true);
    setShowSortByRating(false);
    setActiveFilter("rating");
  };
  const handleSortByRating = () => {
    setShowSortByResults(false);
    setShowSortByCuisines(false);
    setShowSortByBudget(false);
    setShowSortByRating(true);
    setActiveFilter("budget");
  };
  interface SelectedOptions {
    South_Indian: boolean;
    Chinese: boolean;
  }
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    South_Indian: false,
    Chinese: false,
  });

  const handleCheckboxChange = (option: any) => {
    setSelectedOptions((prevOptions: any) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };



  useEffect(() => {
    setUrl(window.location.href);
    console.log("byeee");
    // handleSubmitFilter1();
    handleSubmitFilterz();
  }, [window.location.href]);



  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    setUrl(window.location.href);
    console.log("byeee");
    handleSubmitFilter();

    const urlSearchParams = new URLSearchParams(window.location.search);
    const rating1: any = urlSearchParams.get("Rating");
    let cuisine2: any = urlSearchParams.get("Cuisine");
    let pure: any = urlSearchParams.get("Pure_veg");

    const getFilterParamsFromUrl = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const paramsFromUrl: any = [];
      urlParams.forEach((value, key) => {
        paramsFromUrl.push(`${key}=${value}`);
      });
      setFilterParams(paramsFromUrl);
    };
    getFilterParamsFromUrl();
    if (pure) {
      setPureVeg(!pure);
    }
    if (rating1 > 0) {
      setTemp(rating1 * 20);
    } else setrat(true);

    const setSouthIndianToTrue = () => {
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        South_Indian: true,
      }));
    };
    const setChineseToTrue = () => {
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        Chinese: true,
      }));
    };

    if (cuisine2 === "South_Indian,Chinese") {
      setChineseToTrue();
      setSouthIndianToTrue();
    }

    if (cuisine2 === "South_Indian") {
      setSouthIndianToTrue();
    }

    if (cuisine2 === "Chinese") {
      setChineseToTrue();
    }
  }, [url]);





//   useEffect(() => {
//     const queryParams = new URLSearchParams(window.location.search);
//     queryParams.forEach((value, key) => {
//       console.log(`${key}: ${value}`);
//     });

//     setUrl(window.location.href);
//     handleSubmitFilter();
// // applyFilters2()
//   }, []);




  const applyFilters1 = () => {
    setShow(false);

    let updatedFilterParams = [...filterParams];

    if (pureveg) {
      updatedFilterParams.push(`Pure_veg=${pureveg}`);
    } else {
      updatedFilterParams = updatedFilterParams.filter(
        (param) => !param.startsWith("Pure_veg=")
      );
    }

    const filterUrl = `/Coimbatore?${updatedFilterParams.join("&")}`;
    setFilterParams(updatedFilterParams);

    navigate(filterUrl);
    setUrl(window.location.href);
  };
  const applyFilters = () => {
    setShowFilter(false);
    setShow(false);

    let updatedFilterParams = [...filterParams];

    const addOrUpdateParam = (paramKey: string, paramValue: any) => {
      const existingParamIndex = updatedFilterParams.findIndex((param) =>
        param.startsWith(`${paramKey}=`)
      );

      if (paramValue !== null && paramValue !== undefined) {
        const newParam = `${paramKey}=${paramValue}`;
        if (existingParamIndex !== -1) {
          updatedFilterParams[existingParamIndex] = newParam;
        } else {
          updatedFilterParams.push(newParam);
        }
      } else {
        updatedFilterParams = removeParam(updatedFilterParams, paramKey);
      }
    };

    const removeParam = (params: string[], paramKey: string) => {
      return params.filter((param) => !param.startsWith(`${paramKey}=`));
    };

    addOrUpdateParam("Rating", rating > 0 ? rating / 20 : null);
    if (rating > 0) setrat(false);
    const isSouthIndianSelected = selectedOptions.South_Indian;
    const isChineseSelected = selectedOptions.Chinese;

    if (isChineseSelected || isSouthIndianSelected) {
      const selectedCuisines = Object.keys(selectedOptions)
        .filter(
          (option) => selectedOptions[option as keyof typeof selectedOptions]
        )
        .join(",");
      addOrUpdateParam("Cuisine", selectedCuisines || null);
    } else {
      updatedFilterParams = removeParam(updatedFilterParams, "Cuisine");
    }
    const priceRangeParam = `${value1}-${value2}`;
    addOrUpdateParam(
      "cpp",
      value1 !== null && value2 !== null ? priceRangeParam : null
    );
    const filterUrl = `/Coimbatore?${updatedFilterParams.join("&")}`;
    setFilterParams(updatedFilterParams);
    navigate(filterUrl);
    setUrl(window.location.href);
  };

  const applyFilters2 = () => {
    setShowFilter(false);
    setShow(false);

    let updatedFilterParams = [...filterParams];

    setrat(!rat);
    const addOrUpdateParam = (paramKey: string, paramValue: any) => {
      const existingParamIndex = updatedFilterParams.findIndex((param) =>
        param.startsWith(`${paramKey}=`)
      );

      if (paramValue !== null && paramValue !== undefined && rat == true) {
        const newParam = `${paramKey}=${paramValue}`;
        if (existingParamIndex !== -1) {
          updatedFilterParams[existingParamIndex] = newParam;
        } else {
          updatedFilterParams.push(newParam);
        }
      } else {
        updatedFilterParams = updatedFilterParams.filter(
          (param) => !param.startsWith(`${paramKey}=`)
        );
      }
    };

    addOrUpdateParam("Rating", rating > 0 ? rating / 20 : null);
    const filterUrl = `/Coimbatore?${updatedFilterParams.join("&")}`;

    setFilterParams(updatedFilterParams);
    navigate(filterUrl);
    setUrl(window.location.href);
  };


  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);
  const [showSliders, setShowSliders] = useState(true);
  const [showDishButton, setShowDishButton] = useState(true);
  const [dishName, setDishName] = useState<string>('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.toString().length > 0) {
      setShowSliders(false);
    } else {
      setShowSliders(true);
    }

    const urlParams1 = new URLSearchParams(window.location.search);
    const dishParam = urlParams1.get('Dish'); 
    if (dishParam) {
      setShowDishButton(true);
      setDishName(dishParam);
    } else {
      setShowDishButton(false);
    }
  }, [window.location.href]);


  const handleDishButtonClick = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const currentDish = urlParams.get('Dish');
    if (currentDish) {
      urlParams.delete('Dish');
      window.history.replaceState({}, '', `${window.location.pathname}${urlParams}`);
      setShowDishButton(false);
    }
  };
  return (
    <div>
       <Navbar/>
       {showSliders && <Sliders />}
       {showSliders && <SliderHotel/>}
   <div className={`filterNavbar ${isSticky ? 'sticky' : ''}`}>
        <div className="move">
          <button
            className="filterButton"
            onClick={() => {
              setShowFilter(true);
              handleShow();
            }}
          >
            <div className="filterButtoninside">
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#9C9C9C"
                  width="18"
                  height="13"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                >
                  <title>filter</title>
                  <path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84 15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path>
                </svg>
              </div>
              <div>Filters</div>{" "}
            </div>
          </button>
        </div>
        <div>
      {/* Render Dish button if it should be visible */}
      {showDishButton && (
        <button
          className={`filterButton active`}  // Add any additional styling or classes
          onClick={handleDishButtonClick}
        >
          {`${dishName}`}
        </button>
      )}

      {/* Other components */}
    </div>
        <div>
          <button
            className={`filterButton ${!pureveg ? "active" : ""}`}
            onClick={() => {
              setPureVeg(!pureveg);
              applyFilters1();
            }}
          >
            Pure Veg
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              // setrat(!rat);
              applyFilters2();
            }}
            //   disabled={rat}
            className={`filterButton ${!rat ? "active" : ""}`}
          >
            Rating {rating / 20}+
          </button>
        </div>
        <div>
          <button className="filterButton">
            cuisines{" "}
            <svg
            style={{marginTop:"-8px"}}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="20"
              fill="currentColor"
            >
              <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
            </svg>
          </button>
        </div>
      </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
        {showFilter && (
          <div className="overlayFilter">
            <div className="signUp">
              <div className="signupLogo">Filters</div>

              <div className="exitSignup" onClick={handleExitFilterOverlay}>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1C1C1C"
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  aria-labelledby="icon-svg-title- icon-svg-desc-"
                  role="img"
                >
                  <title>cross</title>
                  <path d="M11.42 10.42l3.54-3.54c0.38-0.4 0.38-1.040 0-1.42s-1.020-0.4-1.42 0l-3.54 3.54-3.54-3.54c-0.4-0.4-1.020-0.4-1.42 0s-0.38 1.020 0 1.42l3.54 3.54-3.54 3.54c-0.38 0.38-0.38 1.020 0 1.42 0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28l3.54-3.56 3.54 3.56c0.2 0.18 0.46 0.28 0.72 0.28s0.5-0.1 0.7-0.28c0.38-0.4 0.38-1.040 0-1.42l-3.54-3.54z"></path>
                </svg>
              </div>
            </div>
            <div className="line"></div>
            <div className="conditions">
              <div className="FilterConditionFlex">
                <div className="constraintsFlex">
                  <div
                    className={`filterButton1 ${
                      activeFilter === "results" ? "active" : ""
                    }`}
                    onClick={handleSortByResults}
                  >
                    Sort By
                  </div>
                  <div
                    className={`filterButton1 ${
                      activeFilter === "cuisines" ? "active" : ""
                    }`}
                    onClick={handleSortByCuisines}
                  >
                    Cuisines
                  </div>
                  <div
                    className={`filterButton1 ${
                      activeFilter === "budget" ? "active" : ""
                    }`}
                    onClick={handleSortByRating}
                  >
                    Rating
                  </div>
                  <div
                    className={`filterButton1 ${
                      activeFilter === "rating" ? "active" : ""
                    }`}
                    onClick={handleSortByBudget}
                  >
                    Cost Per Person
                  </div>
                  <div className="filterButton2">More Filters</div>
                </div>

                <div className="resultsFlex">
                  {showSortByResults && (
                    <div className="sorting-options">
                      <label className="radiobutton" htmlFor="popularity">
                        <input
                          type="radio"
                          id="popularity"
                          name="sort"
                          value="popularity"
                        />
                        Popularity
                      </label>

                      <label className="radiobutton" htmlFor="ratingHighToLow">
                        <input
                          type="radio"
                          id="ratingHighToLow"
                          name="sort"
                          value="ratingHighToLow"
                        />
                        Rating: High to Low
                      </label>

                      <label className="radiobutton" htmlFor="deliveryTime">
                        <input
                          type="radio"
                          id="deliveryTime"
                          name="sort"
                          value="deliveryTime"
                        />
                        Delivery Time
                      </label>

                      <label className="radiobutton" htmlFor="costLowToHigh">
                        <input
                          type="radio"
                          id="costLowToHigh"
                          name="sort"
                          value="costLowToHigh"
                        />
                        Cost: Low to High
                      </label>

                      <label className="radiobutton" htmlFor="costHighToLow">
                        <input
                          type="radio"
                          id="costHighToLow"
                          name="sort"
                          value="costHighToLow"
                        />
                        Cost: High to Low
                      </label>
                    </div>
                  )}

                  {showSortByCuisines && (
                    <div className="sortByCuisine">
                      <label>
                        <input
                          className="cuisineButton"
                          type="checkbox"
                          checked={selectedOptions.South_Indian}
                          onClick={() => handleCheckboxChange("South_Indian")}
                        />
                        South Indian
                      </label>

                      <label>
                        <input
                          className="cuisineButton"
                          type="checkbox"
                          checked={selectedOptions.Chinese}
                          onClick={() => handleCheckboxChange("Chinese")}
                        />
                        Chinese
                      </label>
                    </div>
                  )}

                  {showSortByRating && (
                    <div className="sortByRating">
                      <div
                        style={{
                          color: "rgba(.0 , .0, .0, .7)",
                          marginBottom: "10px",
                        }}
                      >
                        Rating
                      </div>
                      <div
                        style={{
                          color: "rgba(.0 , .0, .0, .7)",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        <span>{`${rating / 20}+`}</span>
                      </div>
                      <div className="filterRatingbar">
                        <Box sx={{ width: 300 }}>
                          <Slider
                            aria-label="Always visible"
                            defaultValue={temp}
                            getAriaValueText={valuetext}
                            step={10}
                            marks={marks}
                            sx={{
                              color: "red",
                              "& .MuiSlider-rail": {
                                backgroundColor: "red",
                              },
                              "& .MuiSlider-track": {
                                backgroundColor: "red",
                              },
                            }}
                          />
                        </Box>
                      </div>
                    </div>
                  )}

                  {showSortByBudget && (
                    <div className="sortByRating">
                      <div
                        style={{
                          color: "rgba(.0 , .0, .0, .7)",
                          marginBottom: "10px",
                        }}
                      >
                        Range
                      </div>
                      <div
                        style={{
                          color: "rgba(.0 , .0, .0, .7)",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        <span>{`₹${value1}-₹${value2}`}</span>
                      </div>
                      <div className="filterRatingbar">
                        <Box sx={{ width: 300 }}>
                          <Slider
                            getAriaLabel={() => "Temperature range"}
                            value={value}
                            onChange={handleChange}
                            getAriaValueText={valuetext1}
                            marks={marks1}
                            sx={{
                              color: "red",
                              "& .MuiSlider-rail": {
                                backgroundColor: "red",
                              },
                              "& .MuiSlider-track": {
                                backgroundColor: "red",
                              },
                            }}
                          />
                        </Box>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="line2"></div>
            <div className="applyfilter">
              <div className="filterClear">Clear all</div>
              <div>
                <button className="filterApply" onClick={() => applyFilters()}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
      <FilterResult1 result={val} />
      <Footer/>
    </div>
  );
};

export default FilterNavbar;
