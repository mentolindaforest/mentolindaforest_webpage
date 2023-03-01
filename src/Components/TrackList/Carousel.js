import Carousel from 'react-spring-3d-carousel';
import { useState, useEffect } from 'react';
import { config } from 'react-spring';
import styles from './TrackList.module.scss';

function Carrousel(props) {

    const table = props.tracks.map((element, index) => {
        return { ...element, onClick: () => setGoToSlide(index) };
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(false);
    const [goToSlide, setGoToSlide] = useState(4);
    const [tracks] = useState(table);
    const [header, setHeader] = useState("");

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
        setHeader(props.header);
        setGoToSlide(props.goToSlide);
    }, [props.offset, props.showArrows, props.header, props.goToSlide]);

    const nextTrack = () => {
        setGoToSlide(goToSlide => goToSlide - 1)
    }

    const previousTrack = () => {
        setGoToSlide(goToSlide => goToSlide + 1)
    }

    return (
        <div className={styles.container}>
            <div className={styles.tracklist}>
                <h1>{header}</h1>
                <Carousel 
                    slides={tracks}
                    goToSlide={goToSlide}
                    offsetRadius={offsetRadius}
                    showNavigation={showArrows}
                    animationConfig={config.gentle}
                />  
            </div>
            <div className={styles.buttons}>
                <button onClick={nextTrack} className={styles.btn_left}></button>
                <button onClick={previousTrack} className={styles.btn_right}></button>
            </div>
        </div> 
    )
}

export default Carrousel;