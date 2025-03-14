import React from 'react';
import gdgLogo from '../assets/gdg.jpg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-start gap-8">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8">
              <img src={gdgLogo} alt="GDG logo" />
            </div>
            <div>
              <p className="font-medium">Google Developer Group</p>
              <p className="text-sm text-gray-400">VIT-AP</p>
            </div>
          </div>

          <div className="flex gap-16">
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Feedback Page</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Info</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Our Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Events</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <div className="h-8 w-5">
                  <img src={facebook} alt="facebook" />
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <div className="h-8 w-5">
                  <img src={instagram} alt="instagram" />
                </div>
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              <p>+91 00000 00000</p>
              <p>gdgvitap@gmail.com</p>
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              © 2025 — Copyright
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
