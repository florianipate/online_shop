import React from 'react';
import '../homepage/homepage.style.scss';
import DirectoryMenu from '../../components/directory-menu/directory-menu.component.jsx';
import DirectoryMenueItem from '../../components/directory-menu-item/directory-menu-item.component.jsx';
import Hero from '../../components/hero/hero.component.jsx';
import HeroInner from '../../components/hero-inner/hero-inner.component.jsx';
import SectionBlock from '../../components/section-block/section-block.component.jsx';
import SectionCard from '../../components/section-card/section-card.component.jsx';

class GirlsPage extends React.Component {
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
                title:'Backpacks',
                id: 3,
                linkUrl: '/backpacks'
            },
            {
                title:'Watches',
                id: 4,
                linkUrl: '/watches'
            },
            {
                title:'Jewellery',
                id: 5,
                linkUrl: '/jewellery'
            },{
                title:'Trainers',
                id: 6,
                linkUrl: '/trainers'
            }],
            hero_cards:[{
                title: 'Dream Dreass',
                imageUrl: 'https://masseyandco.com/images/image1440x930.jpg',
                id: '1',
                linkUrl: '/dresses'
            },
            {
                title: 'Jacket',
                imageUrl: 'https://masseyandco.com/images/image1440x930.jpg',
                id: 2,
                linkUrl: '/jacket'
            }],

            section_cards:[{
                title: 'Tops &Blouses',
                imageUrl: 'https://masseyandco.com/images/image680x680.jpg',
                id:1,
                linkUrl: '/trainers'
            },
           {
               title: 'Outware',
               imageUrl: 'https://masseyandco.com/images/image680x680.jpg',
               id:2,
               linkUrl: '/outwares'
           },
           {
               title: 'Shorts',
               imageUrl: 'https://masseyandco.com/images/image680x680.jpg',
               id:3,
               linkUrl: '/shorts'
           },
           {
               title: 'Pyjamas',
               imageUrl: 'https://masseyandco.com/images/image680x680.jpg',
               id:4,
               linkUrl: '/pyjamas'
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

export default GirlsPage;