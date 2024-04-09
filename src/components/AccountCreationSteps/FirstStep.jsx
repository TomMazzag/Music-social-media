import { useEffect, useState } from "react"
import Switch from '@mui/material/Switch';


export const StepOne = ({spotifyAccountDetails, setActiveStep, updateAccountDetails}) => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")

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


    return (
        <div className="create-account-form">
            <div>
                <h2>Step one</h2>
                {spotifyAccountDetails && 
                <>
                    <div>
                        <label htmlFor="">Display Name</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => {setName(e.target.value)}}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Username</label>
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value.toLowerCase())} 
                            onKeyDown={handleKeyDown}
                            pattern="[a-z]*"
                        />
                    </div>
                    <div>
                        <label htmlFor="">Show public playlists on proifle</label>
                        
                        <Switch defaultChecked/>
                    </div>
                </>
                }
            </div>
            <div className="step-movement">
                <button disabled={true}>Previous</button>
                <button 
                    onClick={() => {updateAccountDetails({name, username}); setActiveStep(1)}}
                    disabled={username.length < 3}
                >Next</button>
            </div>
        </div>
    )
}