import React from 'react';
import styled from 'styled-components';
import fintrack from '../assets/fintrack.png';
import asset from '../assets/asset.png';
import laptop from '../assets/laptop.jpeg';

// Styled Components
const ProjectsSection = styled.section`
    padding: 50px 20px;
    background-color: #f8f9fa;
    text-align: center;

    @media (max-width: 768px) {
        padding: 30px 15px;
    }
`;

const Title = styled.h2`
    font-size: 2rem;
    color: hsl(123, 89%, 14%);
    margin-bottom: 30px;

    @media (max-width: 768px) {
        font-size: 1.8rem;
        margin-bottom: 20px;
    }
`;

const Subtitle = styled.h3`
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 30px;
    }
`;

const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: nowrap; /* Prevent wrapping on larger screens */
    justify-content: center; /* Center items */
    gap: 20px; /* Add spacing between cards */
    padding: 20px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow-x: auto; /* Enable horizontal scrolling if necessary */
    scrollbar-width: thin; /* For modern browsers */
    scrollbar-color: #ccc #f8f9fa;

    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f8f9fa;
    }

    @media (max-width: 768px) {
        flex-wrap: wrap; /* Allow wrapping on smaller screens */
        gap: 10px; /* Reduce spacing on smaller screens */
    }
`;

const ProjectCard = styled.article`
    flex: 1 0 30%; /* Default to 33% of width on large screens */
    background-color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: left;
    transition: transform 0.2s ease;

    &:hover {
        transform: translateY(-5px);
    }

    @media (max-width: 768px) {
        flex: 1 0 100%; /* Take full width on smaller screens */
        padding: 12px;
    }
`;

const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
    object-fit: cover;
`;

const ProjectTitle = styled.h4`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }
`;

const ProjectDescription = styled.p`
    font-size: 1rem;
    color: #666;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        font-size: 0.95rem;
    }
`;

const ProjectLinks = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    a {
        color: #007bff;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s ease;
        &:hover {
            color: #0056b3;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column; /* Stack links vertically */
        align-items: center;
    }
`;

const MoreWork = styled.div`
    margin-top: 40px;
    text-align: center;
`;

const GithubLink = styled.a`
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #0056b3;
    }
`;

const NoImageFallback = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    color: #666;
`;

// ProjectCard Component
const Project = ({ title, description, image, repoLink, liveLink }) => (
    <ProjectCard>
        {image ? (
            <ProjectImage src={image} alt={title} loading="lazy" />
        ) : (
            <NoImageFallback>No Image Available</NoImageFallback>
        )}
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectLinks>
            {repoLink && (
                <a href={repoLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} on GitHub`}>
                    GitHub Repo
                </a>
            )}
            {liveLink && (
                <a href={liveLink} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${title}`}>
                    Live Project
                </a>
            )}
        </ProjectLinks>
        <ProjectDescription>{description}</ProjectDescription>
    </ProjectCard>
);

// Projects Component
const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Fintrack',
            description:
                'The financial management tracker project helps users manage their finances effectively, featuring tools for tracking income and expenses, creating budgets, and analyzing spending patterns.',
            image: fintrack,
            repoLink: 'https://github.com/LEAKONO/Budget-Trucker',
            liveLink: 'https://budget-trucker.vercel.app/',
        },
        {
            id: 2,
            title: 'Asset Inventory',
            description:
                'Asset inventory is designed to help organizations efficiently manage their assets. It includes features for tracking and organizing various assets, allowing users to add, update, and delete asset information.',
            image: asset,
            repoLink: 'https://github.com/calebkomen/Frontend-asset-inventory-management-phase5',
            liveLink: 'https://assetfrontend.vercel.app/',
        },
        {
            id: 3,
            title: 'TaskManager App',
            description:
                'The Taskmaster app is a collaborative task management tool that allows users to create and assign tasks to their friends, organize tasks, and track progress effectively.',
            image: laptop,
            repoLink: 'https://github.com/LEAKONO/task-master-frontend',
            liveLink: 'https://task-master-frontend-red.vercel.app/',
        },
    ];

    return (
        <ProjectsSection id="projects">
            <Title>My Recent Works</Title>
            <Subtitle>Check out some of my past work.</Subtitle>
            <ProjectsContainer>
                {projects.map((project) => (
                    <Project key={project.id} {...project} />
                ))}
            </ProjectsContainer>
            <MoreWork>
                <GithubLink href="https://github.com/LEAKONO" target="_blank" rel="noopener noreferrer">
                    MORE WORKS
                </GithubLink>
            </MoreWork>
        </ProjectsSection>
    );
};

export default Projects;
