import React from 'react';
import './hero-inner.style.scss';

const HeroInner = ({title, imageUrl}) => (
    <div
        className="hero-inner">
        <div className = "background-image">
            <img src={imageUrl} width="100%" height="100%"  alt="image1"/>
        </div> 
        <div className="subtitle">
            <div className = "content">
            <h1 className = "title">{title}</h1>
            </div>
        </div>
        
    </div>
);

export default HeroInner;