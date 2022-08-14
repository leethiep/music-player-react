import React  from 'react'

function AudioDetail(props) {
  
  return (
    
    <div className="audio-detail">

        <div className="detail-img  ">
             <img src={props.song.imageSrc} alt=""/>
        </div>
        <h3 className="detail-title">{props.song.title}</h3>
        <h3 className="detail-artist">{props.song.artist}</h3>

    </div>
  )
}

export default AudioDetail