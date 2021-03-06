import React from 'react';
import '../homepage/homepage.style.scss';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component.jsx';
import DirectoryMenueItem from '../../components/directory-menu-item/directory-menu-item.component.jsx';
import Hero from '../../components/hero/hero.component.jsx';
import HeroInner from '../../components/hero-inner/hero-inner.component.jsx';
import SectionBlock from '../../components/section-block/section-block.component.jsx';
import SectionCard from '../../components/section-card/section-card.component.jsx';

class BoysPage extends React.Component {
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
                title:'Trainers',
                id: 3,
                linkUrl: '/trainers'
            },
            {
                title:'Watches',
                id: 4,
                linkUrl: '/watches'
            },
            {
                title:'Backpacks',
                id: 5,
                linkUrl: '/backpacks'
            },{
                title:'Hoodies',
                id: 6,
                linkUrl: '/hoodies'
            }],
            hero_cards:[{
                title: 'Tops & Shirts',
                imageUrl: 'https://masseyandco.com/images/image1440x930.jpg',
                id: '1',
                linkUrl: '/shirts'
            },
            {
                title: 'Sandals',
                imageUrl: 'https://masseyandco.com/images/image1440x930.jpg',
                id: 2,
                linkUrl: '/sandals'
            }],

            section_cards:[{
                title: 'Shorts',
                imageUrl: 'https://masseyandco.com/images/image680x680.jpg',
                id:1,
                linkUrl: '/shorts'
            },
           {
               title: 'Outware',
               imageUrl: 'https://masseyandco.com/images/image680x680.jpg',
               id:2,
               linkUrl: '/outwares'
           },
           {
               title: 'Trousers',
               imageUrl: 'https://masseyandco.com/images/image680x680.jpg',
               id:3,
               linkUrl: '/trousers'
           },
           {
               title: 'Underweare',
               imageUrl: 'https://masseyandco.com/images/image680x680.jpg',
               id:4,
               linkUrl: '/underware'
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

export default BoysPage;