import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Song.css"
import { getNewToken } from "../../../components/tokenGen";

export const SongPage = () => {
    
    let { songId } = useParams();
    //https://api.spotify.com/v1/tracks/

    const [access_token, setAccess_token] = useState(localStorage.getItem("access_token"))
    const [song, setSong] = useState()

    useEffect(() => {
        fetch(`https://api.spotify.com/v1/tracks/${songId}`, {
            method: "GET", headers: { Authorization: `Bearer ${access_token}` }
        })
        .then(response => response.json())
        .then((data) => {
            if(data.error) {
                if (data.error.status === 401) {
                    console.log("Generating new token")
                    getNewToken()
                } 
            } else {
                console.log(data)
                setSong(data)
            }
        })
    }, [])

    return (
        <div id="song-page">
            {song && 
            <div className="song-details">
                <img src={song.album.images[0].url} alt="" />
                <div>
                    <h1>{song.name}</h1>
                    {song.artists.map((artist, index) => (
                        <h2 key={index}>{artist.name}</h2>
                    ))}
                </div>
            </div>
            }
            <div className="song-comments">
                <p>Be the first to leave a comment about this song.</p>
            </div>
            <div className="user-comment-box">
                <input type="text" placeholder="This song reminds me of..." id="comment-input"/>
            </div>
        </div>
    )
}