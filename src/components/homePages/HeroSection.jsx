// import React from 'react'
// import hero1 from '../../../public/assets/al-amin-img/1.jpg';
// import hero2 from '../../../public/assets/al-amin-img/2.jpg';
// import hero3 from '../../../public/assets/al-amin-img/3.jpg';
// const HeroSection = () => {
//   return (
//     // {/* Hero / Slider Section */}
//      <div className="carousel w-full h-[300px] md:h-[450px]">
//       <div id="slide1" className="carousel-item relative w-full">
//         <div className="w-full bg-slate-800 flex items-center justify-center text-white text-2xl font-bold">
//           {/* Insert background image matching transformer setups */}
//           <div className="absolute inset-coerce bg-black/40 flex items-center justify-center">
//              <p className="text-center px-4">Industrial Transformers & Engineering Solutions</p>
//           </div>
//         </div>
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide3" className="btn btn-circle btn-sm bg-black/50 text-white border-none">❮</a>
//           <a href="#slide2" className="btn btn-circle btn-sm bg-black/50 text-white border-none">❯</a>
//         </div>
//       </div>
//       <div id="slide2" className="carousel-item relative w-full">
//         <div className="w-full bg-slate-700 flex items-center justify-center text-white text-2xl font-bold">
//           <p>Switchgear & Heavy Machinery Production</p>
//         </div>
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide1" className="btn btn-circle btn-sm bg-black/50 text-white border-none">❮</a>
//           <a href="#slide3" className="btn btn-circle btn-sm bg-black/50 text-white border-none">❯</a>
//         </div>
//       </div>
//       <div id="slide3" className="carousel-item relative w-full">
//         <div className="w-full bg-slate-900 flex items-center justify-center text-white text-2xl font-bold">
//           <p>Quality Workmanship Since 1959</p>
//         </div>
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide2" className="btn btn-circle btn-sm bg-black/50 text-white border-none">❮</a>
//           <a href="#slide1" className="btn btn-circle btn-sm bg-black/50 text-white border-none">❯</a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeroSection

// import React from 'react';
// import Image from 'next/image';
// import hero1 from '../../../public/assets/al-amin-img/1.jpg';
// import hero2 from '../../../public/assets/al-amin-img/2.jpg';
// import hero3 from '../../../public/assets/al-amin-img/3.jpg';

// const HeroSection = () => {
//   return (
//     <div className="carousel w-full h-[300px] md:h-[450px] shadow-md">
//       {/* Slide 1 */}
//       <div id="slide1" className="carousel-item relative w-full">
//         <Image 
//           src={hero1} 
//           alt="Industrial Transformers" 
//           fill 
//           className="object-cover"
//           priority 
//         />
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//           <p className="text-white text-xl md:text-3xl font-bold text-center px-4 drop-shadow-md">
//             Industrial Transformers & Engineering Solutions
//           </p>
//         </div>
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide3" className="btn btn-circle btn-sm bg-black/50 text-white border-none">❮</a>
//           <a href="#slide2" className="btn btn-circle btn-sm bg-black/50 text-white border-none">❯</a>
//         </div>
//       </div>

//       {/* Slide 2 */}
//       <div id="slide2" className="carousel-item relative w-full">
//         <Image 
//           src={hero2} 
//           alt="Switchgear & Heavy Machinery" 
//           fill 
//           className="object-cover" 
//         />
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//           <p className="text-white text-xl md:text-3xl font-bold text-center px-4 drop-shadow-md">
//             Switchgear & Heavy Machinery Production
//           </p>
//         </div>
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide1" className="btn btn-circle btn-sm bg-black/50 text-white border-none">❮</a>
//           <a href="#slide3" className="btn btn-circle btn-sm bg-black/50 text-white border-none">❯</a>
//         </div>
//       </div>

//       {/* Slide 3 */}
//       <div id="slide3" className="carousel-item relative w-full">
//         <Image 
//           src={hero3} 
//           alt="Quality Workmanship" 
//           fill 
//           className="object-cover" 
//         />
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//           <p className="text-white text-xl md:text-3xl font-bold text-center px-4 drop-shadow-md">
//             Quality Workmanship Since 1959
//           </p>
//         </div>
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide2" className="btn btn-circle btn-sm bg-black/50 text-white border-none">❮</a>
//           <a href="#slide1" className="btn btn-circle btn-sm bg-black/50 text-white border-none">❯</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import hero1 from '../../../public/assets/al-amin-img/1.jpg';
import hero2 from '../../../public/assets/al-amin-img/2.jpg';
import hero3 from '../../../public/assets/al-amin-img/3.jpg';

const slides = [
  {
    image: hero1,
    title: "Industrial Transformers & Engineering Solutions",
  },
  {
    image: hero2,
    title: "Switchgear & Heavy Machinery Production",
  },
  {
    image: hero3,
    title: "Quality Workmanship Since 1959",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // অটো স্লাইড পরিবর্তনের জন্য (প্রতি ৪ সেকেন্ড পর পর ছবি বদলাবে)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden shadow-md bg-black">
      {/* Slides with Fade Animation */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Dark Overlay */}
          
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-x-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
        <button 
          onClick={prevSlide} 
          className="btn btn-circle btn-sm bg-black/50 hover:bg-black/80 text-white border-none cursor-pointer"
        >
          ❮
        </button>
        <button 
          onClick={nextSlide} 
          className="btn btn-circle btn-sm bg-black/50 hover:bg-black/80 text-white border-none cursor-pointer"
        >
          ❯
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
