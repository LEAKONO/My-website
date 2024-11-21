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
  margin-left: 200px;  // Make sure the content shifts to the right of the sidebar
`;

const WelcomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background-color: #f8f9fa;
  animation: fadeIn 1s ease-in-out;
`;

const ProfilePic = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #1e90ff;
`;

const SubHeading = styled.h2`
  font-size: 2rem;
  color: #2e8b57;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const Home = () => {
  return (
    <HomeContainer>
      <WelcomeSection>
        <ProfilePic src={image} alt="Profile" />
        <Heading>HELLO, I'M</Heading>
        <SubHeading>EMMANUEL LEAKONO</SubHeading>
        <Title>Full Stack Software Developer</Title>
      </WelcomeSection>
      <About />
      <Services />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </HomeContainer>
  );
};

export default Home;
