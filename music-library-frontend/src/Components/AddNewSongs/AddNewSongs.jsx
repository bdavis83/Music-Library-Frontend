import React, { useState } from 'react';


const  AddNewSongs = (props) => {

    const [song, setSongs] = useState ()

    function handleSubmit (event){
        event.preventDefault();
        let newEntry = {
            title: title,
            artist: artist,
            albume: albume,
            release_date: release_date,
            genre: genre
        };
        console.log(newEntry)
        props.newEntryProperty(newEntry)
    }
    return ( 
        
     );
}
 
export default  AddNewSongs;