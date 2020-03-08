import React from 'react';
import './hero.style.scss'
import HeroInner from '../hero-inner/hero-inner.component.jsx';

class Hero extends React.Component {
    constructor(){
        super();
        this.state = {
            cards : [{
                    title: 'women',
                    imageUrl: 'https://http://masseyandco.com/images/men/M_HERO_DOUBLE_CARD.jpg',
                    id: '1'
                },
                {
                    title: 'men',
                    imageUrl: 'http://masseyandco.com/images/men/M_HERO_DOUBLE_CARD.jpg',
                    id: 2
                }]
        }
    }
    render(){
        return(
           <div className="hero">
               {
                   this.state.cards.map(({title, id, imageUrl}) => (
                       <HeroInner key = {id} title = {title}/>
                   ))
               }
           </div>
        )
    }

}
export default Hero;