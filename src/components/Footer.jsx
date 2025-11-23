import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container" style={styles.container}>
                <p>&copy; {new Date().getFullYear()} Ishant Jaswal. All rights reserved.</p>
                <div style={styles.socials}>
                    {/* Add social icons here later */}
                    <a href="https://www.linkedin.com/in/ishant-jaswal-7341b7372" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
                    <a href="https://github.com/ishantjaswal03" target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        padding: '2rem 0',
        backgroundColor: 'transparent',
        marginTop: 'auto',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
    },
    socials: {
        display: 'flex',
        gap: '1.5rem',
    },
    link: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
    },
};

export default Footer;
