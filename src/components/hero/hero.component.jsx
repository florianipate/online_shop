import React from 'react';
import './hero.style.scss'
import HeroInner from '../hero-inner/hero-inner.component.jsx';

class Hero extends React.Component {
    constructor(){
        super();
        this.state = {
            cards : [{
                    title: 'Women',
                    imageUrl: 'https://masseyandco.com/images/women/W_HERO_DOUBLE_CARD.jpg',
                    id: '1',
                    linkUrl: 'women'
                },
                {
                    title: 'Men',
                    imageUrl: 'https://masseyandco.com/images/men/M_HERO_DOUBLE_CARD.jpg',
                    id: 2,
                    linkUrl: 'men'
                }]
        }
    }
    render(){
        return(
           <div className="hero">
               {
                   this.state.cards.map(({ id, ...otherSectionProps }) => (
                       <HeroInner key = {id} {...otherSectionProps} />
                   ))
               }
           </div>
        )
    }

}
export default Hero;