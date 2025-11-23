import React, { useEffect } from 'react';
import hikingImg from '../assets/hobby-hiking.png';
import Timeline from '../components/Timeline';
import { Carousel3D, Card3D } from '../components/Carousel3D';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLocation } from 'react-router-dom';

const About = () => {
    useScrollReveal();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);

            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="fade-in" style={{ padding: '8rem 0' }}>
            <div className="container">
                <h2 className="section-title reveal">About Me</h2>

                <div style={styles.content}>
                    {/* Main Introduction */}
                    <div style={styles.textSection}>
                        <p style={styles.paragraph} className="reveal delay-100">
                            I'm <strong>Ishant Jaswal</strong>, a tech-driven problem solver from Shimla with a background in Computer Science and hands-on experience in cybersecurity. I enjoy working where logic, creativity, and real-world impact intersect. Whether I'm investigating an issue, improving a workflow, or building something from scratch, I'm happiest when I'm learning and contributing to something meaningful.
                        </p>
                        <p style={styles.paragraph} className="reveal delay-200">
                            Right now, a big part of my work is in technology and security — understanding systems, analyzing data, identifying risks, and helping make things more secure and reliable. But I've never seen my identity as "only" a cybersecurity professional. I see myself as someone who can adapt, pick up new skills, and move across domains as opportunities and interests evolve.
                        </p>
                        <p style={styles.paragraph} className="reveal delay-300">
                            I enjoy taking complex, messy situations and turning them into clear, actionable steps. I like asking "Why does this work like this?" and "How can we make it better?" I'm comfortable being a beginner in new areas, I like experimenting, and I believe the best way to grow is to keep building — projects, habits, relationships, and experiences.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="reveal" id="journey">
                        <Timeline />
                    </div>

                    <div style={styles.divider} className="reveal"></div>

                    {/* Who I Am Beyond Work */}
                    <h3 style={styles.subTitle} className="reveal" id="beyond-screen">Beyond the Screen</h3>
                    <p style={styles.paragraph} className="reveal">
                        My life isn't just about laptops and logs. The things I do outside work shape how I think, how I handle pressure, and how I approach growth.
                    </p>
                    <div className="reveal">
                        <Carousel3D>
                            <Card3D
                                icon="🏀"
                                title="State-Level Basketball"
                                content="Basketball has been a constant in my life. Competing at state level taught me discipline, consistency, and how to stay calm when the pressure is high. On the court you quickly learn that talent alone is not enough – you need practice, communication, and trust. The way I train, support my teammates, and keep pushing for small improvements is the same way I approach my work and long-term goals."
                            />
                            <Card3D
                                image={hikingImg}
                                title="Hiking & the Mountains"
                                content="Hiking is my reset button. Long walks, steep climbs, and quiet viewpoints give me the space to think clearly and recharge. Being outdoors reminds me that progress is mostly about taking the next step, even when the path is tough. Many of my best ideas, decisions, and plans start on a trail, and I carry that slow, steady, forward mindset into the way I learn, work, and grow."
                            />
                            <Card3D
                                icon="💡"
                                title="Turning Ideas Into Reality"
                                content="I'm always collecting ideas – for projects, habits, tools, and better systems. I keep notes, sketches, and drafts, then turn the most interesting ones into something real: a prototype, a script, a document, or a website. I like starting small, improving as I go, and learning from each version. For me, creativity is less about sudden inspiration and more about consistently building, refining, and shipping what I imagine."
                            />
                        </Carousel3D>
                    </div>

                    <div style={styles.divider} className="reveal"></div>

                    {/* How I Work */}
                    <h3 style={styles.subTitle} className="reveal" id="how-i-work">How I Work</h3>
                    <div style={styles.workStyleGrid} className="grid-3-cols">
                        <div style={styles.workStyleCard} className="reveal delay-100">
                            <h4 style={styles.workStyleTitle}>Curious by default</h4>
                            <p style={styles.workStyleText}>I like to understand the "why" behind things, not just follow instructions.</p>
                        </div>
                        <div style={styles.workStyleCard} className="reveal delay-200">
                            <h4 style={styles.workStyleTitle}>Structured thinker</h4>
                            <p style={styles.workStyleText}>I break problems into parts, prioritize, and tackle them step by step.</p>
                        </div>
                        <div style={styles.workStyleCard} className="reveal delay-300">
                            <h4 style={styles.workStyleTitle}>Builder's mindset</h4>
                            <p style={styles.workStyleText}>I'd rather create a quick prototype or draft than just talk about ideas.</p>
                        </div>
                        <div style={styles.workStyleCard} className="reveal delay-100">
                            <h4 style={styles.workStyleTitle}>Team-oriented</h4>
                            <p style={styles.workStyleText}>Years of playing team sports taught me how to communicate, support others, and take responsibility.</p>
                        </div>
                        <div style={styles.workStyleCard} className="reveal delay-200">
                            <h4 style={styles.workStyleTitle}>Growth-focused</h4>
                            <p style={styles.workStyleText}>I actively look for feedback, new challenges, and environments that push me to level up.</p>
                        </div>
                        <div style={styles.workStyleCard} className="reveal delay-300">
                            <h4 style={styles.workStyleTitle}>Calm under pressure</h4>
                            <p style={styles.workStyleText}>I stay steady when deadlines shift or problems appear, focus on priorities, and keep work moving with clear communication.</p>
                        </div>
                    </div>

                    <div style={styles.divider} className="reveal"></div>

                    {/* Personal Values */}
                    <div style={styles.valuesSection} className="reveal delay-100">
                        <h3 style={styles.subTitle} id="values">What I Value</h3>
                        <ul style={styles.valuesList}>
                            <li style={styles.valueItem}><strong>Curiosity over comfort</strong> – I'd rather ask questions and try something new than stay stuck doing what I already know.</li>
                            <li style={styles.valueItem}><strong>Progress over perfection</strong> – I aim to move forward consistently, even if it's through small steps and imperfect first versions.</li>
                            <li style={styles.valueItem}><strong>Ownership</strong> – If something has my name on it, I care about the quality. I don't like doing things halfway.</li>
                            <li style={styles.valueItem}><strong>Team & respect</strong> – I value people who show up, support each other, and give honest feedback.</li>
                            <li style={styles.valueItem}><strong>Long-term thinking</strong> – I'm building a career and life that can evolve, not just chasing the next shiny thing.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    content: {
        maxWidth: '900px',
        margin: '0 auto',
    },
    textSection: {
        marginBottom: '3rem',
    },
    paragraph: {
        marginBottom: '1.5rem',
        fontSize: '1.1rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.8',
    },
    divider: {
        height: '1px',
        backgroundColor: 'rgba(255,255,255,0.1)',
        margin: '3rem 0',
    },
    subTitle: {
        fontSize: '2rem',
        color: 'var(--text-primary)',
        marginBottom: '2rem',
        textAlign: 'center',
    },
    workStyleGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
        marginTop: '2rem',
    },
    workStyleCard: {
        backgroundColor: 'rgba(56, 189, 248, 0.05)',
        padding: '1.5rem',
        borderRadius: '0.8rem',
        border: '1px solid rgba(56, 189, 248, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
    },
    workStyleTitle: {
        fontSize: '1.1rem',
        color: 'var(--primary-color)',
        marginBottom: '0.5rem',
        fontWeight: '600',
    },
    workStyleText: {
        color: 'var(--text-secondary)',
        fontSize: '0.95rem',
        lineHeight: '1.6',
        flex: 1,
    },
    valuesSection: {
        textAlign: 'center',
        backgroundColor: 'rgba(56, 189, 248, 0.03)',
        padding: '3rem',
        borderRadius: '1rem',
        border: '1px solid rgba(56, 189, 248, 0.15)',
    },
    valuesList: {
        listStyle: 'none',
        padding: 0,
        margin: '2rem 0 0 0',
        textAlign: 'left',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    valueItem: {
        color: 'var(--text-secondary)',
        fontSize: '1.05rem',
        lineHeight: '1.8',
        marginBottom: '1rem',
        paddingLeft: '2rem',
        position: 'relative',
    },
};

export default About;
