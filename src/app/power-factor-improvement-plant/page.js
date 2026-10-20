import Image from 'next/image';
import powerLogo from '../../../public/assets/al-amin-img/P.F.I.-Panel-Board.jpg';
import Link from 'next/link';
import { Phone, Mail, Menu, Home, Target, Eye, ShieldCheck, Cpu, Wrench } from 'lucide-react';

const PowerFactorImprovementPage = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col bg-base-100 text-base-content">

        {/* Breadcrumb Header Banner */}
        <div className="bg-[#F6F6F6] py-8 px-6 border-b border-[#d2d3d4]">
          <div className="text-[#333333]  max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-xl">Power Factor Improvement Plant</h1>
            <div className="breadcrumbs text-sm">
              <ul>
                <li><Link href="/" className="flex items-center gap-1"><Home size={14} /> Home</Link></li>
                <li>Power Factor Improvement Plant</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-grow max-w-7xl mx-auto w-full  p-6 sm:p-10 my-6 space-y-10">
          {/* Page Title */}
          <div className="border-b pb-4">
            <h1 className="text-2xl sm:text-3xl md:text-3xl font-serif text-gray-800 tracking-tight uppercase">
              Power Factor Improvement Plant
            </h1>
          </div>

          {/* Intro Description with Image Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-4 text-sm sm:text-base leading-relaxed text-base-content/80">
              <p>
                APE-Power Factor Improvement Plant (PFI) conforming to IEC – 439-2, VDE, DIN &amp; ANSI standards is of steel clad, dust &amp; vermin proof, free-standing, floor mounting indoor type. The centrally controlled automatic PFI plant is of compact design and suitable for operation in 6/12 steps in the system for automatic control of the reactive power.
              </p>
              <p>
                The Control unit is an integral part of the PFI plant comprising of Current Transformer of adequate rating. Automatic Power Factor Correction Relay to keep the power factor almost constant at 0.98 &amp; independent of load fluctuations having in built digital power factor meter, indicating lamps, ON/OFF switches, switching step Indicator etc. are included.
              </p>
            </div>

            {/* PFI Panel Image Container */}
            <div className="card bg-base-200/50 border border-base-300 p-4 shadow-sm flex flex-col items-center justify-center">
              <div className="relative w-full h-64 sm:h-80 bg-base-300 rounded-lg flex items-center justify-center text-base-content/50 font-medium text-center p-4">

                <Image
                  src={powerLogo} // public folder-e thaka apnar logo-er path
                  alt="Power Factor Improvement Plant Logo"
                />
              </div>
            </div>
          </div>

          {/* Technical Specification Section */}
          <section className="space-y-4 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-primary">
              Technical Specification for Power Factor Improvement
            </h2>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto border border-base-300 rounded-xl shadow-sm bg-base-100">
              <table className="table table-zebra table-xs sm:table-sm md:table-md w-full text-center">
                <thead>
                  <tr className="bg-base-200 text-base-content font-bold">
                    <th className="text-left">MODEL</th>
                    <th>CAPACITY</th>
                    <th>RATED VOLTAGE</th>
                    <th>OVER CURRENT</th>
                    <th>DEGREE OF PROTECTION</th>
                    <th>SWITCHING STEP</th>
                    <th>CT RATIO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 40</td>
                    <td>40 KVAr</td>
                    <td>415 V</td>
                    <td>1.3Xln</td>
                    <td>IP4X</td>
                    <td>4</td>
                    <td>150/5A</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 60</td>
                    <td>60 KVAr</td>
                    <td>415 V</td>
                    <td>1.3Xln</td>
                    <td>IP4X</td>
                    <td>5</td>
                    <td>250/5A</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 80</td>
                    <td>80 KVAr</td>
                    <td>415 V</td>
                    <td>1.3Xln</td>
                    <td>IP4X</td>
                    <td>5</td>
                    <td>315/5 A</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 100</td>
                    <td>100 KVAr</td>
                    <td>415 V</td>
                    <td>1.3Xln</td>
                    <td>IP4X</td>
                    <td>6</td>
                    <td>400/5A</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 125</td>
                    <td>125 KVAr</td>
                    <td>415 V</td>
                    <td>1.3Xln</td>
                    <td>IP4X</td>
                    <td>5</td>
                    <td>500/5A</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 160</td>
                    <td>160 KVAr</td>
                    <td>415 V</td>
                    <td>1.3Xln</td>
                    <td>IP4X</td>
                    <td>5</td>
                    <td>630/5A</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 200</td>
                    <td>200 KVAr</td>
                    <td>415 V</td>
                    <td>1.3X In</td>
                    <td>IP4X</td>
                    <td>5</td>
                    <td>800/5A</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 250</td>
                    <td>150 KVAr</td>
                    <td>415 V</td>
                    <td>1.3Xln</td>
                    <td>IP4X</td>
                    <td>6</td>
                    <td>1000/5A</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 300</td>
                    <td>300 KVAr</td>
                    <td>415 V</td>
                    <td>1.3Xln</td>
                    <td>IP4X</td>
                    <td>6</td>
                    <td>1250/5A</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 400</td>
                    <td>400 KVAr</td>
                    <td>415 V</td>
                    <td>1.3Xln</td>
                    <td>IP4X</td>
                    <td>6</td>
                    <td>1600/5 A</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 500</td>
                    <td>500 KVAr</td>
                    <td>415 V</td>
                    <td>1.3Xln</td>
                    <td>IP4X</td>
                    <td>9</td>
                    <td>2000/5A</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 600</td>
                    <td>600 KVAr</td>
                    <td>415 V</td>
                    <td>1.3Xln</td>
                    <td>IP4X</td>
                    <td>12</td>
                    <td>2500/5A</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 800</td>
                    <td>800 KVAr</td>
                    <td>11 kV</td>
                    <td>1.3Xln</td>
                    <td>IP4X</td>
                    <td>10</td>
                    <td>100/5A</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 1000</td>
                    <td>1000 KVAr</td>
                    <td>11 KV</td>
                    <td>1.3Xln</td>
                    <td>IP4X</td>
                    <td>4</td>
                    <td>150/5A</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 1200</td>
                    <td>1200 KVAr</td>
                    <td>33 KV</td>
                    <td>1.3Xln</td>
                    <td>IP4X</td>
                    <td>12</td>
                    <td>200/5A</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 2000</td>
                    <td>2000 KVAr</td>
                    <td>33 KV</td>
                    <td>1.3Xln</td>
                    <td>IP4X</td>
                    <td>12</td>
                    <td>100/5 A</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-left">APE PFI 4000</td>
                    <td>4000 KVAr</td>
                    <td>33K V</td>
                    <td>1.3Xln</td>
                    <td>IP4X</td>
                    <td>12</td>
                    <td>200/5A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

        </main>
      </div>
    </div>
  )
}

export default PowerFactorImprovementPage
