import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
    useScrollReveal();

    return (
        <div className="fade-in" style={{ padding: '8rem 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title reveal">Let's Connect</h2>
                <div style={styles.wrapper} className="reveal delay-100">
                    <p style={styles.text}>
                        If something here resonated with you — whether it's my work, my mindset, or just the way I look at growth — I'd be happy to connect.
                    </p>
                    <div style={styles.openToSection}>
                        <h3 style={styles.openToTitle}>I'm open to:</h3>
                        <ul style={styles.openToList}>
                            <li>Collaborations on projects and experiments</li>
                            <li>Opportunities in technology, security, and beyond</li>
                            <li>Mentorship, learning conversations, or just swapping ideas</li>
                        </ul>
                    </div>
                    <p style={styles.contactText}>
                        You can reach me directly via email/LinkedIn. I try my best to respond thoughtfully and on time.
                    </p>
                    <a href="mailto:ishant@example.com" className="btn btn-primary" style={styles.btn}>
                        Send a Message
                    </a>
                    <p style={styles.closingText}>
                        Thanks for visiting my space. This is just the beginning, and I'm excited to see where the journey goes from here.
                    </p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'center',
        backgroundColor: 'var(--card-bg)',
        padding: '3rem',
        borderRadius: '1rem',
        border: '1px solid rgba(255, 255, 255, 0.05)',
    },
    text: {
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
        marginBottom: '2.5rem',
        lineHeight: '1.7',
    },
    openToSection: {
        marginBottom: '2.5rem',
        backgroundColor: 'rgba(56, 189, 248, 0.05)',
        padding: '2rem',
        borderRadius: '0.8rem',
        border: '1px solid rgba(56, 189, 248, 0.2)',
    },
    openToTitle: {
        fontSize: '1.3rem',
        color: 'var(--primary-color)',
        marginBottom: '1.2rem',
        fontWeight: '600',
    },
    openToList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    contactText: {
        fontSize: '1.05rem',
        color: 'var(--text-secondary)',
        marginBottom: '2rem',
        lineHeight: '1.6',
    },
    btn: {
        fontSize: '1.1rem',
        padding: '1rem 2.5rem',
        marginBottom: '2rem',
    },
    closingText: {
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        fontStyle: 'italic',
        marginTop: '2rem',
        lineHeight: '1.6',
    },
};

export default Contact;
