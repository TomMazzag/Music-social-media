import { useRef, useState } from "react"
import "./Search.css"

const SearchPage = () => {
    const [searchCategory, setSearchCategory] = useState("Song")
    const dropdown = useRef()

    const toggleDropdown = () => {
        dropdown.current.classList.toggle("show")
    }

    return (
        <div className="search-page">
            <div className="search-bar"> 
                <div className="dropdown" onClick={toggleDropdown}>
                    <span>{searchCategory}</span>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>

                <ul className="dropdown-list" ref={dropdown}>
                    <li onClick={() => {setSearchCategory("Song"); toggleDropdown()}}>Song</li>
                    <li onClick={() => {setSearchCategory("Artist"); toggleDropdown()}}>Artist</li>
                    <li onClick={() => {setSearchCategory("Album"); toggleDropdown()}}>Album</li>
                </ul>

                <input type="text" placeholder={`Search by ${searchCategory}`}/>
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
    )
}

export default SearchPage