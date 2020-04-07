import React from 'react';
import '../homepage/homepage.style.scss';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component.jsx';
import DirectoryMenueItem from '../../components/directory-menu-item/directory-menu-item.component.jsx';
import Hero from '../../components/hero/hero.component.jsx';
import HeroInner from '../../components/hero-inner/hero-inner.component.jsx';
import SectionBlock from '../../components/section-block/section-block.component.jsx';
import SectionCard from '../../components/section-card/section-card.component.jsx';

class BabyPage extends React.Component {
    constructor(){
        super();
        this.state = {
            directory_menu_card:[{
                title:'Unisex Clothing',
                id: 1,
                linkUrl: '/clothing'
            },
            {
                title:"Boys' Clothing",
                id: 2,
                linkUrl: '/boys'
            },
            {
                title:"Girls' Clothing",
                id: 3,
                linkUrl: '/girls'
            },
            {
                title:"Baby' Shoes",
                id: 4,
                linkUrl: '/shoes'
            },
            {
                title:'Sweatshirt',
                id: 5,
                linkUrl: '/sweatshirt'
            },{
                title:'Strampler',
                id: 6,
                linkUrl: '/strampler'
            }],
            hero_cards:[{
                title: 'Tops & Shirts',
                imageUrl: 'https://masseyandco.com/images/image1440x930.jpg',
                id: '1',
                linkUrl: '/shirts'
            },
            {
                title: 'Babygrows & Basics',
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
               title: 'Shoes',
               imageUrl: 'https://masseyandco.com/images/image680x680.jpg',
               id:3,
               linkUrl: '/trousers'
           },
           {
               title: 'Trousers',
               imageUrl: 'https://masseyandco.com/images/image680x680.jpg',
               id:4,
               linkUrl: '/trousers'
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

export default BabyPage;