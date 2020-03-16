import React from 'react';
import '../homepage/homepage.style.scss';
import Hero from '../../components/hero/hero.component.jsx';
import HeroInner from '../../components/hero-inner/hero-inner.component.jsx'
import SectionBlock from '../../components/section-block/section-block.component.jsx';
import SectionCard from '../../components/section-card/section-card.component.jsx';

class MenPage extends React.Component {
    constructor(){
        super();
        this.state = {
            hero_cards:[{
                title: 'Shirts',
                imageUrl: 'https://masseyandco.com/images/men/shirt.jpg',
                id: '1',
                linkUrl: '/shirts'
            },
            {
                title: 'Jeans',
                imageUrl: 'https://masseyandco.com/images/men/jeans.jpg',
                id: 2,
                linkUrl: '/men'
            }],

            section_cards:[{
                title: 'Trainers',
                imageUrl: 'https://masseyandco.com/images/men/trainers.jpg',
                id:1
            },
           {
               title: 'Outware',
               imageUrl: 'https://masseyandco.com/images/men/QUAD_CARD_EDOITORIAL_OUTERWEAR._SS680_QL85_.jpg',
               id:2
           },
           {
               title: 'Trousers',
               imageUrl: 'https://masseyandco.com/images/men/trausers.jpg',
               id:3
           },
           {
               title: 'Gim Kit',
               imageUrl: 'https://masseyandco.com/images/men/gim_kit.jpg',
               id:4
           }]
        }
    }
    render () {
        return(
        <div className = "container">
            <Hero>
            {
                this.state.hero_cards.map(({ id, ...otherSectionProps }) => (
                    <HeroInner key = {id} {...otherSectionProps} /> 
                ))
               }
            </Hero>
            <SectionBlock>
            {
                this.state.section_cards.map(({ id, ...otherSectionProps }) => (
                    <SectionCard key = {id} {...otherSectionProps} />
                ))
            }
            </SectionBlock>
        </div>
        );
    }
}

export default MenPage;