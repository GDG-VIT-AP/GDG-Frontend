// Purpose : Contact section in homepage
// Contributor : Aryan Puri (23BCE8560)


import React from "react";
import insta from '../assets/insta.svg';
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import img1 from '../assets/p 1.svg';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center my-32 md:my-60 w-full px-5">
      <h2 className="text-3xl font-bold flex items-center gap-3 mb-12 md:mb-16 lg:mb-16">
        <img src={img1} className="w-12" /> Contact Us
      </h2>

      {/* contact div */}
      <div className="flex flex-col md:flex-row items-center gap-16 shadow-lg shadow-blue-300/30 bg-zinc-50 p-8 rounded-4xl max-w-5xl w-full">
        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-2xl border-2 border-black shadow-md w-full md:w-1/2 flex flex-col flex-1 h-full">
          <h3 className="text-xl font-bold text-center mb-4">Get in Touch</h3>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              className="p-3 border-2 border-black text-lg rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border-2 border-black text-lg rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="p-3 border-2 border-black text-lg rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
            ></textarea>
            <button className="bg-blue-500 text-white py-2 font-bold border-2 border-black text-lg rounded-lg hover:bg-blue-600 transition cursor-pointer">
              Submit
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full h-100 md:w-1/2 border-2 border-black rounded-2xl">
          <iframe
            title="Google Map"
            className="w-full rounded-2xl border object-cover h-full border-gray-300"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.574776290203!2d80.496621575455!3d16.497055384246142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f27d40f21c55%3A0x1490eacd54859850!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1743700090290!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Icons */}
      <div className="flex gap-5 mt-12 text-gray-600">
        <div className="h-12 w-12 border-2 border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100">
          <img src={insta} className="h-7 w-7 object-contain cursor-pointer" />
        </div>

        <div className="h-12 w-12 border-2 border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
          <img src={linkedin} className="h-10 w-10 object-contain cursor-pointer" />
        </div>

        <div className="h-12 w-12 border-2 border-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
          <img src={twitter} className="h-6 w-6 object-contain cursor-pointer" />
        </div>
      </div>

    </div>
  );
};

export default Contact;
