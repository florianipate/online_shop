import React from 'react';
import './homepage.style.scss';
import Hero from '../../components/hero/hero.component.jsx';
import SectionBlock from '../../components/section-block/section-block.component.jsx';

const HomePage = () => (
<div className = "container">
    <Hero />
    <SectionBlock />
</div>
);

export default HomePage;