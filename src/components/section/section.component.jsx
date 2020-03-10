import React from 'react';
import './section.style.scss';
import SectionCard from '../section-card/section-card.component.jsx';

class Section extends React.Component {
    constructor(){
        super();
        this.state = {
            section_cards:[
                {
                    title: 'girls',
                    imageUrl: '',
                    id: 1,
                    linkUrl: ''
                },
                {
                    title: 'boys',
                    imageUrl: '',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'baby',
                    imageUrl: '',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'accessories',
                    imageUrl: '',
                    id: 4,
                    linkUrl: ''
                }
            ]
        }
    }
    render(){
        return(
           <div className="section">
               {
                   this.state.cards.map(({ id, ...otherSectionProps }) => (
                       <SectionCard key = {id} {...otherSectionProps} />
                   ))
               }
           </div>
        )
    }
}
export default Section;