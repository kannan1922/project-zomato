import React from 'react';

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

interface HotelListDisplayProps {
  products: Restaurant[] | undefined; 
}

const HotelListDisplay: React.FC<HotelListDisplayProps> = ({ products }) => {
  return (
    <div>
      {products ? (
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.Name}</h3>
            <p>Price: {product.Location}</p>
            <img src={product.Images}/>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HotelListDisplay;
