import React from 'react';
import StaggeredMenu from './StaggeredMenu';
import Footer from './Footer';
import logoImg from '../assets/logo.PNG';

const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Projects', ariaLabel: 'View my projects', link: '/projects' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
    { label: 'GitHub', link: 'https://github.com/ishantjaswal03' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/ishant-jaswal-7341b7372' }
];

const Layout = ({ children }) => {
    return (
        <div style={styles.layout}>
            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={true}
                menuButtonColor="#fff"
                openMenuButtonColor="#fff"
                changeMenuColorOnOpen={true}
                colors={['#B19EEF', '#5227FF']}
                logoUrl={logoImg}
                accentColor="#5227FF"
                isFixed={true}
            />
            <main style={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

const styles = {
    layout: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        flex: 1,
        // Removed paddingTop since StaggeredMenu is an overlay/fixed button usually, 
        // but if the button overlaps content we might need padding. 
        // For now, let's keep it minimal or remove it.
    },
};

export default Layout;
