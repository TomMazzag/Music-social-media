export const getToken = async (code, codeVerifier) => {
    const redirectUri = 'http://localhost:5173/success';
    const payload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',

        },
        body: new URLSearchParams({
            client_id: import.meta.env.VITE_CLIENT_ID,
            grant_type: 'authorization_code',
            code,
            redirect_uri: redirectUri,
            code_verifier: codeVerifier,
        }),
    }


    const url = "https://accounts.spotify.com/api/token"
    try {
        const body = await fetch(url, payload);
        const response =await body.json();
        if (response.access_token !== undefined) {
            return response.access_token
        }
    } catch(err) {
        console.error(err)
    }
}