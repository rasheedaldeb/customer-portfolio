import { useState } from 'react'
import './NavBar.scss'
import { HashLink as Link } from 'react-router-hash-link'
const NavBar = ({logo, menu}) => {
    const [show , setshow] = useState(false)
    const [scrol, setscrol] = useState(false)
    const changBgColor = ()=>{
        if (window.scrollY >= 93) {
            setscrol(true)
        }else {
            setscrol(false)
        }
    }
    window.addEventListener("scroll" , changBgColor)
    return (
        <>
        <nav className={scrol? "scrol-nav" : ""}>
        <img src={logo} alt="" width={100} />
        <ul className='list'>
        {menu.map((item)=>{
            return(
                <li><Link to={item.path}>{item.link}</Link></li>
            )
        })}
        </ul>
        <button><a href="/wael-cv.pdf" download="wael">Download CV</a></button>
        <i className="fa-solid fa-bars-staggered bar" style={{color:"#ffc800", fontSize:"25px"}}
        onClick={()=>{
            setshow(true)
        }}></i>
        </nav>
        <div className={"mobile"}>
        <div className={ scrol ?"mobile-data scrol-nav" : "mobile-data"} style={{display: show? "block" : "none"}}>
        <i className="fa-solid fa-xmark close " onClick={()=>{
            setshow(false)
        }}></i>
        <ul className='mobile-nav'>
            {menu.map((ele, i )=>{
                return(
                    <li key={i}><Link to={ele.path}>{ele.link}</Link></li>
                )
            })}
        </ul>
            <div className="mobile-button">
            <button><a href="/wael-cv.pdf" download="wael">Download CV</a></button>
            </div>
        </div>
        </div>
        </>
    )
}

export default NavBar
