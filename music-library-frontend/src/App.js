import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayNav from './Components/NavigationBar/NavigationBar';
import AddNewSongs from './Components/AddNewSongs/AddNewSongs';
import MusicTable from './Components/MusicTable/MusicTable';
import './App.css';

function App() {

  const [songs, setSongs] = useState([])
  const [addedSong, setAddedSong] = useState([])

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
      <button onClick={()=> getAllSongs()}>Get All Songs</button>
      <div className='col-md-5'>
        <div className='border-box'>
          <AddNewSongs newSongProperty={createNewSong}/>
        </div>
      </div>
      <div className='border-box'>
        <MusicTable parentSongs = {songs}/>
      </div>
  
    </div>
  );
}

export default App;
