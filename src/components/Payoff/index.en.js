import React from 'react'
import { StyledContainer, StyledSubParagraph, StyledTextContainer, StyledHeading, StyledParagraph, StyledIntro, StyledImage } from './index.styles.js'
import ResponsiveImage from '../ResponsiveImage'
import undraw_choosing_house_v37h from '../../images/undraw_choosing_house_v37h.svg'

const Payoff = () => (
  <StyledContainer>
    <StyledIntro>
      <StyledTextContainer>
        <StyledHeading className="primary-colors">Extracts</StyledHeading>
        <StyledParagraph className="primary-colors">The safe, reliable and fast provision of digital extracts and evidence</StyledParagraph>
        <StyledSubParagraph className="primary-colors">More text would be a good idea.</StyledSubParagraph>
        <StyledSubParagraph className="primary-colors"><a className="primary-colors" href="https://commonground.nl/">Read more about commonground</a></StyledSubParagraph>
      </StyledTextContainer>
    </StyledIntro>
    <StyledImage>
      <ResponsiveImage src={undraw_choosing_house_v37h} alt="Illustration of woman walking down the street in city" />
    </StyledImage>
  </StyledContainer>
)

export default Payoff
