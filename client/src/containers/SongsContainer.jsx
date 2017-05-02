import React from 'react'
import SongsList from '../components/SongsList'

class SongsContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
    const request = new XMLHttpRequest()
    
    request.open("GET", url)

    request.onload = () => {
      if(request.status === 200){
        const jsonString = request.responseText
        const songs = JSON.parse(jsonString)
        console.log(songs.feed.entry[0])
        this.setState( {songs: songs.feed.entry} )
      }
    }
    request.send()
  }

  render(){
    return(
      <SongsList songs={this.state.songs} />
    )
  }

}

export default SongsContainer