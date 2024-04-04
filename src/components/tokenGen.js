export const getNewToken = async () => {
    const response = await refreshToken(localStorage.getItem("refresh_token"))
    localStorage.setItem("access_token", response.access_token)
    localStorage.setItem("refresh_token", response.refresh_token)
}