import React, { useState, useEffect, useRef } from 'react'
import AudioDetail from './AudioDetail';
import AudioControl from './AudioControl';
import Backdrop from './Backdrop';

function AudioPlayer(props) {

  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
 
  
  
  

 


  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
      document.querySelector('.detail-img').classList.add('rotate')
      
      
      // console.log(audioEl.current.currentTime)
    } else {
      audioEl.current.pause();
      document.querySelector('.detail-img').classList.remove('rotate')

    }
  });

  


  const SkipSong = (forward = true) => {
    if (forward) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;

        }
        return temp;

      })
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;

        }
        return temp;

      })
    }
  }

  





return (
  <div className="audio-player">
    <audio src={props.songs[props.currentSongIndex].audioSrc} ref={audioEl}></audio>
    <h4>Playing now</h4>
    {/* Detail */}
    <AudioDetail song={props.songs[props.currentSongIndex]} />
    {/* Control */}
    <AudioControl
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      SkipSong={SkipSong}
      
    />

    <p>
      <strong> Next up :</strong> {props.songs[props.nextSongIndex].title}
      {' '} by {props.songs[props.nextSongIndex].artist}
    </p>
    <Backdrop
      currentSongIndex={props.currentSongIndex}
      activeColor={props.songs[props.currentSongIndex].color}
      isPlaying={isPlaying}
    />
  </div>
)
}

export default AudioPlayer