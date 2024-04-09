

export const StepThree = ({spotifyAccountDetails, setActiveStep, updateAccountDetails}) => {
    return (
        <div className="create-account-form">
            <h2>Final Step</h2>

            <p>Account details completediv</p>

            <div className="step-movement">
                    <button onClick={() => {setActiveStep(1)}}>Previous</button>
                    <button>Finish</button>
                </div>
        </div>
    )
}