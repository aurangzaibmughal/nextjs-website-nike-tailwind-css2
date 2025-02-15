"use client"; // Indicates that this component is client-side rendered
import 'aos/dist/aos.css'; // Importing AOS styles
import AOS from 'aos'; // Importing AOS library
import React, { useEffect } from 'react'; // Importing React and useEffect hook

const HomeContent = () => {
  // Use effect to initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <section 
      className="hero h-screen flex items-center bg-cover bg-center" 
      style={{ backgroundImage: "url('/background.jpg')" }} // Background image
    >
      <div className="pl-0 md:pl-16 text-white text-center">
        <h1 
          className="text-6xl font-bold drop-shadow-md" 
          data-aos="fade-up" // AOS animation attribute
        >
          Welcome to Our World Nike
        </h1>
        <p className="text-3xl mt-4">Your One-stop Shop for the best shoes</p>
        <br />
        <button 
          className="text-blue-950 font-bold py-2 px-8 rounded-md bg-[#B9FF66] hover:bg-green-600 transition duration-200" 
          aria-label="Shop Now" // Accessibility improvement
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HomeContent;
// "use client";
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import React from 'react';
// import { useEffect } from 'react';


// const HomeContent = () => {
//   useEffect(() => {
//     AOS.init({duration: 1000,once: true,});}, []);
// return (
//   <section className="hero h-screen flex items-center bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')"}}>
//     <div className="pl-0 md:pl-16 text-white text-center">
//       <h1 className="text-6xl font-bold drop-shadow-md" data-aos="fade-up">Welcome to Our World Nike</h1>
//         <p className="text-3xl mt-4">Your One-stop Shop for the best shoes</p>
//         <br />
//         <button className="text-blue-950 font-bold py-2 px-8 rounded-md bg-[#B9FF66] hover:bg-green-600 transition duration-200">Shop Now</button>
//     </div>
//   </section>

//   );
// };

// export default HomeContent;




