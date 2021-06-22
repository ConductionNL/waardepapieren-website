import React from 'react'
import { StyledContainer, StyledSubParagraph, StyledTextContainer, StyledHeading, StyledParagraph, StyledIntro, StyledImage } from './index.styles.js'
import ResponsiveImage from '../ResponsiveImage'
import undraw_choosing_house_v37h from '../../images/undraw_choosing_house_v37h.svg'

const Payoff = () => (
  <StyledContainer>
    <StyledIntro>
      <StyledTextContainer>
        <StyledHeading className="primary-colors">Waardepapieren</StyledHeading>
        <StyledParagraph className="primary-colors">Het veilig, vertrouwd en snel verstrekken van digitale uittreksels en bewijsstukken</StyledParagraph>
        <StyledSubParagraph className="primary-colors">Waardepapieren is onderdeel van commonground.</StyledSubParagraph>
        <StyledSubParagraph className="primary-colors"><a className="primary-colors" href="https://commonground.nl/">Lees hier meer over Commonground</a></StyledSubParagraph>
      </StyledTextContainer>
    </StyledIntro>
    <StyledImage>
      <ResponsiveImage src={undraw_choosing_house_v37h} alt="Illustratie van vrouw op straat in stad" />
    </StyledImage>
  </StyledContainer>
)

export default Payoff
