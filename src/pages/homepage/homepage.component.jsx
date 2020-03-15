import React from 'react';
import './homepage.style.scss';
import Hero from '../../components/hero/hero.component.jsx';
import HeroInner from '../../components/hero-inner/hero-inner.component.jsx'
import SectionBlock from '../../components/section-block/section-block.component.jsx';
import SectionCard from '../../components/section-card/section-card.component.jsx';

class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            hero_cards:[{
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
            }],

            section_cards:[{
                title: 'girls',
                imageUrl: 'https://masseyandco.com/images/girls/girl.jpg',
                id:1
            },
           {
               title: 'boys',
               imageUrl: 'https://masseyandco.com/images/boys/boys.jpg',
               id:2
           },
           {
               title: 'baby',
               imageUrl: 'https://masseyandco.com/images/baby/baby.jpg',
               id:3
           },
           {
               title: 'accessories',
               imageUrl: 'https://masseyandco.com/images/accessories/accessories.jpg',
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

export default HomePage;