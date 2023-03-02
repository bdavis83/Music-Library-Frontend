import React, { useState } from 'react';


const  AddNewSongs = (props) => {

    const [title, setTitle] = useState ('');
    const [artist, setArtist] = useState ('');
    const [album, setAlbum] = useState ('');
    const [release_date, setReleaseDate] = useState ('');
    const [genre, setGenre] = useState ('');


    function handleSubmit (event){
        event.preventDefault();
        let newEntry = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        };
        console.log(newEntry)
        props.newEntryProperty(newEntry)
    }
    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Title</label>
                <input type = 'string' className='form-control' value ={title} onChange={(event)=>setTitle(event.target.value)}></input>
            </div>
            <div className='form-group'>
                <label>Artist</label>
                <input type = 'string' className='form-control' value ={artist} onChange={(event)=>setArtist(event.target.value)}></input>
            </div>
            <div className='form-group'>
                <label>Album</label>
                <input type = 'string' className='form-control' value ={album} onChange={(event)=>setAlbum(event.target.value)}></input>
            </div>
            <div className='form-group'>
                <label>Release Date</label>
                <input type = 'string' className='form-control' value ={release_date} onChange={(event)=>setReleaseDate(event.target.value)}></input>
            </div>
            <div className='form-group'>
                <label>Genre</label>
                <input type = 'string' className='form-control' value ={genre} onChange={(event)=>setGenre(event.target.value)}></input>
            </div>
        </form>
     );
}
 
export default  AddNewSongs;