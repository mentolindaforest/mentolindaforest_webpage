import styles from './TrackList.module.scss';
import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";
import ReactPlayer from 'react-player';


const Track = ({ link }) => {
    const [show, setShown] = useState(false);
    
    const hoover = useSpring({
        transform: show ? "scale(1.03)" : "scale(1)",
        boxShadow: show
        ? "0 20px 25px rgb(0 0 0 / 25%)"
        : "0 2px 10px rgb(0 0 0 / 8%)"       
    });

    return (
        <animated.div
            className={styles.track}
            style={hoover}
            onMouseEnter={() => setShown(true)}
            onMouseLeave={() => setShown(false)}
      >
            <ReactPlayer url={link} />
        </animated.div>     
    )
} 

export default Track;