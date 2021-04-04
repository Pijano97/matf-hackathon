import React from "react";
import Icon1 from "../../images/img.png";
import Icon2 from "../../images/mladjan.png";
import Icon3 from "../../images/Stefan.jpg";

import {
  AboutUsContainer,
  AboutUsH1,
  AboutUsWrapper,
  AboutUsCard,
  AboutUsIcon,
  AboutUsH2,
  AboutUsP,
} from "./AboutUsElements";

function AboutUs() {
  return (
    <AboutUsContainer id="aboutUs">
      <AboutUsH1>Ko smo mi?</AboutUsH1>
      <AboutUsWrapper>
        <AboutUsCard>
          <AboutUsIcon src={Icon1} />
          <AboutUsH2>Dimitrije Gadžić</AboutUsH2>
          <AboutUsH2>Front End</AboutUsH2>
          <AboutUsP>
            Ne gotivi CSS, ali zato ne prestaje da priča o novoj JS biblioteci.
          </AboutUsP>
        </AboutUsCard>
        <AboutUsCard>
          <AboutUsIcon src={Icon3} />
          <AboutUsH2>Stefan Kovač</AboutUsH2>
          <AboutUsH2>Data Science</AboutUsH2>
          <AboutUsP>
            Kida ML. Ponekad nauči i nešto od mašine a ne samo ona od njega.
          </AboutUsP>
        </AboutUsCard>
        <AboutUsCard>
          <AboutUsIcon src={Icon2} />
          <AboutUsH2>Mladjan Gadžić</AboutUsH2>
          <AboutUsH2>Back End</AboutUsH2>
          <AboutUsP>
            Loži se da zna Javu i mikroservise. Koristi ih i kada ne treba.
          </AboutUsP>
        </AboutUsCard>
      </AboutUsWrapper>
    </AboutUsContainer>
  );
}

export default AboutUs;
