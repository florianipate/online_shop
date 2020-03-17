import React from 'react';
import './section-card.style.scss';
import { withRouter } from 'react-router-dom';

const SectionCard = ({title, imageUrl, history, linkUrl, match}) => (
    <div className="section-inner" onClick = {() => history.push(`${match.url}${linkUrl}`)}>
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
export default withRouter(SectionCard);