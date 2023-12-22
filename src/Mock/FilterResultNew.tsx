import { useState, useEffect } from "react";
import "./filterDesign.css";
import { useNavigate, useLocation } from "react-router-dom";
const FilterResult1 = (props: any) => {
  const navigate = useNavigate();
  const location1 = useLocation();
  const [filterParams, setFilterParams] = useState<string[]>([]);
  const handleNavigateHotelName = (name: string, city: string) => {
    let updatedFilterParams = [...filterParams];
    if (city) updatedFilterParams.push(`${city}`);
    if (name) {
      updatedFilterParams.push(`${name}`);
    }
    setFilterParams(updatedFilterParams);
    const filterUrl = `/Coimbatore/${updatedFilterParams.join("/")}`;
    navigate(filterUrl);
  };
  const [location, setLocation] = useState('');


  useEffect(() => {
    const pathArray = window.location.pathname.split('/').filter(Boolean);
    const lastPathSegment = pathArray[pathArray.length - 1];
    setLocation(lastPathSegment);
  }, [window.location.pathname]);
  
  

  
  return (
    <>

<div className='top12'>
      Inspiration for your first order in {location}
    </div>
    <div className="filterResultFlex">
     
      {props.result &&
        props.result.map((result: any) => (
          <div
            key={result.id}
            className="wap"
            onClick={() => {
              handleNavigateHotelName(result.Name, result.Sub_Location);
            }}
          >
            <img
              className="filterResultImage"
              src={`${result.Images}`}
              alt=""
            />

            <div className="filterResultsFlex">
              <div className="resultName">{result.Name}</div>

              <div className="RratingColor">
                <div className="RratingColor1">
                  <span className="Rrat">  {result.Delievery_Rating}</span>
                
                  <div className="RsearchSvg">
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
              </div>
            </div>
            <div className="resultDishesFlex">
              <div className="resultDishes">{result.Cuisine}</div>
              <div>
                <span className="resultDishes1">{`₹${result.Cost_Per_Person} for one`}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
    </>
  );
};

export default FilterResult1;
