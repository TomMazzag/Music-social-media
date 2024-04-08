import { useContext } from "react"

export const StepThree = ({spotifyAccountDetails}) => {
    return (
        <form className="create-account-form">
            <h2>Final Step</h2>

            <div className="step-movement">
                    <button disabled={true}>Previous</button>
                    <button>Next</button>
                </div>
        </form>
    )
}