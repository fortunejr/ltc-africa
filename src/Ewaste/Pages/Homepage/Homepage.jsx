import React from 'react'
import Hero from '../../Components/Hero/Hero'
import AboutEwaste from '../../Components/About/About'
import Certifications from '../../Components/Certifications/Certifications'
import ServicesEwaste from '../../Components/ServicesEwaste/ServicesEwaste'
import Welcome from '../../Components/Welcome/Welcome'
import Partners from '../../Components/Partners/Partners'

const HomepageEwaste = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      {/* <AboutEwaste /> */}
      <Partners />
      <Certifications />
      <ServicesEwaste />
    </div>
  )
}

export default HomepageEwaste