import React, { useState } from 'react';
import axios from 'axios';

export const MusicContext = React.createContext();

export default function MusicProvider(props) {
    const [musicsToDisplay, setMusicsToDisplay] = useState([]);

    function getMusicsByAritst(artist) {
        axios
         .get(`/artists/{artist_id}/${artist}`)
         .then(res => {
             console.log(res)
             setMusicsToDisplay([...res.data]);
         })
         .catch(err => console.error(err));

    function getMusicsByLabel(label) {
        axios
        .get(`/artists/{artist_id}/releases/{?sort,sort_order}/${label}`)
        .then(res => {
            console.log(res)
            setMusicsToDisplay([...res.data]);
        })
        .catch(err => console.error(err));
    }

    }

    return (
        <MusicContext.Provider
        value={{
            musicsToDisplay,
            getMusicsByArtist,
            getMusicsByLabel
        }}>
            {props.children}
        </MusicContext.Provider>
    )
}