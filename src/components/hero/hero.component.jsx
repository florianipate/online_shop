import React from 'react';
import './hero.style.scss'

const Hero =({children})=>(
           <div className="hero">
               { children }
           </div>
        );
export default Hero;