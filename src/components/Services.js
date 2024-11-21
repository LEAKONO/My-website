import React from "react";
import styled from "styled-components";

const ServicesSection = styled.section`
  background-color: #fff;
  padding: 3rem 2rem;
  max-width: 1000px;
  margin: 2rem auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Title = styled.h3`
  font-size: 2rem;
  color: #1e90ff;
  margin-bottom: 2rem;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Create 3 equal-width columns */
  gap: 2rem; /* Space between the columns */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack into 1 column on small screens */
  }
`;

const ServiceCard = styled.div`
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ServiceTitle = styled.h4`
  font-size: 1.5rem;
  color: #1e90ff;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
`;

const Services = () => {
  return (
    <ServicesSection>
      <Title>My Services</Title>
      <ServiceGrid>
        <ServiceCard>
          <ServiceTitle>Web Development</ServiceTitle>
          <ServiceDescription>
            I specialize in creating fully responsive and user-friendly websites using the latest web technologies. Whether you're looking for a personal blog, a portfolio, or a business website, I ensure your online presence is professional, efficient, and tailored to your needs.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>API Design</ServiceTitle>
          <ServiceDescription>
            I design and develop scalable, maintainable, and well-documented APIs. My focus is on creating robust RESTful APIs that provide seamless integration with other systems, enabling smooth communication between your front-end and back-end services.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Database Management</ServiceTitle>
          <ServiceDescription>
            I offer database management services that ensure your data is properly structured, optimized, and secure. Whether you're building a new database or need help optimizing an existing one, I ensure your data management is efficient and scalable for future growth.
          </ServiceDescription>
        </ServiceCard>
      </ServiceGrid>
    </ServicesSection>
  );
};

export default Services;
