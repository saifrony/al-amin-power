import React from 'react'
import Link from 'next/link';
import { Phone, Mail, Menu, Home, Target, Eye, ShieldCheck, Cpu, Wrench } from 'lucide-react';
import lowTensionLogo from '../../../public/assets/al-amin-img/L.T.-Panel-Board.jpg';
import Image from 'next/image';

const LowTensionSwitchgearPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">

      {/* Breadcrumb Header Banner */}
      <div className="bg-[#F6F6F6] py-8 px-6 border-b border-[#d2d3d4]">
        <div className="text-[#333333]  max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-xl">Low Tension Switchgear</h1>
          <div className="breadcrumbs text-sm">
            <ul>
              <li><Link href="/" className="flex items-center gap-1"><Home size={14} /> Home</Link></li>
              <li>Low Tension Switchgear</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow max-w-6xl mx-auto w-full  p-6 sm:p-10 my-6 space-y-10">


        {/* Page Title Header */}
        {/* <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-base-content uppercase">
            Low Tension Switchgear
          </h1>
          <div className="text-xs sm:text-sm text-base-content/60 breadcrumbs">
            <ul>
              <li><a href="https://alaminpower.com/">Home</a></li>
              <li>Low Tension Switchgear</li>
            </ul>
          </div>
        </div> */}

        {/* Page Title */}
        {/* <div className="border-b pb-4">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-serif text-gray-800 tracking-tight uppercase">
            Power & Distribution Transformer
          </h1>
        </div> */}

        {/* Intro Description with Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4 text-sm sm:text-base leading-relaxed text-base-content/80">
            <p>
              APE-Low Tension Switchgear (415V, 3-50Hz) conform to IEC – 947-2, BS, DIN &amp; ANSI standard and equipped with Circuit Breaker, Hard Drawn Electrolytic Copper Bus-bar, Ammeter, Voltmeter, Selector Switch &amp; Indicating Lamps.
            </p>
            <p>
              Totally enclosed panels are designed to withstand the mechanical &amp; thermal stress produced by current. All live parts are adequately protected against accidental touching. Interior wiring with minimum cross sectional area of 0.75mm2 is accommodated in plastic conduits. The LT panel boards are so designed that the cables are fed in and split and removable type to facilitate cable entry having cable grommet.
            </p>
            <p>
              The LT panel components are imported from America, Germany, France, Italy, UK, &amp; Japan or as per the choice of the valued customers.
            </p>
          </div>

          {/* LT Panel Image Container */}
          <div className="card bg-base-200/50 border border-base-300 p-4 shadow-sm flex flex-col items-center justify-center">
            <div className="relative w-full h-64 sm:h-80 bg-base-300 rounded-lg flex items-center justify-center text-base-content/50 font-medium text-center p-4">
            <Image
                                                    src={lowTensionLogo} // public folder-e thaka apnar logo-er path
                                                    alt="Low Tension Switchgear Logo"   
                                                />
            </div>
          </div>
        </div>

        {/* Technical Specification Section */}
        <section className="space-y-4 pt-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-primary">
            Technical Specification for LT Switchgear
          </h2>

          {/* Responsive Table Container */}
          <div className="overflow-x-auto border border-base-300 rounded-xl shadow-sm bg-base-100">
            <table className="table table-zebra table-xs sm:table-sm md:table-md w-full text-center">
              <thead>
                <tr className="bg-base-200 text-base-content font-bold">
                  <th className="text-left">MODEL</th>
                  <th>CAPACITY</th>
                  <th>RATED VOLTAGE</th>
                  <th>NO.OF BUSBAR</th>
                  <th>BUSBAR MATERIAL</th>
                  <th>DEGREE OF PROTECTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-left">APE 100LT</td>
                  <td>100A</td>
                  <td>415V</td>
                  <td>5</td>
                  <td>Copper</td>
                  <td>IP4X</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">APE 200LT</td>
                  <td>200A</td>
                  <td>415V</td>
                  <td>5</td>
                  <td>Copper</td>
                  <td>IP4X</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">APE 250LT</td>
                  <td>250A</td>
                  <td>415V</td>
                  <td>5</td>
                  <td>Copper</td>
                  <td>IP4X</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">APE 315LT</td>
                  <td>315A</td>
                  <td>415V</td>
                  <td>5</td>
                  <td>Copper</td>
                  <td>IP4X</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">APE 400LT</td>
                  <td>400A</td>
                  <td>415V</td>
                  <td>5</td>
                  <td>Copper</td>
                  <td>IP4X</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">APE 500LT</td>
                  <td>500A</td>
                  <td>415V</td>
                  <td>5</td>
                  <td>Copper</td>
                  <td>IP4X</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">APE 630LT</td>
                  <td>630A</td>
                  <td>415V</td>
                  <td>5</td>
                  <td>Copper</td>
                  <td>IP4X</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">APE 800LT</td>
                  <td>800A</td>
                  <td>415V</td>
                  <td>5</td>
                  <td>Copper</td>
                  <td>IP4X</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">APE 1000LT</td>
                  <td>1000A</td>
                  <td>415V</td>
                  <td>5</td>
                  <td>Copper</td>
                  <td>IP4X</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">APE 1600LT</td>
                  <td>1600A</td>
                  <td>415V</td>
                  <td>5</td>
                  <td>Copper</td>
                  <td>IP4X</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">APE 2000LT</td>
                  <td>2000A</td>
                  <td>415V</td>
                  <td>5</td>
                  <td>Copper</td>
                  <td>IP4X</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">APE 2500LT</td>
                  <td>2500A</td>
                  <td>415V</td>
                  <td>5</td>
                  <td>Copper</td>
                  <td>IP4X</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">APE 3000LT</td>
                  <td>3000A</td>
                  <td>415V</td>
                  <td>5</td>
                  <td>Copper</td>
                  <td>IP4X</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">APE 3150LT</td>
                  <td>3150A</td>
                  <td>415V</td>
                  <td>5</td>
                  <td>Copper</td>
                  <td>IP4X</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">APE 4000LT</td>
                  <td>4000A</td>
                  <td>415V</td>
                  <td>5</td>
                  <td>Copper</td>
                  <td>IP4X</td>
                </tr>
                <tr>
                  <td className="font-semibold text-left">APE 5000LT</td>
                  <td>5000A</td>
                  <td>415V</td>
                  <td>5</td>
                  <td>Copper</td>
                  <td>IP4X</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export default LowTensionSwitchgearPage
