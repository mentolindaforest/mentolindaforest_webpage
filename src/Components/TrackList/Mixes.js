import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Carrousel from './Carousel';
import Track from './Track';


const Mixes = () => {

    let mixes = [
        {
            key: uuidv4(),
            content: 
                <Track link="https://soundcloud.com/mentolindaforest/darkelicious-cave-forest-edition-mentol-dj-set1" />
        },
        {
            key: uuidv4(),
            content: 
                <Track link="https://soundcloud.com/mentolindaforest/mentol-now-oa" />
        },
        {
            key: uuidv4(),
            content: 
                <Track link="https://soundcloud.com/mentolindaforest/mentol-las-festival-2022-contest-forest-stage" />
        },
        {
            key: uuidv4(),
            content: 
                <Track link="https://soundcloud.com/mentolindaforest/hidden-circle-forest-mix" />
        }
    ];
    
    return (
        <Carrousel 
            tracks={mixes}
            offset={1}
            showArrows={false}
            header={"mixes:"}
            goToSlide={4}        
        />
    )
}

export default Mixes;
