import Link from 'next/link';
import { Phone, Mail, Menu, Home, Building2, ShieldCheck, Users, Award, CheckCircle2 } from 'lucide-react';


const CompanyProfilePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">


      {/* Breadcrumb Header Banner */}
      <div className="bg-[#F6F6F6] py-8 px-6 border-b border-[#d2d3d4]">
        <div className="text-[#333333]  max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-xl">Company Profile</h1>
          <div className="breadcrumbs text-sm">
            <ul>
              <li><Link href="/" className="flex items-center gap-1"><Home size={14} /> Home</Link></li>
              <li>Company Profile</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto w-full p-6 sm:p-10 my-6 space-y-10">

        {/* Overview Section */}
        <section className="card bg-base-100 shadow-xl border border-base-200 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6 border-b pb-4">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <Building2 size={28} />
            </div>
            <h2 className="text-2xl tracking-wide">About Al-Amin Power Engineering</h2>
          </div>
          <div className="space-y-4 text-base sm:text-lg text-base-content/80 leading-relaxed">
            <p>
              <strong>Al-Amin Power Engineering (APE)</strong> is a fast-growing company registered in Bangladesh & involved in manufacturing Power & Distribution Transformers, H.T. & L.T. Switchgears, P.F.I. Plants, and serving as suppliers of Mill Machineries to newly established industries since 1959.
            </p>
            <p>
              The company was founded by <strong>Mr. Mohammad Al-Amin</strong>, a dynamic and promising power engineering professional possessing a strong reputation and extensive experience in the power technology business. Since our inception, our ethical values, dedication, hard work, prompt service, and product quality have established us as a reliable name in Power Technology Support Services.
            </p>
            <p>Capability to understand Customers requirement, Professionalism, Commitment, Team Work, Punctuality and Quality is our main strength. We always apply high standards of integrity and responsibility in our activities. Customer satisfaction inspired us for further improvement of operational efficiency and cost effectiveness. We are proud to be the partner of success of the leading Steel Mills, House building & Real Estate Companies, Dyeing & Printing Mills, Washing Plant & Chemical Industries in Bangladesh.</p>
          </div>
        </section>

        {/* Strengths & Core Values Section */}
        <section className="card bg-base-100 shadow-xl border border-base-200 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6 border-b pb-4">
            <div className="p-3 bg-secondary/10 text-secondary rounded-xl">
              <ShieldCheck size={28} />
            </div>
            <h2 className="text-2xl font-bold tracking-wide">Our Core Strengths</h2>
          </div>
          <p className="text-base sm:text-lg text-base-content/80 mb-6 leading-relaxed">
            Our ability to understand customer requirements combined with professionalism, commitment, teamwork, punctuality, and uncompromising quality form our main strengths. We always apply high standards of integrity and responsibility to all our activities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Customer-Centric Focus & Operational Efficiency",
              "Cost-Effective Power & Distribution Solutions",
              "Strict Quality Assurance & Engineering Integrity",
              "Prompt After-Sales Support & Technical Services"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-base-200/50 rounded-xl border border-base-300">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                <span className="font-medium text-base-content">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Partnerships Section */}
        <section className="card bg-base-100 shadow-xl border border-base-200 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6 border-b pb-4">
            <div className="p-3 bg-accent/10 text-accent rounded-xl">
              <Award size={28} />
            </div>
            <h2 className="text-2xl font-bold tracking-wide">Our Valued Partners</h2>
          </div>
          <p className="text-base sm:text-lg text-base-content/80 leading-relaxed">
            We are proud to be the trusted partner in success for leading Steel Mills, Real Estate & House Building Companies, Dyeing & Printing Mills, Washing Plants, and Chemical Industries across Bangladesh.
          </p>
        </section>

      </main>

    </div>
  )
}

export default CompanyProfilePage
