import Song from './Song'

const SongsList = (props) => {
  const songNodes = this.props.songs.map( (song, index) => {
    return(
      <Song song={song} key={index} />
    )
  })

  return(
    <div className="songsList">
      { songNodes }
    </div>
  )
}

export default SongsList