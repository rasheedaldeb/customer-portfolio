import { HashLink as Link } from 'react-router-hash-link'
import './Footer.scss'
const Footer = ({logo, list}) => {
    return (
        <footer>
        <img src={logo} width={150} alt="" />
            <ul>
                {list.map((item, index)=>{
                    return (
                        <li key={index}><Link to={item.path}>{item.link}</Link></li>
                    )
                })}
            </ul>
            <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100073912881296&mibextid=ZbWKwL" target='blank'>
            <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/wael_mohammad9?igsh=cDIzcXdlaGhneWhr" target='blank'>
            <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav" target='blank'>
            <i class="fa-brands fa-linkedin"></i>
            </a>
            </div>
        </footer>
    )
}

export default Footer
