import React from "react";
import Image from 'next/image';

const Shoes = () => {
  const shoesData = [
    {
      id: "1",
      name: "Nike Alamy",
      description: "Flexible Shoes",
      price: 350,
      Image: "/image-1.jpeg",
    },
    {
      id: "2",
      name: "Nike VIR",
      description: "Jordan Shoes",
      price: 360,
      Image: "/download (1).jpg",
    },
    {
      id: "3",
      name: "Nike Rollred",
      description: "Loin Shoes",
      price: 400,
      Image: "/images (14).jpeg",
    },
    {
      id: "4",
      name: "Nike Sprender Air",
      description: "Jence Shoes",
      price: 250,
      Image: "/images (6).jpeg",
    },
    {
      id: "5",
      name: "Nike Fline",
      description: "Jogging Shoes",
      price: 380,
      Image: "/images (13).jpeg",
    },
    {
      id: "6",
      name: "Nike Wakasoco",
      description: "Classic Shoes",
      price: 290,
      Image: "/images (12).jpeg",
    },
  ];

  return (
    <div className="shoes grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
      {shoesData.map((shoes) => (
        <div
          key={shoes.id}
          className="shoes-card bg-[#B9FF66] p-5 rounded-md shadow-md text-center"
        >
          <Image
            src={shoes.Image}
            alt={shoes.name}
            className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"
          />
          <h3 className="mt-4 text-2xl font-bold">{shoes.name}</h3>
          <p className="text-gray-500">{shoes.description}</p>
          <div className="price">${shoes.price}</div>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shoes;