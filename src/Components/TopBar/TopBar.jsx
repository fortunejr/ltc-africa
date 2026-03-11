import React from 'react';
import { 
  Youtube, 
  Facebook, 
  Linkedin, 
  Instagram, 
  Mail, 
  Clock 
} from 'lucide-react';
import {  FaXTwitter } from 'react-icons/fa6';

const TopBar = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch text-white text-sm font-medium">
      {/* Left Section: Social Media Icons */}
      <div className="bg-customGreen px-6 py-3 flex items-center justify-center gap-4">

        <a href="#" className="hover:opacity-80 transition-opacity font-bold"><FaXTwitter /></a>
        <a href="#" className="hover:opacity-80 transition-opacity"><Facebook size={18} /></a>
        <a href="#" className="hover:opacity-80 transition-opacity"><Linkedin size={18} /></a>
        <a href="#" className="hover:opacity-80 transition-opacity"><Instagram size={18} /></a>
      </div>

      {/* Middle/Right Section: News and Info */}
      <div className="bg-customBlue flex-grow flex flex-col md:flex-row items-center justify-between px-6 py-3 gap-4">
        
        {/* News Ticker Area */}
        <div className="flex items-center gap-2 overflow-hidden">
         
        </div>

        {/* Contact and Hours */}
        <div className="flex flex-wrap items-center gap-6">
          <a href="mailto:info@nddc.gov.ng" className="flex items-center gap-2 hover:text-[#2ecc71] transition-colors">
            <Mail size={16} className="text-[#2ecc71]" />
            <span>recycling@ltcafrica.com</span>
          </a>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-[#2ecc71]" />
            <span>Open Hours: Mon - Fri 8.00 am - 5.00 pm</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TopBar;