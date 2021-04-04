import React from "react";
import Icon1 from "../../images/react.png";
import Icon2 from "../../images/spring.png";
import Icon3 from "../../images/keras.png";

import {
  AboutUsContainer,
  AboutUsH1,
  AboutUsWrapper,
  AboutUsCard,
  AboutUsIcon,
  AboutUsH2,
} from "./ResenjeElements";

function Resenje() {
  return (
    <AboutUsContainer id="resenje">
      <AboutUsH1>Tech Stack</AboutUsH1>
      <AboutUsWrapper>
        <AboutUsCard>
          <AboutUsIcon src={Icon1} />
          <AboutUsH2>Front End: React</AboutUsH2>
        </AboutUsCard>
        <AboutUsCard>
          <AboutUsIcon src={Icon3} />
          <AboutUsH2>ML: Keras</AboutUsH2>
        </AboutUsCard>
        <AboutUsCard>
          <AboutUsIcon src={Icon2} />
          <AboutUsH2>Back End: Spring Framework</AboutUsH2>
        </AboutUsCard>
      </AboutUsWrapper>
    </AboutUsContainer>
  );
}

export default Resenje;
