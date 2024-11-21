import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  FaHome, 
  FaUser, 
  FaTools, 
  FaGraduationCap, 
  FaProjectDiagram, 
  FaPhone, 
  FaBook 
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true); // Default to open for testing

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <TopNav>
        <Hamburger onClick={toggleMenu}>
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>
        <Logo href="#">LEAKONO</Logo>
      </TopNav>
      <SideNav isOpen={isOpen}>
        <NavLink href="#home" home>
          <FaHome /> Home
        </NavLink>
        <NavLink href="#about">
          <FaUser /> About
        </NavLink>
        <NavLink href="#services">
          <FaTools /> Services
        </NavLink>
        <NavLink href="#skills">
          <FaGraduationCap /> Skills
        </NavLink>
        <NavLink href="#education">
          <FaBook /> Education
        </NavLink>
        <NavLink href="#projects">
          <FaProjectDiagram /> Projects
        </NavLink>
        <NavLink href="#contact">
          <FaPhone /> Contact
        </NavLink>
      </SideNav>
    </>
  );
};

export default Navbar;

// Styled Components

const TopNav = styled.nav`
  background-color: #6A1B9A; /* Soft Purple */
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  z-index: 1000;
`;

const Hamburger = styled.button`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.3rem;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const Bar = styled.span`
  width: 25px;
  height: 3px;
  background-color: #fff; /* White bars */
  margin: 3px 0;
  transition: 0.3s;
`;

const Logo = styled.a`
  color: #fff; /* White text */
  text-decoration: none;
  font-weight: 600;
  font-size: 1.5rem;
`;

const SideNav = styled.div`
  position: fixed;
  top: 4.5rem; /* Align the sidebar directly below the TopNav */
  left: ${(props) => (props.isOpen ? '0' : '-200px')};
  width: 200px;
  height: calc(100vh - 4.5rem); /* Ensures the sidebar stretches full height minus the TopNav height */
  background-color: #B0BEC5; /* Light Slate Gray */
  padding: 2rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
  z-index: 999; /* Keep it below the navbar but above the page content */
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px; /* Add spacing between the icon and text */
  margin: 1rem 0;
  color: ${(props) => (props.home ? '#E64A19' : '#6A1B9A')}; /* Home in Deep Orange, others in Purple */
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  svg {
    font-size: 1.5rem;
  }

  &:hover {
    color: #E64A19; /* Change to orange on hover */
  }
`;
