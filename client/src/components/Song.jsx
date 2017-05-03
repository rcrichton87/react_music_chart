import React from 'react'

const Song = (props) => {
  return(
    <div className='song'>
      <img src={props.song['im:image'][2].label} />
      <div className='songInfo'>
        <p>{props.index + 1}.</p>
        <p>Title: {props.song['im:name'].label}</p>
        <p>Artist: {props.song['im:artist'].label}</p>
      </div>
    </div>
  )
}

export default Song