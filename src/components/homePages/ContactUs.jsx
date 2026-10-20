import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
const ContactUs = () => {
  return (
     
        //  {/* Contact Us Section */}
      <section className="py-12 px-4 md:px-12 max-w-7xl mx-auto ">
      <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6 border-b pb-2">Contact Us</h2>
      <div className="space-y-3 text-gray-700 text-sm md:text-base">
        <p className="flex items-start gap-2">
          <FaMapMarkerAlt className="text-red-600 mt-1 flex-shrink-0" />
          <span><strong className="text-black">Office & Factory:</strong> Ramarbag, Fatullah, Narayanganj-1420</span>
        </p>
        <p className="flex items-center gap-2">
          <FaPhoneAlt className="text-success flex-shrink-0" />
          <span><strong className="text-black">Mobile:</strong> 01973033021, 01999920458</span>
        </p>
        <p className="flex items-center gap-2">
          <FaEnvelope className="text-success flex-shrink-0" />
          <span><strong className="text-black">Email:</strong> info@alaminpower.com, alamin.power59@gmail.com</span>
        </p>
        <p className="flex items-center gap-2">
          <FaGlobe className="text-info flex-shrink-0" />
          <span><strong className="text-black">Web:</strong> www.alaminpower.com</span>
        </p>
      </div>
    </section>
  )
}

export default ContactUs
