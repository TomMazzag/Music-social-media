import { useEffect, useState } from "react"
import Switch from '@mui/material/Switch';


export const StepOne = ({spotifyAccountDetails, setActiveStep, updateAccountDetails}) => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [public_playlists, setPublic_Playlists] = useState(true)

    useEffect(() => {
        if (spotifyAccountDetails) {
            setName(spotifyAccountDetails.display_name)
        }
    }, [spotifyAccountDetails])

    const handleKeyDown = (event) => {
        if (event.keyCode === 32) {
            event.preventDefault(); 
        }
    }

    function ValidateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        return (false)
    }


    return (
        <div className="create-account-form">
            <div>
                <h2>Step one</h2>
                {spotifyAccountDetails && 
                <div className="first-page-options">
                    <div className="input-and-label-container">
                        <label htmlFor="">Display Name</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => {setName(e.target.value)}}
                            required
                        />
                    </div>
                    <div className="input-and-label-container">
                        <label htmlFor="">Username</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value.toLowerCase())} 
                            onKeyDown={handleKeyDown}
                            pattern="[a-z]*"
                            required
                        />
                    </div>
                    <div className="input-and-label-container">
                        <label htmlFor="">Email</label>
                        <input 
                            type="text" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value.toLowerCase())} 
                            onKeyDown={handleKeyDown}
                            required
                        />
                    </div>
                    <div className="input-and-label-container">
                        <label htmlFor="">Show public playlists on proifle</label>
                        
                        <Switch checked={public_playlists} onChange={() => {setPublic_Playlists(!public_playlists)}}/>
                    </div>
                </div>
                }
            </div>
            <div className="step-movement">
                <button disabled={true}>Previous</button>
                <button 
                    onClick={() => {updateAccountDetails({name, email, username, public_playlists}); setActiveStep(1)}}
                    disabled={username.length}
                >Next</button>
            </div>
        </div>
    )
}