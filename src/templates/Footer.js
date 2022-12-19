import "./footer.scss";
import { Link } from "react-router-dom";
import "https://kit.fontawesome.com/9c2542a137.js";
import Image from "../images/cards1.png";
import { HashLink } from "react-router-hash-link"

const Footer = () => {

    return (


<footer>
    
    <div className="container"> 


   <div className="footer-txt">
   
    <nav className="footer-nav">
    
    <Link to={"/"}>Home</Link>
                <Link to={"/shop"}>Shop</Link>
                <Link to={"/about"}>About Us</Link>
                
            </nav>
 
  

    <ul className="footer-list">
        <HashLink to={"/faq/#refunds"}><li>Returns & Refunds</li> </HashLink>
        <HashLink to={"/faq/#delivery"}><li>Delivery</li> </HashLink>
        <HashLink to={"/faq/#privacy"}><li>Privacy Policy</li> </HashLink>
        <HashLink to={"/faq/#termsConditions"}><li>Terms & Conditions</li></HashLink>
        
    </ul>

    <div className="footer-contact">
        <h3>Contact</h3>
        <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
        <p> <i className="fa-solid fa-phone"></i> 0131 556 7901</p>
        <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
        <p> <i className="fa-solid fa-phone"></i> 01324 629 011</p>
        <div className="footer-icons">
            <Link to="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></Link>
            <Link to="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></Link>
            <Link to="https://twitter.com/"><i className="fa-brands fa-twitter"></i></Link>
            <Link to="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></Link>
            
            
            </div>

    </div>
    </div>
    <hr/>
    <img src={Image} alt="visa cards" />
                 
           
    <div className="footer-bottom">
     
<p>Hi Fi Corner Edinburgh Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
<p>Designed & Built by WU07</p>
</div>  

</div>
        </footer>

     );
}

export default Footer;