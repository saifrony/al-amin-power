import React from 'react'
import Link from 'next/link';
import { Phone, Mail, Menu, Home, Target, Eye, ShieldCheck, Cpu, Wrench } from 'lucide-react';
import highTensionLogo from '../../../public/assets/al-amin-img/HT-SWITCHGEAR.jpg';
import Image from 'next/image';

const HighTensionSwitchgearPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-base-100 text-base-content">

            {/* Breadcrumb Header Banner */}
            <div className="bg-[#F6F6F6] py-8 px-6 border-b border-[#d2d3d4]">
                <div className="text-[#333333]  max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <h1 className="text-xl">High Tension Switchgear</h1>
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li><Link href="/" className="flex items-center gap-1"><Home size={14} /> Home</Link></li>
                            <li>High Tension Switchgear</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="flex-grow max-w-7xl mx-auto w-full  p-6 sm:p-10 my-6 space-y-10">

                {/* Page Title Header */}
                {/* <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-2">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl font-serif text-gray-800 tracking-tight uppercase">
                        High Tension Switchgear
                    </h1>
                    <div className="text-xs sm:text-sm text-base-content/60 breadcrumbs">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li>High Tension Switchgear</li>
                        </ul>
                    </div>
                </div> */}



                {/* Page Title */}
                <div className="border-b pb-4">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl font-serif text-gray-800 tracking-tight uppercase">
                        High Tension Switchgear
                    </h1>
                </div>

                {/* Intro Description with Image Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2 space-y-4 text-sm sm:text-base leading-relaxed text-base-content/80">
                        <p>
                            APE High Tension Switchgear conform to IEC, BS, VDE, DIN,&amp; ANSI standard and equipped with Minimum Oil Circuit Breaker (MOCB), Vacuum Circuit Breaker (VCB) &amp; Load Break Switch (LBS). They are designed in co-ordination to over voltage due to Lightning &amp; transients for highest system voltage of 12 KV &amp; current rating from 400A to 1250A.
                        </p>
                        <p>
                            The panel boards are made of strong sheet steel (Minimum 16SWG) at all sides with iron angles &amp; channels welded together. They are painted in accordance with general practice and recognized methods to meet the tropical conditions at site. Potential Transformer (PT), Current Transformer (CT), Earthling.
                        </p>
                        <p>
                            Switch, the main unit and other components are imported from America, Germany, France, Italy, UK, &amp; Japan or as per the choice of the valued customers.
                        </p>
                    </div>

                    {/* Switchgear Image Container */}
                    <div className="card bg-base-200/50 border border-base-300 p-4 shadow-sm flex flex-col items-center justify-center">
                        <div className="relative w-full h-64 sm:h-80 bg-base-300 rounded-lg flex items-center justify-center text-base-content/50 font-medium text-center p-4">

                            <Image
                                src={highTensionLogo} // public folder-e thaka apnar logo-er path
                                alt="High Tension Switchgear Logo"
                            />
                        </div>
                    </div>
                </div>

                {/* Technical Specification Section */}
                <section className="space-y-4 pt-6">
                    <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-primary">
                        Technical Specification for HT Switchgear
                    </h2>

                    {/* Responsive Table Container */}
                    <div className="overflow-x-auto border border-base-300 rounded-xl shadow-sm bg-base-100">
                        <table className="table table-zebra table-xs sm:table-sm md:table-md w-full text-center">
                            <thead>
                                <tr className="bg-base-200 text-base-content font-bold">
                                    <th className="text-left">ITEM</th>
                                    <th colSpan="3" className="border-l border-base-300">VC B</th>
                                    <th colSpan="3" className="border-l border-base-300">MOCB</th>
                                    <th colSpan="3" className="border-l border-base-300">LVS</th>
                                </tr>
                                <tr className="bg-base-200/60 text-base-content/80 font-semibold text-xs sm:text-sm">
                                    <th className="text-left">VMODEL</th>
                                    <th className="border-l border-base-300">APE 630V</th>
                                    <th>APE 800V</th>
                                    <th>APE 1200V</th>
                                    <th className="border-l border-base-300">APE 630V</th>
                                    <th>APE 800V</th>
                                    <th>APE 1200V</th>
                                    <th className="border-l border-base-300">APE 630V</th>
                                    <th>APE 800V</th>
                                    <th>APE 1200V</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="font-semibold text-left">Rated Voltage (KV)</td>
                                    <td className="border-l border-base-300">12</td>
                                    <td>12</td>
                                    <td>12</td>
                                    <td className="border-l border-base-300">12</td>
                                    <td>12</td>
                                    <td>12</td>
                                    <td className="border-l border-base-300">12</td>
                                    <td>12</td>
                                    <td>12</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-left">Rated Current (A)</td>
                                    <td className="border-l border-base-300">630</td>
                                    <td>800</td>
                                    <td>1200</td>
                                    <td className="border-l border-base-300">630</td>
                                    <td>800</td>
                                    <td>1200</td>
                                    <td className="border-l border-base-300">630</td>
                                    <td>800</td>
                                    <td>1200</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-left">Short Time Current (KA) (3 Second)</td>
                                    <td className="border-l border-base-300">25</td>
                                    <td>25</td>
                                    <td>25</td>
                                    <td className="border-l border-base-300">25</td>
                                    <td>25</td>
                                    <td>25</td>
                                    <td className="border-l border-base-300">25</td>
                                    <td>25</td>
                                    <td>25</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-left">Basic Impuse Level (KV)</td>
                                    <td className="border-l border-base-300">75</td>
                                    <td>75</td>
                                    <td>75</td>
                                    <td className="border-l border-base-300">75</td>
                                    <td>75</td>
                                    <td>75</td>
                                    <td className="border-l border-base-300">75</td>
                                    <td>75</td>
                                    <td>75</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-left">Making Current (KA)</td>
                                    <td className="border-l border-base-300">50</td>
                                    <td>50</td>
                                    <td>50</td>
                                    <td className="border-l border-base-300">50</td>
                                    <td>50</td>
                                    <td>50</td>
                                    <td className="border-l border-base-300">50</td>
                                    <td>50</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-left">Degree of Protection</td>
                                    <td className="border-l border-base-300">Ip4x</td>
                                    <td>Ip4x</td>
                                    <td>Ip4x</td>
                                    <td className="border-l border-base-300">Ip4x</td>
                                    <td>Ip4x</td>
                                    <td>Ip4x</td>
                                    <td className="border-l border-base-300">Ip4x</td>
                                    <td>Ip4x</td>
                                    <td>Ip4x</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-left">Style Amplitude (&lt;)</td>
                                    <td className="border-l border-base-300">1000M</td>
                                    <td>1000M</td>
                                    <td>1000M</td>
                                    <td className="border-l border-base-300">1000M</td>
                                    <td>1000M</td>
                                    <td>1000M</td>
                                    <td className="border-l border-base-300">1000M</td>
                                    <td>1000M</td>
                                    <td>1000M</td>
                                </tr>
                                <tr>
                                    <td className="font-semibold text-left">Dimension (LxWxH), cm</td>
                                    <td className="border-l border-base-300">60x60x190</td>
                                    <td>60x60x190</td>
                                    <td>60x60x190</td>
                                    <td className="border-l border-base-300">60x60x190</td>
                                    <td>60x60x190</td>
                                    <td>60x60x190</td>
                                    <td className="border-l border-base-300">60x60x190</td>
                                    <td>60x60x190</td>
                                    <td>60x60x190</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default HighTensionSwitchgearPage
