import React from 'react';
import styles from './Bio.module.scss';
import bioImage from '../../Images/bioimage.jpeg';

const Bio = () => (
    <div className={styles.bioContainer}>
        <img
            src={bioImage}
            alt='photo of Mentol playing djset'    
        />
        <div className={styles.textContainer}>
            <p>In 2013, he made his first steps as a DJ, playing underground events in his hometown of Kraków and its surroundings. After many experiments with very different types of electronic music, in the end he decided to take root mainly in the Forest Trance, which moved his soul from the very beginning. Significantly influenced after visiting the Swedish festival The Shadow of the Dark Shaman, where he got straight to the source and mecca of mossy psychedelia. Listening and observing the "cream" of forest producers, he took a huge dose of inspiration. His music is all about dark, atmospheric and organically filled sound, which is developed by years of dancing in nature among trees, mountains, lakes in the moonlight. Privately, a man of many passions, an admirer of various forms of outdoor physical activity. </p>
        </div>
    </div>
);

export default Bio;