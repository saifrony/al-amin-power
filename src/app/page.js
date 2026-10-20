import BrandSection from '@/components/homePages/BrandSection'
import ContactUs from '@/components/homePages/ContactUs'
import HeroSection from '@/components/homePages/HeroSection'
import WelcomeSection from '@/components/homePages/WelcomeSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <BrandSection />
      <ContactUs />
    </div>
  )
}

export default page

