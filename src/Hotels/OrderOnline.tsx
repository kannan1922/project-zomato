import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./order.css";

interface Dish {
  Name: string;
  Images: string;
  Price: number;
  Rating: number;
  Variety: Variety[];
  vote: number;
}
interface Variety {
  Name: string;
  Images: string;
  Price: number;
  Rating: number;
  // Variety: string[];
  vote: number;
}
interface Review {
  comment: string;
}

interface Hotel {
  Cuisine: string[];
  Category: string;
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

function OrderOnline() {
  const [val, setVal] = useState<Hotel[]>([]);
  const [selectedDish, setSelectedDish] = useState<Dish | null>();
  const [activeButton, setActiveButton] = useState<string>("");

  const firstStickyRef = useRef<HTMLDivElement>(null);
  const [firstStickyHeight, setFirstStickyHeight] = useState<number | null>(
    null
  );
  const handleSubmitFilter = async () => {
    try {
      const url1 = window.location.href;
      const trimmedUrl = url1
        .replace("http://localhost:3000/", "")
        .replace("/order", "");
      console.log(trimmedUrl);
      const response = await axios.get(`http://localhost:4000/${trimmedUrl}`);
      console.log(response.data);
      let temp = response.data.hotel;
      console.log(temp);
      setSelectedDish(temp.Dishes.length > 0 ? temp.Dishes[0] : null);
      setVal([temp]);
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
  const [sticky, setSticky] = useState(false);
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
  useEffect(() => {
    if (firstStickyRef.current) {
      setFirstStickyHeight(firstStickyRef.current.clientHeight);
    }
  }, []);
  return (
    <div className="dishflex">
      {/* Map through Varieties first */}

      <div ref={firstStickyRef} className={`d ${sticky ? "sticky" : ""}`}>
        {val.length > 0 && (
          <div>
            {val[0].Dishes.map((dish: Dish, dishIndex: number) => (
              <>
                <div key={dishIndex} className={`hotelVariety`}>
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedDish(dish)}
                  >
                    {dish.Name}
                  </p>
                </div>
              </>
            ))}
          </div>
        )}
      </div>

      {/* Map through Dishes */}
      <div>
        {val.map((hotel: Hotel, hotelIndex: number) => (
          <div key={hotelIndex}>
            {hotel.Dishes.map((dish: Dish, dishIndex: number) => (
              <div className="dishflex" key={dishIndex}>
                <div>
                  {/* Display Variety only if the dish is selected */}
                  {selectedDish === dish && (
                    <div>
                      {dish.Variety.map(
                        (varietyName: any, varietyIndex: number) => (
                          <div className="dishflex1" key={varietyIndex}>
                            <div>
                              <img
                                className="hotelResult"
                                src={varietyName.Images}
                                alt=""
                              />
                            </div>
                            <div>
                              <span className="hotelResultText1">
                                {varietyName.Name}
                              </span>
                              <p className="hotelResultText2  ">
                                {varietyName.Price}
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderOnline;
