import React from 'react';
import './section-card.style.scss';

const SectionCard = ({title, imageUrl}) => (
    <div className="section-inner">
        <div className = "background-image">
            <img src={imageUrl} width="100%" height="100%"  alt="image1"/>
        </div>
        <h1 className = "title">{title}</h1>
    </div>
);
export default SectionCard;