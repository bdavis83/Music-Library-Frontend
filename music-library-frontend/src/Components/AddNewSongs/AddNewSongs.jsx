import React, { useState } from 'react';


const  AddNewSongs = (props) => {

    const [title, setTitle] = useState ('');
    const [artist, setArtist] = useState ('');
    const [album, setAlbum] = useState ('');
    const [releaseDate, setReleaseDate] = useState ('');
    const [genre, setGenre] = useState ('');


    function handleSubmit (event){
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre
        };
        console.log(newSong)
        props.newSongProperty(newSong)
    }
    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Title</label>
                <input type = 'string' className='form-control' value ={title} onChange={(event)=>setTitle(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Artist</label>
                <input type = 'string' className='form-control' value ={artist} onChange={(event)=>setArtist(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Album</label>
                <input type = 'string' className='form-control' value ={album} onChange={(event)=>setAlbum(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Release Date</label>
                <input type = 'date' className='form-control' value ={releaseDate} onChange={(event)=>setReleaseDate(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Genre</label>
                <input type = 'string' className='form-control' value ={genre} onChange={(event)=>setGenre(event.target.value)}/>
            </div>
            <button type='submit' className='add-new-btn'>Add</button>
        </form>
     );
}
 
export default  AddNewSongs;