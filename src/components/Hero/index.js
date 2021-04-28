import React, { useState } from 'react'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

export const Hero = () => {
  const call = () => {
    window.open('tel:9098731928')
  }

  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>China Doll Fast Food</HeroH1>
          <HeroP>(909) 873-1928</HeroP>
          <HeroBtn onClick={call}>Call Now</HeroBtn>
          <div style={{ position: 'relative', overflow: 'hidden', width: '100%', paddingTop: '56.25%' }}>
            <iframe title='location' style={{ marginTop: '10px', position: 'absolute', top: '0', left: '0', bottom: '0', right:'0', width: '100%', height: '95%' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.9587041368723!2d-117.37349358434415!3d34.12180692150743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c34d83655b87cb%3A0x803d5a6e7f2e7a87!2s150%20W%20Baseline%20Rd%2C%20Rialto%2C%20CA%2092376!5e0!3m2!1sen!2sus!4v1616102359027!5m2!1sen!2sus" width="400" height="350" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}
