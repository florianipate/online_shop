import React from 'react';
import '../homepage/homepage.style.scss';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component.jsx';
import DirectoryMenueItem from '../../components/directory-menu-item/directory-menu-item.component.jsx';
import Hero from '../../components/hero/hero.component.jsx';
import HeroInner from '../../components/hero-inner/hero-inner.component.jsx';
import SectionBlock from '../../components/section-block/section-block.component.jsx';
import SectionCard from '../../components/section-card/section-card.component.jsx';

class MenPage extends React.Component {
    constructor(){
        super();
        this.state = {
            directory_menu_card:[{
                title:'Clothing',
                id: 1,
                linkUrl: '/clothing'
            },
            {
                title:'Shoes',
                id: 2,
                linkUrl: '/shoes'
            },
            {
                title:'Watches',
                id: 3,
                linkUrl: '/watches'
            },
            {
                title:'Bags',
                id: 4,
                linkUrl: '/bags'
            },
            {
                title:'Luggage',
                id: 5,
                linkUrl: '/luggage'
            },{
                title:'Trainers',
                id: 6,
                linkUrl: '/trainers'
            }],
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
                linkUrl: '/jeans'
            }],

            section_cards:[{
                title: 'Trainers',
                imageUrl: 'https://masseyandco.com/images/men/trainers.jpg',
                id:1,
                linkUrl: '/trainers'
            },
           {
               title: 'Outware',
               imageUrl: 'https://masseyandco.com/images/men/QUAD_CARD_EDOITORIAL_OUTERWEAR._SS680_QL85_.jpg',
               id:2,
               linkUrl: '/outware'
           },
           {
               title: 'Trousers',
               imageUrl: 'https://masseyandco.com/images/men/trausers.jpg',
               id:3,
               linkUrl: '/trousers'
           },
           {
               title: 'Gim Kit',
               imageUrl: 'https://masseyandco.com/images/men/gim_kit.jpg',
               id:4,
               linkUrl: '/gim-kit'
           }]
        }
    }
    render () {
        return(
        <div className = "container">
            <DirectoryMenu>
                {
                   this.state.directory_menu_card.map(({ id, ...otherSectionProps }) => (
                    <DirectoryMenueItem key = {id} {...otherSectionProps} /> 
                )) 
                }
            </DirectoryMenu>
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