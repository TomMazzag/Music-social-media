import { useContext } from "react"
import "./steps.css"

export const StepTwo = ({spotifyAccountDetails}) => {

    return (
        <form className="create-account-form">
            <div className="step-instructions-container">
                <h2>Step two</h2>

                <p>Note: Use image from spotify or choose your own!</p>
                {spotifyAccountDetails && 
                <img src={spotifyAccountDetails.images[1].url} alt="" />
                }

                <button>Change Image</button>

            </div>
            <div className="step-movement">
                    <button disabled={true}>Previous</button>
                    <button>Next</button>
            </div>
        </form>
    )
}