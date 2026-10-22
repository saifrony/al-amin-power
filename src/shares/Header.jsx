'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoHira from '../../public/assets/al-amin-img/Logo_hira.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      
      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Brand Name - Fixed size matching specifications */}
        {/* <Link href="/" className="flex items-center gap-3">
          <div className="relative w-36 h-10 sm:w-44 sm:h-12 flex items-center">
            <Image 
              src={logoHira} 
              alt="Al-Amin Power Engineering Logo" 
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link> */}

        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow border border-gray-200 overflow-hidden">
            <span className="text-xs font-bold text-green-700">
                <Image 
              src={logoHira} 
              alt="Al-Amin Power Engineering Logo" 
            />
            </span>
          </div>
          <span className="text-xl sm:text-2xl font-bold text-red-600 tracking-wide font-sans">
            Al-Amin Power Engineering
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-normal text-sm sm:text-base items-center">
          <li>
            <Link href="/" className="hover:text-red-600 transition">Home</Link>
          </li>
          
          {/* About Us Dropdown */}
          <li className="relative group py-2">
            <Link href="#about" className="hover:text-red-600 transition flex items-center gap-1">
              About Us <span className="text-xs">▼</span>
            </Link>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg border border-gray-100 py-2 w-48 top-full left-0 z-50">
              <li>
                <Link href="/company-profile" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600 text-sm">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link href="/mission" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600 text-sm">
                  Mission & Vision
                </Link>
              </li>
            </ul>
          </li>

          {/* Products Dropdown */}
          <li className="relative group py-2">
            <Link href="#products" className="hover:text-red-600 transition flex items-center gap-1">
              Products <span className="text-xs">▼</span>
            </Link>
            <ul className="absolute hidden group-hover:block bg-white shadow-lg border border-gray-100 py-2 w-64 top-full left-0 z-50">
              <li>
                <Link href="/high-voltage-distribution-power-transformer" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600 text-sm">
                  Power & Distribution Transformer
                </Link>
              </li>
              <li>
                <Link href="/high-tension-switchgear" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600 text-sm">
                  High Tension Switchgear
                </Link>
              </li>
              <li>
                <Link href="/low-tension-switchgear" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600 text-sm">
                  Low Tension Switchgear
                </Link>
              </li>
              <li>
                <Link href="/power-factor-improvement-plant" className="block px-4 py-2 hover:bg-gray-100 hover:text-red-600 text-sm">
                  Power Factor Improvement Plant
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/services" className="hover:text-red-600 transition">Services</Link>
          </li>
          {/* <li>
            <Link href="/contact" className="hover:text-red-600 transition">Contacts Us</Link>
          </li> */}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-700 focus:outline-none text-2xl p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3 font-medium text-gray-700 shadow-lg">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-red-600">Home</Link>
          </li>

          {/* Mobile About Us Accordion */}
          <div>
            <button 
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="flex justify-between items-center w-full hover:text-red-600 py-1"
            >
              <span>About Us</span>
              <span>{mobileAboutOpen ? '▲' : '▼'}</span>
            </button>
            {mobileAboutOpen && (
              <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600 border-l-2 border-red-500">
                <li><Link href="/company-profile" onClick={() => setIsOpen(false)} className="block hover:text-red-600">Company Profile</Link></li>
                <li><Link href="/mission" onClick={() => setIsOpen(false)} className="block hover:text-red-600">Mission & Vision</Link></li>
              </ul>
            )}
          </div>

          {/* Mobile Products Accordion */}
          <div>
            <button 
              onClick={() => setMobileProductOpen(!mobileProductOpen)}
              className="flex justify-between items-center w-full hover:text-red-600 py-1"
            >
              <span>Products</span>
              <span>{mobileProductOpen ? '▲' : '▼'}</span>
            </button>
            {mobileProductOpen && (
              <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-600 border-l-2 border-red-500">
                <li><Link href="/high-voltage-distribution-power-transformer" onClick={() => setIsOpen(false)} className="block hover:text-red-600">Power & Distribution Transformer</Link></li>
                <li><Link href="/high-tension-switchgear" onClick={() => setIsOpen(false)} className="block hover:text-red-600">High Tension Switchgear</Link></li>
                <li><Link href="/low-tension-switchgea" onClick={() => setIsOpen(false)} className="block hover:text-red-600">Low Tension Switchgear</Link></li>
                <li><Link href="/power-factor-improvement-plant" onClick={() => setIsOpen(false)} className="block hover:text-red-600">Power Factor Improvement Plant</Link></li>
              </ul>
            )}
          </div>

          <li>
            <Link href="/services" onClick={() => setIsOpen(false)} className="block hover:text-red-600">Services</Link>
          </li>
          <li>
            {/* <Link href="/contact" onClick={() => setIsOpen(false)} className="block hover:text-red-600">Contacts Us</Link> */}
          </li>
        </ul>
      )}
    </header>
  )
}

export default Header
