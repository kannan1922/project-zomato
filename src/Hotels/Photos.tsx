import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function Photos() {
  const [img, setImg] = useState<string[]>([]);
  const handleSubmitFilter = async () => {
    try {
      const url1 = window.location.href;
      const trimmedUrl = url1
        .replace("http://localhost:3000/", "")
        .replace("/photos", "");
      console.log(trimmedUrl);

      const response = await axios.get(`http://localhost:4000/${trimmedUrl}`);
      console.log(response.data);
      let temp = response.data.hotel;
      setImg([temp]);
    } catch (error: any) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      console.log("byeee");
      await handleSubmitFilter();
    };

    fetchData();
  }, []);
  return (
    <div>
      {img.map((restaurant: any) => (
        <div className="restImageWrap1">
          <div>
            <div>
              <img className="restImage1" src={restaurant.Images[0]} alt="" />
            </div>
            <div>
              <img className="restImageA1" src={restaurant.Images[1]} alt="" />
            </div>
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
            <div>
              <img className="restImage1" src={restaurant.Images[3]} alt="" />
            </div>
            <div>
              <img className="restImageA1" src={restaurant.Images[0]} alt="" />
            </div>
          </div>
          <div>
            <div>
              <img className="restImage1" src={restaurant.Images[1]} alt="" />
            </div>
            <div>
              <img className="restImageA1" src={restaurant.Images[2]} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Photos;
