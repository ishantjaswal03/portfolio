import React from 'react';
import profileImg from '../assets/profile_picture.png';
import problemSolvingImg from '../assets/problem_solving.jpg';
import technologySecurityImg from '../assets/technology_and_security.jpg';
import buildingExperimentingImg from '../assets/building_and_experimenting.jpg';
import communicationImg from '../assets/communication.jpg';
import collaborationLeadershipImg from '../assets/collaboration_and_leadership.jpg';
import learningAdaptabilityImg from '../assets/learning_and_adaptability.jpg';
import useScrollReveal from '../hooks/useScrollReveal';
import ChromaGrid from '../components/ChromaGrid';

const whatIDoItems = [
    {
        image: problemSolvingImg,
        title: "Problem Solving",
        subtitle: "I enjoy understanding how different pieces fit together — whether it's a technical system, a workflow, or a team process. Once I see the big picture, I like finding simple, practical ways to improve it.",
        borderColor: "#3B82F6",
        gradient: "linear-gradient(145deg, #3B82F6, #000)"
    },
    {
        image: technologySecurityImg,
        title: "Technology & Security",
        subtitle: "I work with technology to make systems more secure, efficient, and reliable. I'm comfortable exploring tools, learning new platforms, and navigating complex technical environments, especially where security and operations meet.",
        borderColor: "#10B981",
        gradient: "linear-gradient(180deg, #10B981, #000)"
    },
    {
        image: buildingExperimentingImg,
        title: "Building & Experimenting",
        subtitle: "I love creating things: labs to practice skills, small tools to automate tasks, or websites to tell stories. I see each project as an experiment — an opportunity to test an idea, learn something new, and ship something real.",
        borderColor: "#F59E0B",
        gradient: "linear-gradient(165deg, #F59E0B, #000)"
    },
    {
        image: communicationImg,
        title: "Communication",
        subtitle: "I believe good work should also be explained well. I enjoy documenting processes, writing clear notes, and making information easy to understand for others — whether they're technical or non-technical.",
        borderColor: "#EF4444",
        gradient: "linear-gradient(195deg, #EF4444, #000)"
    },
    {
        image: collaborationLeadershipImg,
        title: "Collaboration & Leadership",
        subtitle: "I value working with people as much as systems. I'm comfortable taking responsibility, listening to others, and helping teams move forward with clarity and open communication.",
        borderColor: "#8B5CF6",
        gradient: "linear-gradient(225deg, #8B5CF6, #000)"
    },
    {
        image: learningAdaptabilityImg,
        title: "Learning & Adaptability",
        subtitle: "I actively invest in my growth through self-study, labs, courses, and real-world practice. I'm open to new domains and confident in my ability to pick things up quickly when there's a challenge worth solving.",
        borderColor: "#06B6D4",
        gradient: "linear-gradient(135deg, #06B6D4, #000)"
    }
];

const Home = () => {
    useScrollReveal();

    return (
        <div className="fade-in">
            {/* Hero Section */}
            <section style={styles.hero}>
                <div className="container hero-container-mobile" style={styles.heroContainer}>
                    <div className="hero-content-mobile" style={styles.heroContent}>
                        <p style={styles.introLine} className="intro-line-mobile reveal delay-100">
                            Hi, I'm Ishant — welcome to my corner of the internet.
                        </p>
                        <h1 style={styles.title} className="title-mobile reveal delay-200">
                            <span style={styles.highlight}>Problem solver</span>, builder of ideas, and lifelong learner.
                        </h1>
                        <div style={styles.ctaGroup} className="cta-group-mobile reveal delay-200">
                            <a href="/projects" className="btn btn-primary">View My Work</a>
                            <a href="/contact" className="btn" style={styles.btnOutline}>Contact Me</a>
                        </div>
                    </div>
                    <div className="image-wrapper-mobile reveal" style={styles.imageWrapper}>
                        <img src={profileImg} alt="Ishant Jaswal" style={styles.profileImage} />
                    </div>
                </div>
            </section>

            {/* What I Do Section */}
            <section style={styles.section}>
                <div className="container">
                    <h2 className="section-title reveal">What I Do</h2>
                    <div style={{ minHeight: '900px', position: 'relative' }}>
                        <ChromaGrid
                            items={whatIDoItems}
                            radius={300}
                            damping={0.45}
                            fadeOut={0.6}
                            ease="power3.out"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const styles = {
    hero: {
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '8rem',
    },
    heroContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        gap: '4rem',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    imageWrapper: {
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '4px solid var(--primary-color)',
        boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)',
        flexShrink: 0,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    heroContent: {
        maxWidth: '600px',
    },
    introLine: {
        fontSize: '1.2rem',
        color: 'var(--primary-color)',
        marginBottom: '1rem',
        fontWeight: '500',
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
        lineHeight: '1.2',
    },
    highlight: {
        color: 'var(--primary-color)',
    },
    subtitle: {
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
        marginBottom: '1.5rem',
        lineHeight: '1.7',
    },
    supportingText: {
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        marginBottom: '2.5rem',
        lineHeight: '1.7',
    },
    ctaGroup: {
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
    },
    btnOutline: {
        border: '2px solid var(--primary-color)',
        color: 'var(--primary-color)',
    },
    section: {
        padding: '5rem 0',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
    },
    card: {
        backgroundColor: 'var(--card-bg)',
        padding: '2rem',
        borderRadius: '1rem',
        transition: 'transform 0.3s ease',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
    },
    icon: {
        fontSize: '2.5rem',
        marginBottom: '1rem',
        display: 'block',
    },
    cardTitle: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: 'var(--text-primary)',
    },
    cardText: {
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
        flex: 1,
    },
};

export default Home;
