import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <span>Innovating.</span>
          <br></br>
          <span>Disrupting.</span>
          <br></br>
          <span>Transforming.</span>
        </SectionTitle>
        <SectionText>
          Meticulously curated. Creatively forged. Unleashing a revolution in
          Web3, Blockchain, FinTech, and cutting-edge AI-driven innovations.
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "";
          }}
        >
          Hire Us
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
