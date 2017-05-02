import React from 'react'
import Song from './Song'

const SongsList = (props) => {
  const songNodes = props.songs.map( (song, index) => {
    return(
      <Song song={song} index={index} key={index} />
    )
  })

  return(
    <div className="songsList">
      { songNodes }
    </div>
  )
}

export default SongsList