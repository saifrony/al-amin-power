import React from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


const Topbar = () => {
  return (
      <div className='border-b  border-gray-200 '>
    <div className=" border-t-4 border-[#a0ce4e] text-[#747474] text-sm  md:text-xl lg:text-xl py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-1 ">
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <span className="flex items-center gap-1.5">
            <FaPhoneAlt className="text-success" /> Call Us Today! 
            <a href="tel:01973033021" className="hover:underline">01973033021,</a> 
            <a href="tel:01959793745" className="hover:underline">01999920458</a>
          </span>
        </div>
        |
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end ">
          <span className="flex items-center gap-1.5">
            <FaEnvelope className="text-success" /> 
            <a href="mailto:info@alaminpower.com" className="hover:underline">info@alaminpower.com,</a> 
            <a href="mailto:alamin.power59@gmail.com" className="hover:underline">alamin.power59@gmail.com</a>
          </span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Topbar

// import React from 'react'

// export const Topbar = () => {
//   return (
//     // {/* Top Green Bar & Border */}
//       <div className=" border-t-4 border-[#a0ce4e] text-[#747474] py-4 px-4 text-xs sm:text-sm font-medium">
//         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center gap-1">
//           <div className='border-b-1 border-[#747474] '>
//           <span>Call Us Today! 01973033021, 01959793745 | info@alaminpower.com, alamin.power59@gmail.com</span>
//           </div>
//         </div>
//       </div>
//   )
// }