import React from 'react'

const Song = (props) => {
  return(
    <div className='song'>
      <p>{props.index + 1}.</p>
      <p>Title: {props.song.title.label}</p>
      <p>Artist: {props.song['im:artist'].label}</p>
      
    </div>
  )
}

export default Song