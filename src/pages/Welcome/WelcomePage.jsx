import { refreshToken } from "../../services/token";

export const Welcome = () => {
    const authorize = async () => {
        try {
        const generateRandomString = (length) => {
            const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const values = crypto.getRandomValues(new Uint8Array(length));
            return values.reduce((acc, x) => acc + possible[x % possible.length], "");
        }
        const codeVerifier  = generateRandomString(64);

        const sha256 = async (plain) => {
            const encoder = new TextEncoder()
            const data = encoder.encode(plain)
            return window.crypto.subtle.digest('SHA-256', data)
        }

        const base64encode = (input) => {
            return btoa(String.fromCharCode(...new Uint8Array(input)))
                .replace(/=/g, '')
                .replace(/\+/g, '-')
                .replace(/\//g, '_');
        }          

        const hashed = await sha256(codeVerifier)
        const codeChallenge = base64encode(hashed);

        var clientId = ""
        var redirectUri = 'http://localhost:5173/success';
        // if (process.env.NETLIFY === 'true') {
        //     // run something during build
        //     clientId = process.env.VITE_CLIENT_ID;
        //     redirectUri = 'https://musicme-test.netlify.app/success';
        //     console.log("running with netlify")
        // } else {
            // run something else
            clientId = import.meta.env.VITE_CLIENT_ID;
        // }

        const scope = 'user-read-private user-read-email playlist-read-collaborative playlist-read-private';
        const authUrl = new URL("https://accounts.spotify.com/authorize")

        window.localStorage.setItem('code_verifier', codeVerifier);

        const params =  {
            response_type: 'code',
            client_id: clientId,
            scope,
            code_challenge_method: 'S256',
            code_challenge: codeChallenge,
            redirect_uri: redirectUri,
        }

        authUrl.search = new URLSearchParams(params).toString();
        window.location.href = authUrl.toString();
        } catch(err) {
            console.error(err)
        }
    }

    const getNewToken = async () => {
        const response = await refreshToken(localStorage.getItem("refresh_token"))
        localStorage.setItem("access_token", response.access_token)
        localStorage.setItem("refresh_token", response.refresh_token)
    }

    return (
        <>
            <h1>Spotify App</h1>
            <button onClick={authorize}>Click here to begin</button>

            <button onClick={getNewToken}>Refresh Token</button>
        </>
    )
}