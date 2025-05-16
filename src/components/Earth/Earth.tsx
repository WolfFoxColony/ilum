import React from 'react';
import earth from '../../../public/earth.png';
import './Earth.scss';

const Earth = () => {
    return (
        <div
            style={{
                position: 'absolute',
                bottom: '-55%',
                zIndex: 1,
                animation: 'rotate 50s linear infinite',
                width: '100%',
                height: '100%'
            }}>
            <img
                src={earth}
                alt="Earth"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                }}/>
        </div>
    );
};

export default Earth;
