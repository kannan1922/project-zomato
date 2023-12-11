import React from 'react';

interface Hotel {
    id: number;
    productName: string;
    Time: string;
    Rating:number;
    productImage: string;
    price:number;
  }


interface HotelListDisplayProps {
  products: Hotel[]; 
}

const HotelListDisplay: React.FC<HotelListDisplayProps> = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.productName}</h3>
          <p>Price: {product.price}</p>
          <img src={product.productImage}/>
        </div>
      ))}   987987y9899886iujk
    </div>
  );
};

export default HotelListDisplay;

