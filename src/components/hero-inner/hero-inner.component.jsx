import React from 'react';
import { withRouter } from 'react-router-dom';

import './hero-inner.style.scss';

const HeroInner = ({title, imageUrl, history, linkUrl, match}) => (
    <div
        className="hero-inner" onClick = {() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(HeroInner);