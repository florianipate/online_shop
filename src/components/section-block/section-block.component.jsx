import React from 'react';
import './section-block.style.scss';
import SectionCard from '../section-card/section-card.component.jsx';

 class SectionBlock extends React.Component {
     constructor(){
         super();

         this.state = {
             cards: [{
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
                imageUrl: 'https://masseyandco.com/images/baby/image3.jpg',
                id:3
            },
            {
                title: 'accessories',
                imageUrl: 'https://masseyandco.com/images/accessories/image5.jpg',
                id:4
            }]
         }
     }
     render(){
         return(
            <div className="section-block">
            {
                this.state.cards.map(({ id, ...otherSectionProps }) => (
                    <SectionCard key = {id} {...otherSectionProps} />
                ))
            }
        </div>
         )
     }
 }
export default SectionBlock;