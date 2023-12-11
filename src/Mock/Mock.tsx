export interface Hotel {
    id: number;
    productName: string;
    Time: string;
    Rating:number;
    productImage: string;
    price:number;
  }

  interface Results {
    hotels: Hotel[];
  }
export const PRODUCTS:Hotel[]= [
    {
      id: 1,
      productName: "SS Hyderabad Briyani",
      price: 120,
      Time:'30min',
      Rating:4.5,
      productImage: 'https://b.zmtcdn.com/data/pictures/2/19845882/ab75136294c7efb0718ef311d17896f6_o2_featured_v2.jpg',
    },
    {
      id: 2,
      productName: "Pizza Hut",
      price: 190,
      Time:'30min',
      Rating:4.5,
      productImage: 'https://b.zmtcdn.com/data/pictures/chains/5/3000685/1fe7af1cf8083de70a0e31141e035503_o2_featured_v2.jpg',
    },
    {
      id: 3,
      productName: "Ambur Star Briyani",
      price: 260,
      Time:'30min',
      Rating:4.5,
      productImage: 'https://b.zmtcdn.com/data/pictures/chains/0/3002360/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg',
    },
    {
      id: 4,
      productName: "Meat  and Eat",
      price: 899,
      Time:'30min',
      Rating:4.5,
      productImage: 'https://b.zmtcdn.com/data/pictures/chains/0/3000040/851effc3156d49ce82888882ad966f27_o2_featured_v2.jpg',
    },
    {
      id: 5,
      productName: " Galaxy M31",
      price: 215,
      Time:'30min',
      Rating:4.5,
      productImage: 'https://b.zmtcdn.com/data/pictures/chains/3/3000293/a67239e7f0a96f17e2b376ddf1c52b62_o2_featured_v2.jpg',
    },
    {
      id: 6,
      productName: "Nightout",
      price: 130,
      Time:'30min',
      Rating:4.5,
      productImage: 'https://b.zmtcdn.com/data/pictures/chains/8/3000378/93f0ba995d6eddf1eede9592b02dcd9c_o2_featured_v2.jpg',
    },
    {
      id: 7,
      productName: "Salem RR Briyani",
      price: 520,
      Time:'30min',
      Rating:4.5,
      productImage: 'https://b.zmtcdn.com/data/pictures/chains/1/19126021/d3814341a7d4ad8a87d836f19f9a1ce9_o2_featured_v2.jpg',
    },
    {
      id: 8,
      productName: "FB Cakes",
      price: 400,
      Time:'30min',
      Rating:4.5,
      productImage: 'https://b.zmtcdn.com/data/pictures/chains/6/19361036/c8016dba291c8a8f32aad6173da7e1d3_o2_featured_v2.jpg',
    },
    {
      id: 9,
      productName: "Hotel Maa",
      price: 420,
      Time:'30min',
      Rating:4.5,
      productImage: 'https://b.zmtcdn.com/data/pictures/chains/1/3000641/ec17531de5fc0a714256ead538576057_o2_featured_v2.jpg    ',
    }
  ];