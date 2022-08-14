import {useState,  useEffect } from 'react';
import AudioPlayer from './components/AudioPlayer';
import React from 'react'

function App() {
  const [songs, setSongs] = useState([
    {
      title: "In the forest",
      artist: "Lesfm",
      audioSrc: "./music/in-the-forest.mp3",
      imageSrc: "./image/cafe-intheforest.jpeg",
      color: "#EFB0C9",
      
    },
    {
      title: "Into the night",
      artist: "Prazkha", 
      audioSrc: "./music/into-the-night.mp3",
      imageSrc: "./image/into-the-night.jpg",
      color: "#F25EA3",
      
    },
    {
      title: "Let it go",
      artist: "ItsWatR", 
      audioSrc: "./music/let-it-go.mp3",
      imageSrc: "./image/let-go.jpg",
      color: "#0487D9",
      
    },
    {
      title: "Goldn",
      artist: "ItsWatR", 
      audioSrc: "./music/goldn-116392.mp3",
      imageSrc: "./image/gold.jpg",
      color: "#A0E3F2",
      
    },
    {
      title: "Just relax",
      artist: "Lesfm", 
      audioSrc: "./music/just-relax-11157.mp3",
      imageSrc: "./image/just-relax1.jpg",
      color: "#04D9D9",
      
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(()=>{
    setNextSongIndex(()=>{
      if(currentSongIndex + 1 > songs.length - 1 ){
        return 0;
      }
      else {
        return currentSongIndex + 1;
      }
    });

  },[currentSongIndex]);

  return (

    <div className="App">
     <AudioPlayer 
      currentSongIndex={currentSongIndex}
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex}
      songs={songs}
      
     />
    </div>
  );
}

export default App;
