import React from "react";
import styled from "styled-components";

const EducationSection = styled.section`
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
  color: #2e8b57;
`;

const EducationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const EducationItem = styled.li`
  font-size: 1rem;
  color: #666;
  margin: 0.5rem 0;
`;

const Education = () => {
  return (
    <EducationSection>
      <Title>Education</Title>
      <EducationList>
        <EducationItem>Moringa School - Full-Stack Development Bootcamp</EducationItem>
        <EducationItem>High School - KCSE Certificate</EducationItem>
      </EducationList>
    </EducationSection>
  );
};

export default Education;
