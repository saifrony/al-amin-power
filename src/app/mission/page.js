import React from 'react'
  import Link from 'next/link';
import { Phone, Mail, Menu, Home, Target, Eye, ShieldCheck, Cpu, Wrench } from 'lucide-react';

const MissionVisionPage = () => {
  return (
   <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
    
     {/* Breadcrumb Header Banner */}
        <div className="bg-[#F6F6F6] py-8 px-6 border-b border-[#d2d3d4]">
          <div className="text-[#333333]  max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-xl">Mission & Vision</h1>
            <div className="breadcrumbs text-sm">
              <ul>
                <li><Link href="/" className="flex items-center gap-1"><Home size={14} /> Home</Link></li>
                <li>Mission & Vision</li>
              </ul>
            </div>
          </div>
        </div>


      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto w-full p-6 sm:p-10 my-6 space-y-10">
        
        {/* Mission Section */}
        <section className="card bg-base-100 shadow-xl border border-base-200 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6 border-b pb-4">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <Target size={28} />
            </div>
            <h2 className="text-2xl tracking-wide">Mission</h2>
          </div>
          <ul className="space-y-4 text-base sm:text-lg text-base-content/80 list-disc pl-5">
            <li className="leading-relaxed">
              Company’s effectors will be to provide quality product and specific need of the consumers.
            </li>
            <li className="leading-relaxed">
              To provide World Class & cost effective Power and Distribution Transformer and engineering solution to our valued customers including related equipment, infrastructure and technical services.
            </li>
            <li className="leading-relaxed">
              To provide prompt engineering solution & efficient after-sales service to our valued customers.
            </li>
          </ul>
        </section>

        {/* Vision Section */}
        <section className="card bg-base-100 shadow-xl border border-base-200 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6 border-b pb-4">
            <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
              <Eye size={28} />
            </div>
            <h2 className="text-2xl tracking-wide">Vision</h2>
          </div>
          <p className="text-base sm:text-lg text-base-content/80 leading-relaxed">
            We shall be recognized as a World Class Power & Distribution Transformer & related equipment manufacturer as well as Power support Service provider in this country.
          </p>
        </section>

      </main>
    </div>
  )
}

export default MissionVisionPage
