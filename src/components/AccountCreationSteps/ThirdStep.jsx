

export const StepThree = ({ setActiveStep, updateAccountDetails, logUserDetails}) => {
    return (
        <div className="create-account-form">
            <h2>Final Step</h2>

            <p>Account details completed</p>

            <div className="step-movement">
                    <button onClick={() => {setActiveStep(1)}}>Previous</button>
                    <button onClick={() => {logUserDetails()}}>Finish</button>
                </div>
        </div>
    )
}