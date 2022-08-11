import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faPause, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
function AudioControl(props) {
 
  return (
    <div className ="audio-control">
       
        <button className ="skip-btn" onClick={()=> props.SkipSong(false)}>
            <FontAwesomeIcon icon = {faBackward}/>
        </button>
        
        <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
              <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
        </button>
          
        <button className ="skip-btn" onClick={()=> props.SkipSong()}>
            <FontAwesomeIcon icon = {faForward}/>

        </button>
        
        
        
    </div>
  )
}

export default AudioControl