import { useContext, useEffect, useState } from "react"

export const StepOne = ({spotifyAccountDetails, setActiveStep}) => {
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
        <form className="create-account-form">
            <div>
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
            </div>
            <div className="step-movement">
                <button disabled={true}>Previous</button>
                <button onClick={() => {setActiveStep(1)}}>Next</button>
            </div>
        </form>
    )
}