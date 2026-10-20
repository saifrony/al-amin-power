import React from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

const ServicePage = () => {
  const accessories = [
    "High Voltage plug with connectors.",
    "Oil Level Indicator.",
    "Pressed-Still Radiator.",
    "Oil Drain Plug.",
    "Earthling Terminal.",
    "Name Plate with connection diagram",
    "Vibration Damper.",
    "Marshalling box with accessories for"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Breadcrumb Header Banner */}
        <div className="bg-[#F6F6F6] py-8 px-6 border-b border-[#d2d3d4]">
          <div className="text-[#333333]  max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-xl"> Installation & After Sales Service</h1>
            <div className="breadcrumbs text-sm">
              <ul>
                <li><Link href="/" className="flex items-center gap-1"><Home size={14} /> Home</Link></li>
                <li> Installation & After Sales Service</li>
              </ul>
            </div>
          </div>
        </div>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-6 p-20  space-y-12">
        
        {/* Installation & After Sales Service Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide text-gray-900 border-b pb-2 uppercase text-sm">
            Installation & After Sales Service
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            We have excellent team with service vehicle, required handling equipment, tools and test equipment to provide possible best services to our valued clients at door steps. We also have a strong team of dedicated members to supervise installation, testing, commissioning and provide standard service to ensure 100% client&apos;s satisfaction.
          </p>
        </section>

        {/* Spares and Accessories Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide text-gray-900 border-b pb-2 uppercase text-sm">
            Spares and Accessories
          </h2>
          <p className="text-gray-600">
            On request the following accessories can be supplied:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-5 list-disc text-gray-600">
            {accessories.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Warranty Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-wide text-gray-900 border-b pb-2 uppercase text-sm">
            Warranty
          </h2>
          <p className="text-gray-600 leading-relaxed text-base">
            We provide warranty on the performance of our manufactured equipment for any defect of design, workmanship and material for a period of 18 months from the date of despatch.
          </p>
        </section>

      </main>
    </div>
  )
}

export default ServicePage;
