import React, { useEffect, useState } from 'react';
import HotelListDisplay from './HotelListDisplay';
import Modal from 'react-bootstrap/Modal';
export interface Restaurant {
  id: number;
  Name: string;
  Opening: string;
  Delievery_Rating: number;
  Dining_Rating: number;
  Images: string;
  Location: string;
  Sub_Location: string;
  Cuisine: string[];
  Working_days: string;
  Review: any[];
  Dishes: string[];
}

interface Results {
  hotels: Restaurant[];
}

const Filters = () => {
  const [HotelsList, setHotelList] = useState<Results>();

  const fetchData = async () => {
    try {
      const response = await fetch('https://zomato-nuit.onrender.com/getHotels');
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      const json = await response.json();
      console.log(json.hotels);
      setHotelList(json.hotels);
    } catch (error) {
      console.error('Error during fetch:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {HotelsList && HotelsList.hotels && <HotelListDisplay products={HotelsList.hotels} />}
    </div>
  );
};

export default Filters;
