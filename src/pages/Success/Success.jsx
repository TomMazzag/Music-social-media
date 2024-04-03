import { useEffect, useState } from "react";
import { getToken } from "../../services/login";
import { useNavigate } from "react-router-dom";

export const Success = () => {
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');

    const navigate = useNavigate()

    useEffect(() => {
        const tokenAsync = async () => {
            try {
                const response = await getToken(code, localStorage.getItem("code_verifier"))
                if (response) {
                    localStorage.setItem("access_token", response.access_token)
                    localStorage.setItem("refresh_token", response.refresh_token)
                    navigate("/account")
                }
            } catch (err) {
                console.error(err)
            }
        }

        tokenAsync()
        
    }, [])

    return (
        <>
            <h1>Welcome to the social music app!</h1>

            <p>Adding login details</p>
        </>
    )
}