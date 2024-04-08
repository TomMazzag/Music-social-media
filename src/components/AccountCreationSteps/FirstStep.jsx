import { useContext, useEffect, useState } from "react"

export const StepOne = ({spotifyAccountDetails}) => {
    const [name, setName] = useState()
    const [username, setUsername] = useState()

    useEffect(() => {
        if (spotifyAccountDetails) {
            setName(spotifyAccountDetails.display_name)
        }
    })

    const handleChange = () => {
        
    }

    return (
        <>
            <h2>Step one</h2>
            {spotifyAccountDetails && 
            <>
                <div>
                    <label htmlFor="">Display Name</label>
                    <input type="text" value={name}/>
                </div>
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" value={username}/>
                </div>
            </>
            }
        </>
    )
}