import React from 'react';
import styles from './ContactLinks.module.scss';
import facebookImage from '../../Images/facebook.png';
import soundcloudImage from '../../Images/soundcloud.png';



const ContactLinks = () => (
    
    <div className={styles.container}>

        <div className={styles.links}>
            <a href='https://www.facebook.com/mentolindaforest' target='_blank'>
                <img
                    src={facebookImage}
                    alt='facebook icon'
                />
            </a>
            <a href='https://www.soundcloud.com/mentolindaforest' target='_blank'>
                <img
                    src={soundcloudImage}
                    alt='soundcloud icon'
                />
            </a>
        </div>
    </div>

);


export default ContactLinks;
