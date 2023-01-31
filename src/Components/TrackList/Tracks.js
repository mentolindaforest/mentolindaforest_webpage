import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Carrousel from './Carousel';
import Track from './Track';
import styles from './TrackList.module.scss';


const Tracks = () => {

    let owntracks = [
        {
            key: uuidv4(),
            content: 
                <Track link="https://soundcloud.com/mentolindaforest/mentol-gund-mindsqueeze" />
        },
        {
            key: uuidv4(),
            content: 
                <Track link="https://soundcloud.com/mentolindaforest/shifted-field-2022-11-07-0857" />
        },
        {
            key: uuidv4(),
            content: 
                <Track link="https://soundcloud.com/mentolindaforest/slushy-premaster" />
        },
        {
            key: uuidv4(),
            content: 
                <Track link="https://soundcloud.com/mentolindaforest/inverse-paradox-unreleased" />
        },
        {
            key: uuidv4(),
            content: 
                <Track link="https://soundcloud.com/mentolindaforest/mentol-the-hunt-152" />
        }
    ];
    
    return (
        <div className={styles.gapCorrection}>
            <Carrousel 
                tracks={owntracks}
                offset={1}
                showArrows={false}
                header={"own tracks:"}
                goToSlide={5}        
            />
        </div>

    )
}

export default Tracks;
