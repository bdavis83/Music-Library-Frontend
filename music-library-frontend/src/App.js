import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayNav from './Components/NavigationBar/NavigationBar';
import AddNewSongs from './Components/AddNewSongs/AddNewSongs';
import SearchBar from './Components/SearchBar/SearchBar';
import MusicTable from './Components/MusicTable/MusicTable';
import './App.css';

function App() {

  const [songs, setSongs] = useState([])
  const [addedSong, setAddedSong] = useState([])
  const [userInput, setUserInput] = useState ('')

  async function createNewSong(newSong){
   // console.log("App Line 14", newSong)
    
    try{
      let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong)
      console.log (response.data)}
      catch (error){
        console.log (error)
      }
      getAllSongs();
    // How do I update the React application with new song?
   

  }

  async function updateSong(song) {
    let response = await axios.put('http://127.0.0.1:8000/api/music/' + song.id,
      {'title': `${song.title},`},
      {'artist': `${song.artist},`},
      {'album': `${song.album},`},
      {'release_date': `${song.release_date},`},
      {'genre': `${song.genre},`})
    console.log (response.data)
    getAllSongs()
  }
    
  async function deleteSong (songID){
    let response = await axios.delete('http://127.0.0.1:8000/api/music/' + songID)
    console.log (response)
    getAllSongs()
  }
  
  // async function filterSongs (searchInput){
  //   try {
  //     let response = await axios.get (`http://127.0.0.1:8000/api/music/`)
  //     setSongs(response.data)}
  //     catch (error) {
  //       console.log (error)
  //     }
  //   }
  

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    /*console.log (response.data)*/
    setSongs(response.data.songs)
  }
  useEffect (()=>{
    getAllSongs();
  }, []);
    return (
    <div className="App">
      <div className='nav'>
        <DisplayNav/>
      </div>
      <div className='app-search-bar'>
        <div>
          <SearchBar userInput = {userInput} setUserInput = {setUserInput}/>
        </div>

      </div>
      
      <div className='col-md-5'>
        <div className='border-box'>
          <AddNewSongs newSongProperty={createNewSong}/>
        </div>
      </div>

      <div className='border-box'>
        <MusicTable parentSongs = {songs} updateSong = {updateSong} userInput = {userInput}/>
      </div>
  
    </div>
  );
}

export default App;
