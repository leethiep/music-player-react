import React, { useEffect } from 'react'

function Backdrop(props) {

    useEffect(() => {
        document.documentElement.style.setProperty('--active-color', props.activeColor);
    }, [props.currentSongIndex]);

    
    return (
        <div className={`color-backdrop ${props.isPlaying ? "playing" : ""}`} 
        />
        
    )
}

export default Backdrop