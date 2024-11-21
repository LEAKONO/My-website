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
        intensive months sharpening my skills in full-stack development. Through
        this program, I developed a solid foundation in web technologies like
        HTML, CSS , JavaScript, React, and Python. I also gained hands-on
        experience with Git for version control and collaborative coding,
        database management, and building REST APIs to connect and enhance
        applications. Moringa School’s emphasis on practical, team-based, and
        challenging projects taught me how to build scalable and efficient
        applications that solve complex problems. Today, I am dedicated to
        leveraging my technical skills and collaborating with other innovators
        to create impactful software solutions. My ultimate goal is to push the
        boundaries of technology, contributing to applications that drive both
        innovation and success.
      </Description>
    </AboutSection>
  );
};

export default About;
