import React from 'react'
import { StyledContainer, StyledSubParagraph, StyledTextContainer, StyledHeading, StyledParagraph, StyledIntro, StyledImage } from './index.styles.js'
import ResponsiveImage from '../ResponsiveImage'
import undraw_choosing_house_v37h from '../../images/undraw_choosing_house_v37h.svg'

const Payoff = () => (
  <StyledContainer>
    <StyledIntro>
      <StyledTextContainer>
        <StyledHeading className="primary-colors">Waardenpapieren</StyledHeading>
        <StyledParagraph className="primary-colors">Het veilig, vertrouwd en snel verstrekken van digitale uittreksels en bewijsstukken</StyledParagraph>
        <StyledSubParagraph className="primary-colors">Demodam is een fictieve gemeentewebsite die laat zien welke herbruikbare open source producten en diensten er beschikbaar zijn voor gemeenten.</StyledSubParagraph>
        <StyledSubParagraph className="primary-colors"><a className="primary-colors" href="https://commonground.nl/blog/view/6c422c0a-e541-41c8-8261-9c8bc90f4d87/doe-mee-met-demodam-de-common-ground-showcase-website">Lees hier meer over Demodam</a></StyledSubParagraph>
      </StyledTextContainer>
    </StyledIntro>
    <StyledImage>
      <ResponsiveImage src={undraw_choosing_house_v37h} alt="Illustratie van vrouw op straat in stad" />
    </StyledImage>
  </StyledContainer>
)

export default Payoff
