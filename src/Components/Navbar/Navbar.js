import { Link } from "react-router-dom"
import '../CSS/style.css'
import menu from '../../image/menu.png'
import { useState } from "react"


const Navbar = () =>{
    const [showNavbar, setShowNavbar] = useState(false)

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar)
//   }
    return(
        <div>
            <img src={menu} alt="menu-bar" className="menu-bar" onClick={() => {setShowNavbar(!showNavbar)}}/>
            <ul  className={showNavbar ? "nav mobile-nav" : "nav"}>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/Bollywood">Bollywood</Link></li>
                <li><Link to = "/Technology">Technology</Link></li>
                <li><Link to = "/Hollywood">Hollywood</Link></li>
                <li><Link to = "/Fitness">Fitness</Link></li>
                <li className="last-li"><Link to = "/Science">Science</Link></li>
            </ul>
            
                <hr className="head-hr"/>
        </div>
    )
}


export default Navbar