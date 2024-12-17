import React from "react";
import Image from 'next/image';

const Shoes = () => {
  const shoesData = [
    {id: 1, name: "Nike Alamy", description: "Flexible Shoes", price: 350, img: "/image1.jpeg"},
    {id: 2, name: "Nike VIR", description: "Jordan Shoes", price: 360, img: "/download1.jpg"},
    {id: 3, name: "Nike Rollred", description: "Loin Shoes", price: 400, img: "/images (14).jpeg"},
    {id: 4, name: "Nike Sprender Air", description: "Jence Shoes", price: 250, img: "/images (13).jpeg"},
    {id: 5, name: "Nike Fline", description: "Jogging Shoes", price: 380, img: "/images (6).jpeg"},
    {id: 6, name: "Nike Wakasoco", description: "Classic Shoes", price: 290, img: "/images (12).jpeg"},
  ];

  return (
    <div className="shoes grid grid-cols-1 md:grid-cols-3 gap-8 px-10 my-5">
      {shoesData.map(shoe => (
        <div key={shoe.id} className="shoes-card bg-[#B9FF66] p-6 mt-2 rounded-md shadow-md text-center">
          <h2 className="mt-2 text-2xl font-bold">{shoe.name}</h2>
          <p className="text-blue-950 mb-2">{shoe.description}</p>
          <p className="font-light mt-2">Price: ${shoe.price}</p>
          
          <button className="mt-2 mb-2 px-4 py-2 bg-green-500 text-gray-900 rounded-md">Add to Cart</button>
          <Image className="w-full rounded-md transition-transform duration-200 transform hover:scale-110"
            src={shoe.img}
            alt={shoe.name}
            width={300} // Set appropriate width
            height={300} // Set appropriate height
          />
        </div>
      ))}
    </div>
  );
};

export default Shoes;
