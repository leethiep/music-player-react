import React, { useState, useEffect, useRef } from 'react'
import AudioDetail from './AudioDetail';
import AudioControl from './AudioControl';
import Backdrop from './Backdrop';

function AudioPlayer(props) {

  const audioEl = useRef(new Audio(props.songs[props.currentSongIndex].audioSrc));
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();

      document.querySelector('.detail-img').classList.add('rotate')

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

  const handleTimeSliderChange = (x) => {
    audioEl.current.currentTime = x.target.value;
    setCurrentTime(x.target.value);

    if (!isPlaying) {
      setIsPlaying(true);
      audioEl.current.play();
    }
  };

  return (
    <div className="audio-player">
      <audio
        src={props.songs[props.currentSongIndex].audioSrc} ref={audioEl}
        onTimeUpdate={() => setCurrentTime(audioEl.current.currentTime)}
        onEnded={() => SkipSong(true)}>

      </audio>
      <h4>Playing now</h4>
      {/* Detail */}
      <AudioDetail song={props.songs[props.currentSongIndex]} />
      {/* Control */}
      <AudioControl
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}

      />
      <input className="progress" type="range" value={currentTime} step="1" min="0" max={audioEl.current.duration}
        
        onChange={handleTimeSliderChange}
      />

      <p>
        <strong> Next up :</strong> {props.songs[props.nextSongIndex].title}
        {' '} <strong> by</strong> {props.songs[props.nextSongIndex].artist}
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