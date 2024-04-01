import { useEffect, useRef, useState } from "react"
import "./Search.css"

const SearchPage = () => {
    const [searchCategory, setSearchCategory] = useState("Track")
    const [searchInput, setSearchInput] = useState("")
    const dropdown = useRef()
    const [access_token, setAccess_token] = useState(localStorage.getItem("access_token"))
    const [result, setResult] = useState([])

    const toggleDropdown = () => {
        dropdown.current.classList.toggle("show")
    }

    const url = `https://api.spotify.com/v1/search?q=${searchInput}&type=${searchCategory.toLowerCase()}`
    let encodedURI = encodeURI(url)
    
    useEffect(() => {
        if (searchInput.length > 1) {
            fetch(encodedURI, {
                method: "GET", headers: { Authorization: `Bearer ${access_token}` }
            })
            .then(response => response.json())
            .then((data) => {
                const category = searchCategory.toLowerCase() + "s"
                setResult(data[category].items)
                console.log(data[category].items)
            })
        }
    }, [searchCategory, searchInput])


    return (
        <div className="search-page">
            <div className="search-bar"> 
                <div className="dropdown" onClick={toggleDropdown}>
                    <span>{searchCategory}</span>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>

                <ul className="dropdown-list" ref={dropdown}>
                    <li onClick={() => {setSearchCategory("Track"); toggleDropdown()}}>Song</li>
                    <li onClick={() => {setSearchCategory("Artist"); toggleDropdown()}}>Artist</li>
                    <li onClick={() => {setSearchCategory("Album"); toggleDropdown()}}>Album</li>
                </ul>

                <input type="text" placeholder={`Search by ${searchCategory}`} value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}}/>
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="results">
                {result.map((result, index) => (
                    <a href={result.external_urls.spotify} target="_blank" className="result-tile" key={index}>
                        <img src={result.album.images[0].url} alt="" />
                        <div className="result-text">
                            <h3>{result.name}</h3>
                            <p>{result.artists[0].name}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default SearchPage