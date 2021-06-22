import React from 'react'
import { StyledContainer } from './index.styles.js'


import dimpact from './images/dimpact.png'
import maykin from './images/maykinmedia.png'
import conduction from './images/conduction.png'


import foundationForPublicCode from './images/foundation-for-public-code.png'
import kadaster from './images/kadaster.png'

const Logos = () => (
  <StyledContainer className={"tertiary-colors"}>

    <a href="https://conduction.nl/" target="_blank" rel="noopener noreferrer"><img src={conduction} height="45" alt="Logo conduction" /></a>
    <a href="https://www.dimpact.nl" target="_blank" rel="noopener noreferrer"><img src={dimpact} height="40" alt="Logo Vereniging Dimpact" /></a>
  </StyledContainer>
)

export default Logos
