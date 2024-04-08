import { useEffect, useState } from "react"
import "./CreateAccount.css"
import { Step, Stepper, StepLabel } from "@mui/material"
import { StepOne } from "../../components/AccountCreationSteps/FirstStep"
import { StepTwo } from "../../components/AccountCreationSteps/SecondStep"
import { StepThree } from "../../components/AccountCreationSteps/ThirdStep"
import { useNavigate } from "react-router-dom"

export const CreateAccount = () => {

    // Get spotify details

    const [access_token, setAccess_token] = useState(localStorage.getItem("access_token"))
    const [profile, setProfile] = useState()

    useEffect(() => {
        const getProfile = async () => {
            const result = await fetch("https://api.spotify.com/v1/me", {
                method: "GET", headers: { Authorization: `Bearer ${access_token}` }
            })
            const data = await result.json()
            setProfile(data)
            console.log(data)
        }
        getProfile()
    }, [])

    // Spotify details close

    const [activeStep, setActiveStep] = useState(0);
    const navigate = useNavigate()

    const showStep = (step) => {
        switch(step) {
            case 1 :
                return <StepOne spotifyAccountDetails={profile}/>
            case 2 :
                return <StepTwo spotifyAccountDetails={profile}/>
            case 3 :
                return <StepThree spotifyAccountDetails={profile}/>
        }
    }

    const nextStep = () => {

        if (activeStep === 2) {
            //Add in logic for creating user in DB
            //Get user a platform token
            //Then navigate to account page
            navigate("/account")
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const previousStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    return (
        <div className="create-account-page">
            <h1>Create your account</h1>

            <h2>Steps</h2>
            <div className="account-creation-steps">
                <Stepper style={{width: "50%" }} alternativeLabel activeStep={activeStep}>
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
            <div className="step-details-container">
                {showStep(activeStep + 1)}
            </div>
            <div className="step-movement">
                <button disabled={activeStep === 0} onClick={previousStep}>Previous</button>
                <button onClick={nextStep}>{activeStep === 3 - 1 ? 'Finish' : 'Next'}</button>
            </div>
        </div>
    )
}