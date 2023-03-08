import React from 'react';
import AddNewSongs from '../AddNewSongs/AddNewSongs';

const MusicTable = (props) => {
    return (
        <table className="display-flex-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {props.parentSongs
                .filter(song=>(
                    song.title.toLowerCase().includes(props.userInput.toLowerCase()) || 
                    song.artist.toLowerCase().includes(props.userInput.toLowerCase()) || 
                    song.album.toLowerCase().includes(props.userInput.toLowerCase()) || 
                    song.release_date.toLowerCase().includes(props.userInput.toLowerCase()) || 
                    song.genre.toLowerCase().includes(props.userInput.toLowerCase()) 
                    ))
                .map((song)=>{
                    return (
                        <tr>
                        
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            
                        </tr>

                    );
                }
                )}
            </tbody>



        </table>
    )
}
    export default MusicTable