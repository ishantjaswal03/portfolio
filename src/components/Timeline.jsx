import React from 'react';

const Timeline = () => {
    const journeySteps = [
        {
            year: 'Student Years',
            title: 'Discovering Tech',
            description: 'I started with a curiosity for computers and how things work under the hood. Studying Computer Science gave me the technical foundation to think logically, code, and understand core concepts like networking, systems, and software.',
            icon: '🎓',
        },
        {
            year: '2020-2022',
            title: 'Getting Into Security & Tech',
            description: 'As I explored more, I became interested in how systems break, how attackers think, and how organizations defend themselves. That led me deeper into security operations, analysis, and building a mindset around risk, defense, and resilience.',
            icon: '🔐',
        },
        {
            year: 'Ongoing',
            title: 'Building Projects & Experiments',
            description: 'Alongside this, I started building my own small projects — from coding practice to labs and personal websites. I realized that I enjoy the process of creating at least as much as the final result.',
            icon: '⚡',
        },
        {
            year: 'Today',
            title: 'Growing & Exploring',
            description: 'Today, I\'m continuing to grow in technology and security while keeping my mind open to other paths: product building, entrepreneurship, leadership roles, and any space where I can combine problem solving, people skills, and execution.',
            icon: '🚀',
        },
        {
            year: 'Future',
            title: 'The Journey Continues',
            description: 'I don\'t know exactly what title I\'ll have 5–10 years from now — and I like that. What I do know is that I want to keep learning, keep building, and keep taking on challenges that matter.',
            icon: '🌟',
        },
    ];

    return (
        <section style={styles.section}>
            <h3 style={styles.sectionTitle}>My Journey So Far</h3>
            <div style={styles.timelineContainer} className="timeline-container">
                <div style={styles.timeline} className="timeline">
                    {journeySteps.map((step, index) => (
                        <div
                            key={index}
                            style={styles.timelineItem}
                            className="timeline-item reveal"
                        >
                            <div
                                style={{
                                    ...styles.timelineIcon,
                                    animationDelay: `${index * 0.1}s`,
                                }}
                                className="timeline-icon"
                            >
                                {step.icon}
                            </div>
                            <div style={styles.timelineContent}>
                                <div style={styles.timelineYear}>{step.year}</div>
                                <h4 style={styles.timelineTitle}>{step.title}</h4>
                                <p style={styles.timelineDescription}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        marginTop: '4rem',
        marginBottom: '4rem',
    },
    sectionTitle: {
        fontSize: '2rem',
        textAlign: 'center',
        marginBottom: '3rem',
        color: 'var(--text-primary)',
    },
    timelineContainer: {
        position: 'relative',
    },
    timeline: {
        position: 'relative',
        maxWidth: '800px',
        margin: '0 auto',
        paddingLeft: '60px',
    },
    timelineItem: {
        position: 'relative',
        paddingBottom: '3rem',
        display: 'flex',
        gap: '2rem',
    },
    timelineIcon: {
        position: 'absolute',
        left: '-60px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: 'var(--card-bg)',
        border: '3px solid var(--primary-color)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        boxShadow: '0 0 15px rgba(56, 189, 248, 0.3)',
        zIndex: 2,
    },
    timelineContent: {
        flex: 1,
        backgroundColor: 'var(--card-bg)',
        padding: '1.5rem',
        borderRadius: '1rem',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
    },
    timelineYear: {
        color: 'var(--primary-color)',
        fontSize: '0.9rem',
        fontWeight: '600',
        marginBottom: '0.5rem',
    },
    timelineTitle: {
        fontSize: '1.3rem',
        color: 'var(--text-primary)',
        marginBottom: '0.8rem',
        fontWeight: '600',
    },
    timelineDescription: {
        color: 'var(--text-secondary)',
        lineHeight: '1.6',
    },
};

export default Timeline;
