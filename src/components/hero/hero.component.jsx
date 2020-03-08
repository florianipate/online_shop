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
                    id: '1'
                },
                {
                    title: 'Men',
                    imageUrl: 'https://masseyandco.com/images/men/M_HERO_DOUBLE_CARD.jpg',
                    id: 2
                }]
        }
    }
    render(){
        return(
           <div className="hero">
               {
                   this.state.cards.map(({title, id, imageUrl}) => (
                       <HeroInner key = {id} title = {title} imageUrl = {imageUrl}/>
                   ))
               }
           </div>
        )
    }

}
export default Hero;