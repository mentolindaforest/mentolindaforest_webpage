import React from 'react';
import NavBar from '../../Components/SiteWrapper/NavBar/NavBar';
import Mixes from '../../Components/TrackList/Mixes';
import Tracks from '../../Components/TrackList/Tracks';
import styles from  './MusicView.module.scss';

const MusicView = () => (
    <>
        <NavBar />
        <div className={styles.container}>
            <Mixes />
            <Tracks />
        </div> 
    </>

);


export default MusicView;