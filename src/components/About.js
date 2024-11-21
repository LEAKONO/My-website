import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  background-color: #f8f9fa;
  padding: 3rem 2rem;
  max-width: 800px;
  margin: 2rem auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Title = styled.h3`
  font-size: 2rem;
  color: hsl(10, 80%, 50%);
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
`;

const About = () => {
  return (
    <AboutSection>
      <Title>About</Title>
      <Description>
        Hi there! I'm Emmanuel Leakono. I am deeply passionate about building
        software that addresses real-world challenges. My journey in software
        engineering began during my early education, where my interest in
        technology and problem-solving naturally drew me to programming. This
        interest grew significantly when I joined Moringa School, where I spent
        intensive months sharpening my skills in full-stack development.
      </Description>
    </AboutSection>
  );
};

export default About;
