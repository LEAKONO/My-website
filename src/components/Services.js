import React from "react";
import styled from "styled-components";

const ServicesSection = styled.section`
  background-color: #fff;
  padding: 3rem 2rem;
  max-width: 800px;
  margin: 2rem auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Title = styled.h3`
  font-size: 2rem;
  color: #1e90ff;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  font-size: 1rem;
  color: #333;
  margin: 0.5rem 0;
`;

const Services = () => {
  return (
    <ServicesSection>
      <Title>Services</Title>
      <ServiceList>
        <ServiceItem>Web Development</ServiceItem>
        <ServiceItem>API Design</ServiceItem>
        <ServiceItem>Database Management</ServiceItem>
      </ServiceList>
    </ServicesSection>
  );
};

export default Services;
