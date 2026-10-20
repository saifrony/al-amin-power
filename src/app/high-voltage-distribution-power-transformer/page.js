import Image from 'next/image';
import powerLogo from '../../../public/assets/al-amin-img/Distribution-Transformers.jpg';
import Link from 'next/link';
import { Eye, Home, Target } from 'lucide-react';

const PowerDistributionTransformerContentPage = () => {
    return (

        <div>
            <div className="min-h-screen flex flex-col bg-base-100 text-base-content">

                {/* Breadcrumb Header Banner */}
                <div className="bg-[#F6F6F6] py-8 px-6 border-b border-[#d2d3d4]">
                    <div className="text-[#333333]  max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <h1 className="text-xl">Power & Distribution Transformer</h1>
                        <div className="breadcrumbs text-sm">
                            <ul>
                                <li><Link href="/" className="flex items-center gap-1"><Home size={14} /> Home</Link></li>
                                <li>Power & Distribution Transformer</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <main className="flex-grow max-w-7xl mx-auto w-full  p-6 sm:p-10 my-6 space-y-10">
                    {/* Page Title */}
                    <div className="border-b pb-4">
                        <h1 className="text-2xl sm:text-3xl md:text-3xl font-serif text-gray-800 tracking-tight uppercase">
                            Power & Distribution Transformer
                        </h1>
                    </div>

                    {/* Top Intro Section with Image */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start ">
                        <div className="lg:col-span-2 space-y-4 text-sm sm:text-base leading-relaxed text-base-content/80">
                            <p>
                                APE, A trusted name in manufacturing electrical equipment since inception in 1959. We are constantly devoted in design and manufacture of proven quality power and distribution transformers. Our products satisfy the requirements of Bangladesh Power Development Board (BPDB), Dhaka Electric Supply Authority (DESA), Rural Electrification Board (REB), Defence and Manufacturing Organizations. APE is well equipped with all necessary manufacturing and testing facilities. We always monitor quality, reliability and services of our products and thus enjoy the patronage of many quality conscious customers of the country.
                            </p>
                            <p>
                                APE transformers are oil immersed natural cooled or forced cooled with environment friendly devices. Distribution & power transformers covering voltage three phase 11/.415KV, 33/.415 KV & 33/11KV 100KVA up to 30 MVA or any other voltage levels & capacities are being manufactured by us. Our transformer of rated voltage 11/.415KV, 33/.415 KV & 33/11 KV have passed the impulse withstand voltage test successfully at Bangladesh University of Engineering & Technology (BUET)
                            </p>
                            <p>
                                APE products are of a high standard because of sound technological base ensured by experienced designers and engineers. Total Quality Management (TQM) is practiced in APE. All members assume responsibility to ensure quality, reliability and participate in problem solving and decision making. Continuous improvement is the culture of the organization. We always apply high standard of integrity and responsibility in our activities.
                            </p>
                        </div>

                        {/* Transformer Image */}
                        <div className="card bg-base-200/50 border border-base-300 p-4 shadow-sm flex flex-col items-center justify-center">
                            <div className="relative w-full h-64 sm:h-80">
                                {/* Apni ekhane apnar actual transformer image er path dite paren */}
                                <div className="w-full h-full bg-base-300 rounded-lg flex items-center justify-center text-base-content/50 font-medium">
                                    <Image
                                        src={powerLogo} // public folder-e thaka apnar logo-er path
                                        alt="Power & Distribution Transformer Logo"   
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CORE Section */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-xl sm:text-2xl font-bold tracking-wide uppercase text-primary border-l-4 border-primary pl-3">
                            CORE
                        </h2>
                        <div className="space-y-3 text-sm sm:text-base leading-relaxed text-base-content/80">
                            <p>
                                The transformer cores are of high quality, Cold Rolled Grain Oriented (CRGO), non-aging, highly permeable silicon steel sheet with thickness of 0.23 to .027mm. A laminated iron core is made using three vertical parallel limbs & two yokes. The laminations of the core closely overlap, lower & upper press beams securely hold the core together with no bolts actually passing through the core.
                            </p>
                            <p>
                                Transformers consist of the core lims with multiple layers and theoretical circular cross section. In case of more than one output of voltage level required, the cores are manufactured with intermediate yokes.
                            </p>
                        </div>
                    </section>

                    {/* WINDINGS Section */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-xl sm:text-2xl font-bold tracking-wide uppercase text-primary border-l-4 border-primary pl-3">
                            WINDINGS
                        </h2>
                        <div className="space-y-3 text-sm sm:text-base leading-relaxed text-base-content/80">
                            <p>
                                The windings are the most vital part of transformers. The windings should be mechanically withstood able against the high voltage impulses and short circuit stresses which may occur during the service of transformers.
                            </p>
                            <p>
                                The high voltage windings are normally outside, separated from the inner most low voltage windings by cooling and insulation channels. The HV winding use super enamelled, high conductivity, low resistance copper wires & the LV windings use rectangular copper strip with paper covering.
                            </p>
                            <p>
                                Ducts are provided both in the HV & LV windings for oil to circulate freely to keep the transformer sufficiently cool.
                            </p>
                            <p>
                                Every transformer is designed to meet the BIL (Basic Insulation Level) requirements fulfilling all the short circuit requirements.
                            </p>
                        </div>
                    </section>

                    {/* CLAMPING STRUCTURE Section */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-xl sm:text-2xl font-bold tracking-wide uppercase text-primary border-l-4 border-primary pl-3">
                            CLAMPING STRUCTURE
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed text-base-content/80">
                            The windings are compressed with pressure segments at the upper & lower yokes in order to encounter the mechanical stresses occurred axially during the short- circuits while the transformer is under service. In case of the radial stresses, the inner coil is supported with laths between the core and itself and other coils are supported with laths in the channels between the coils. On the other hand, vertical (axial) pressing of the windings with pressure segment, the hydraulic jacks are used between the pressing iron in the upper yoke and the segment.
                        </p>
                    </section>

                    {/* VOLTAGE ADJUSTMENT Section */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-xl sm:text-2xl font-bold tracking-wide uppercase text-primary border-l-4 border-primary pl-3">
                            VOLTAGE ADJUSTMENT
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed text-base-content/80">
                            Due to the voltage variation in the networks or in the substations, transformers are normally equipped with lapping windings having necessary taps to accomplish the required voltage level. All transformers are supplied with an off-load Tap Changer in the HV side with 5 (Five) tapping positions. By a simple tank cover mounted knob, output voltages can be re-adjusted. The tapping switch positions are identified by an adjustable locking pin. APE always uses mostly off load changer and on load tap changer as per customer requirements.
                        </p>
                    </section>

                    {/* TRANSFORMER TANK Section */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-xl sm:text-2xl font-bold tracking-wide uppercase text-primary border-l-4 border-primary pl-3">
                            TRANSFORMER TANK
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed text-base-content/80">
                            The tanks and covers are designed & constructed with lamination free, high quality sheet steel, fabricated of a rigid bottom with an oil drainage outlet. Each tank is tested at a pressure of 5kg/cm2. Tank covers are provided with anti-magnetic materials.
                        </p>
                    </section>

                    {/* INSULATING OIL & COOLING Section */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-xl sm:text-2xl font-bold tracking-wide uppercase text-primary border-l-4 border-primary pl-3">
                            INSULATING OIL & COOLING
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed text-base-content/80">
                            All the transformers up to 1500 KVA are ONAN cooled (Self Cooling) i.e. natural circulation of both oil & air. Forced cooling is arranged for higher capacities. Mineral oil used is of moisture free high dielectric strength conforming to IEC -296 or BS – 148 standards.
                        </p>
                    </section>

                    {/* CORROSION PROTECTION Section */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-xl sm:text-2xl font-bold tracking-wide uppercase text-primary border-l-4 border-primary pl-3">
                            CORROSION PROTECTION
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed text-base-content/80">
                            APE manufacture Transformer with a very high standard considering its quality. An active base coat and two finishing coats are applied in every tank with corrosion & chemical resistant paints. Paints can be incorporated subject to customers’ requirement.
                        </p>
                    </section>

                    {/* VACUUM DRYING Section */}
                    <section className="space-y-3 pt-4">
                        <h2 className="text-xl sm:text-2xl font-bold tracking-wide uppercase text-primary border-l-4 border-primary pl-3">
                            VACUUM DRYING
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed text-base-content/80">
                            APE so far 1st time in Bangladesh using vacuum Drying to extract accumulated humidity from the core coil assembly. Immediately after drying, the transformers are tanked and insulating oil are filled with a vacuum oil filtering machine.
                        </p>
                    </section>

                    {/* TESTING Section */}
                    <section className="space-y-4 pt-4">
                        <h2 className="text-xl sm:text-2xl font-bold tracking-wide uppercase text-primary border-l-4 border-primary pl-3">
                            TESTING
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed text-base-content/80">
                            APE ensure quality test facility according to IE C-76, VDE 5037, ANSI 57.12 and BS171 standards. The following measurements & tests are carried out on each and every transformer prior to despatch the same from factory.
                        </p>

                        {/* Numbered Test List */}
                        <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base text-base-content/80 font-medium bg-base-200/50 p-6 rounded-xl border border-base-300">
                            <li>Voltage Ratio test;</li>
                            <li>No load loss test;</li>
                            <li>Insulation Resistance test;</li>
                            <li>Polarity and phase relation test;</li>
                            <li>Impedance and load loss test;</li>
                            <li>Power Frequency High Voltage withstand test;</li>
                            <li>Oil test;</li>
                            <li>Winding Resistance test &amp;</li>
                            <li>Leakage test.</li>
                        </ol>
                    </section>


                </main>
            </div>


        </div>
    )
}

export default PowerDistributionTransformerContentPage
