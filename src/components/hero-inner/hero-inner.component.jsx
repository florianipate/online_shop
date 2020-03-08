import React from 'react';
import './hero-inner.style.scss';

const HeroInner = ({title}) => (
    <div className="hero-inner">
        <div className="content">
<h1 className="title">{title}</h1>
        </div>
        
    </div>
);

export default HeroInner;