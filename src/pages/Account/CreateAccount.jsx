import "./CreateAccount.css"
import { Step, Stepper, StepLabel } from "@mui/material"

export const CreateAccount = () => {
    return (
        <>
            <h1>Create your account</h1>

            <h2>Steps</h2>
            <div className="account-creation-steps">
                <Stepper style={{width: "50%" }} alternativeLabel activeStep={"0"}>
                    <Step>
                        <StepLabel className="step-text">Spotify Settings</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel className="step-text">User Settings</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel className="step-text">Final Step</StepLabel>
                    </Step>
                </Stepper>
            </div>
        </>
    )
}