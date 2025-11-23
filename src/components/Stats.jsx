import React from 'react';

const Stats = () => {
    const stats = [
        { value: '7500+', label: 'Assets Managed' },
        { value: '15%', label: 'Threat Detection Boost' },
        { value: '25%', label: 'Critical CVEs Reduced' },
        { value: '20%', label: 'SOC Response Time Cut' },
    ];

    return (
        <section style={styles.section}>
            <div className="container">
                <div style={styles.grid}>
                    {stats.map((stat, index) => (
                        <div key={index} style={styles.card} className="stat-card">
                            <h3 style={styles.value}>{stat.value}</h3>
                            <p style={styles.label}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>
                {`
          .stat-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }
        `}
            </style>
        </section>
    );
};

const styles = {
    section: {
        padding: '4rem 0',
        backgroundColor: 'transparent',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
    },
    card: {
        backgroundColor: 'var(--card-bg)',
        padding: '2rem',
        borderRadius: '1rem',
        textAlign: 'center',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '160px',
    },
    value: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: 'var(--primary-color)',
        marginBottom: '0.5rem',
        background: 'linear-gradient(to right, var(--primary-color), var(--secondary-color))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    label: {
        color: 'var(--text-secondary)',
        fontSize: '1rem',
        fontWeight: '500',
    },
};

export default Stats;
