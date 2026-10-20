import Image from 'next/image';
import React from 'react'
import brandLogo from '../../../public/assets/al-amin-img/Brand_logo.jpg';

export default function BrandsSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12 font-serif text-gray-800">
        {/* Section Heading */}
        <h2 className=" text-2xl sm:text-3xl  mb-8 text-gray-800">
          Brands We Work With
        </h2>

        {/* Single Image Container */}
        <div className="relative w-full h-[250px] sm:h-[400px] rounded-lg overflow-hidden shadow-md border bg-gray-50">
          <Image 
            src={brandLogo} // আপনার প্রজেক্টের পাথ অনুযায়ী ইমেজ পাথ ঠিক করে নেবেন
            alt="Brands We Work With" 
            fill 
            className=""
          />
        </div>
      </div>
    </section>
  );
}