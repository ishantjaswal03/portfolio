import React, { useState } from 'react';

const Card3D = ({ icon, image, title, content }) => (
    <div className='carousel-card-3d'>
        {icon && <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{icon}</span>}
        {image && (
            <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: '1rem',
                border: '2px solid var(--primary-color)',
                margin: '0 auto 1rem'
            }}>
                <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
        )}
        <h4 style={{
            fontSize: '1.2rem',
            color: 'var(--primary-color)',
            marginBottom: '1rem',
            fontWeight: '600',
            textAlign: 'center'
        }}>{title}</h4>
        <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            lineHeight: '1.6',
            textAlign: 'center'
        }}>{content}</p>
    </div>
);

const Carousel3D = ({ children }) => {
    const [active, setActive] = useState(1);
    const count = React.Children.count(children);
    const MAX_VISIBILITY = 3;

    return (
        <div className='carousel-3d'>
            {active > 0 && (
                <button
                    className='nav-3d left'
                    onClick={() => setActive(i => i - 1)}
                    aria-label="Previous card"
                >
                    ‹
                </button>
            )}
            {React.Children.map(children, (child, i) => (
                <div
                    className='card-container-3d'
                    key={i}
                    style={{
                        '--active': i === active ? 1 : 0,
                        '--offset': (active - i) / 3,
                        '--direction': Math.sign(active - i),
                        '--abs-offset': Math.abs(active - i) / 3,
                        pointerEvents: active === i ? 'auto' : 'none',
                        opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                        display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                    }}
                >
                    {child}
                </div>
            ))}
            {active < count - 1 && (
                <button
                    className='nav-3d right'
                    onClick={() => setActive(i => i + 1)}
                    aria-label="Next card"
                >
                    ›
                </button>
            )}
        </div>
    );
};

export { Carousel3D, Card3D };
