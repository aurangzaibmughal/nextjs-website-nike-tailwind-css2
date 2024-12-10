import React from 'react'

const Contect = () => {
  return (
    <section className="contact-form border max-w-lg max-auto my-20 mx-20 p-8 bg-[#B9FF66] shadow-md rounded-md">
      <h2 className="text-4xl font-bold mb-6 text-center" data-aos= "fade-up">Contact Us</h2>
      <form>
        <input type="text" placeholder='Full Name' className='w-full mb-4 px-4 py-2 border border-gray-900 rounded-md' required />
        <input type="email" placeholder='Email Address' className='w-full mb-4 px-4 py-2 border border-gray-900 rounded-md' required />
        <input type="text" placeholder='Phone Number' className='w-full mb-4 px-4 py-2 border border-gray-900 rounded-md' required />
        <textarea placeholder='Your Meassge' className='w-full mb-4 px-4 py-2 border border-gray-900 rounded-md' rows={8} required/>
        <button type='submit' className='w-full text-gray-950 bg-[#596623] hover:bg-green-600 px-4 py-2 rounded-md'>Send Massage</button>
      </form>
    </section>
  );
};

export default Contect;
