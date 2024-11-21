import React from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Education from "./Education";
import styled from "styled-components";
import image from '../assets/emmanuel (1).png';

const HomeContainer = styled.div`
  text-align: center;
  margin-left: 200px; 
`;

const WelcomeSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background-color: #f8f9fa;
  margin-top: 20px;
`;

const ProfilePic = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  margin-right: 2rem; 
`;

const TextContainer = styled.div`
  width: 300px; 
  overflow: hidden; 
  position: relative; 
`;

const ScrollingText = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: scrollText 10s linear infinite;
  
  @keyframes scrollText {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: #1e90ff;
  margin: 0;
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  color: #2e8b57;
  margin: 0;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin: 0;
`;

const Home = () => {
  return (
    <HomeContainer>
      <WelcomeSection>
        <ProfilePic src={image} alt="Profile" />
        <div>
          <TextContainer>
            <ScrollingText>
              <Heading>HELLO, I'M</Heading>
            </ScrollingText>
          </TextContainer>
          <TextContainer>
            <ScrollingText>
              <SubHeading>EMMANUEL LEAKONO</SubHeading>
            </ScrollingText>
          </TextContainer>
          <TextContainer>
            <ScrollingText>
              <Title>Full Stack Software Developer</Title>
            </ScrollingText>
          </TextContainer>
        </div>
      </WelcomeSection>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </HomeContainer>
  );
};

export default Home;
