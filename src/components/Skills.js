import React from 'react';
import styled from 'styled-components';
import { 
    FaReact, 
    FaPython, 
    FaJsSquare, 
    FaDatabase, 
    FaHtml5, 
    FaGithub, 
    FaNodeJs 
} from 'react-icons/fa';
import { 
    SiTailwindcss, 
    SiPostgresql, 
    SiFlask, 
    SiLinux, 
    SiSqlite, 
    SiCss3, 
    SiPostman, 
    SiMysql 
} from 'react-icons/si';

const SkillsSection = styled.section`
    padding: 50px 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
`;

const Title = styled.h3`
    font-size: 2rem;
    margin-bottom: 20px;
    color: hsl(123, 89%, 14%);

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }

    @media (max-width: 480px) {
        font-size: 1.6rem;
    }
`;

const SkillList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const SkillItem = styled.li`
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
    max-width: calc(33% - 20px); /* Three items per row on larger screens */
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        max-width: calc(50% - 20px); /* Two items per row on medium screens */
    }

    @media (max-width: 480px) {
        max-width: calc(100% - 20px); /* One item per row on small screens */
    }
`;

const SkillIcon = styled.div`
    font-size: 3rem;
    color: #007bff;
    margin-bottom: 10px;
    transition: color 0.3s ease;

    &:hover {
        color: #0056b3;
    }

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

const SkillName = styled.span`
    font-size: 1rem;
    color: #333;

    @media (max-width: 768px) {
        font-size: 0.95rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

// Skills Component
const Skills = () => {
    const skills = [
        { id: 1, name: 'JavaScript', icon: <FaJsSquare /> },
        { id: 2, name: 'Python', icon: <FaPython /> },
        { id: 3, name: 'React', icon: <FaReact /> },
        { id: 4, name: 'Node.js', icon: <FaNodeJs /> },
        { id: 5, name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { id: 6, name: 'SQL', icon: <FaDatabase /> },
        { id: 7, name: 'PostgreSQL', icon: <SiPostgresql /> },
        { id: 8, name: 'MySQL', icon: <SiMysql /> },
        { id: 9, name: 'HTML5', icon: <FaHtml5 /> },
        { id: 10, name: 'CSS', icon: <SiCss3 /> },
        { id: 11, name: 'Flask', icon: <SiFlask /> },
        { id: 12, name: 'GitHub', icon: <FaGithub /> },
        { id: 13, name: 'Linux', icon: <SiLinux /> },
        { id: 14, name: 'Postman', icon: <SiPostman /> },
        { id: 15, name: 'SQLite3', icon: <SiSqlite /> },
    ];

    return (
        <SkillsSection id="skills">
            <Title>Skills</Title>
            <SkillList>
                {skills.map((skill) => (
                    <SkillItem key={skill.id}>
                        <SkillIcon>{skill.icon}</SkillIcon>
                        <SkillName>{skill.name}</SkillName>
                    </SkillItem>
                ))}
            </SkillList>
        </SkillsSection>
    );
};

export default Skills;
