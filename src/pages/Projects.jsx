import React from 'react';
import portfolioImg from '../assets/portfolio.jpg';
import sapphireImg from '../assets/sapphire.jpg';
import socImg from '../assets/soc_simulation.jpg';
import weatherImg from '../assets/weather_app.jpg';
import useScrollReveal from '../hooks/useScrollReveal';

const Projects = () => {
    useScrollReveal();

    const projects = [
        {
            title: 'Personal Portfolio Website',
            description: 'This website is my digital home — a place to present who I am, what I do, and where I\'m heading. I designed it to be clean, focused, and flexible enough to grow with me. Over time, I\'ll keep adding new projects, ideas, and experiments here.',

            image: portfolioImg,
        },
        {
            title: 'Sapphire Tech Consulting – Website',
            description: 'A modern enterprise website built for Sapphire Tech Consulting to showcase services, expertise, and case studies. I focused on a clean layout, easy navigation, and clear CTAs so visitors can quickly understand what the company does and how to contact them. The site is fully responsive and optimised for desktop and mobile.',
            image: sapphireImg,
        },
        {
            title: 'SOC Simulation Lab',
            description: 'A practice environment that simulates real-world security incidents so beginners can experience how a SOC works. I designed scenarios with alerts, logs, and basic triage steps to help users learn how to investigate, prioritise, and respond without breaking anything in production.',
            image: socImg,
        },
        {
            title: 'Weather & Wardrobe Chatbot',
            description: 'A small college project where I built a weather app that doesn’t just show the forecast—it suggests what to wear. The chatbot checks the current weather and then gives simple outfit recommendations, making the experience more fun and conversational.',
            image: weatherImg,
        },
    ];

    return (
        <div className="fade-in" style={{ padding: '8rem 0' }}>
            <div className="container">
                <h2 className="section-title reveal">My Projects</h2>
                <p style={styles.intro} className="reveal">
                    This section is a snapshot of what I've been working on — from technical experiments to personal projects. Some are complete, some are in progress, and many will keep evolving as I learn more and move into new areas.
                </p>
                <div style={styles.grid} className="grid-2-cols">
                    {projects.map((project, index) => (
                        <div key={index} style={styles.card} className={`reveal delay-${(index % 3) + 1}00 project-card`}>
                            <div style={styles.imageWrapper}>
                                <img src={project.image} alt={project.title} style={styles.image} />
                            </div>
                            <div style={styles.content}>
                                <h3 style={styles.title}>{project.title}</h3>
                                <p style={styles.description}>{project.description}</p>
                                {project.highlights && (
                                    <ul style={styles.highlightsList}>
                                        {project.highlights.map((highlight, i) => (
                                            <li key={i} style={styles.highlightItem}>{highlight}</li>
                                        ))}
                                    </ul>
                                )}
                                {project.tags && (
                                    <div style={styles.tags}>
                                        {project.tags.map((tag, i) => (
                                            <span key={i} style={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                )}
                                {project.link && (
                                    <a href={project.link} style={styles.link}>Learn More &rarr;</a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>
                {`
          .project-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          }
          .project-card:hover .imageWrapper img {
            transform: scale(1.05);
          }
        `}
            </style>
        </div>
    );
};

const styles = {
    intro: {
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto 3rem auto',
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.7',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2.5rem',
    },
    card: {
        backgroundColor: 'var(--card-bg)',
        borderRadius: '1rem',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        flexDirection: 'column',
    },
    imageWrapper: {
        height: '220px',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease',
    },
    content: {
        padding: '2rem',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: 'var(--text-primary)',
    },
    description: {
        color: 'var(--text-secondary)',
        marginBottom: '1.2rem',
        lineHeight: '1.6',
    },
    highlightsList: {
        margin: '0 0 1.5rem 0',
        padding: '0 0 0 1.2rem',
        listStyle: 'none',
    },
    highlightItem: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        marginBottom: '0.5rem',
        position: 'relative',
        paddingLeft: '1rem',
        lineHeight: '1.5',
    },
    tags: {
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
    },
    tag: {
        fontSize: '0.8rem',
        padding: '0.3rem 0.9rem',
        borderRadius: '1rem',
        backgroundColor: 'rgba(56, 189, 248, 0.1)',
        color: 'var(--primary-color)',
        border: '1px solid rgba(56, 189, 248, 0.3)',
    },
    link: {
        color: 'var(--primary-color)',
        fontWeight: '600',
        display: 'inline-block',
        marginTop: 'auto',
        fontSize: '0.95rem',
    },
};

export default Projects;
