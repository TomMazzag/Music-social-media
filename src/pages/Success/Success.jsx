import { useEffect, useState } from "react";
import { getToken } from "../../services/token";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth";

export const Success = () => {
    
    const navigate = useNavigate()
    
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        let code = urlParams.get('code');
        const tokenAsync = async () => {
            try {
                const response = await getToken(code, localStorage.getItem("code_verifier"))
                if (response) {
                    localStorage.setItem("access_token", response.access_token)
                    localStorage.setItem("refresh_token", response.refresh_token)

                    const result = await fetch("https://api.spotify.com/v1/me", {
                        method: "GET", headers: { Authorization: `Bearer ${response.access_token}` }
                    })
                    const data = await result.json()
                    const token = await login(data.id)
                    
                    if (token.error) {
                        navigate("/account/create")
                    } else {
                        localStorage.setItem("platform_token", token)
                        navigate("/account")
                    }

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