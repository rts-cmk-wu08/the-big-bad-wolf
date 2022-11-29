import "./footer.scss";
import { Link } from "react-router-dom";
import "https://kit.fontawesome.com/9c2542a137.js";
const Footer = () => {

    return (


<footer>


   <div className="footer-txt">
   
    <nav className="footer-nav">
    
    <Link to={"/"}>Home</Link>
                <Link to={"/shop"}>Shop</Link>
                <Link to={"/about"}>About Us</Link>
                
            </nav>
 
  

    <ul className="footer-list">
       <li>Returns & Refunds</li> 
       <li>Delivery</li> 
       <li>Privacy Policy</li> 
       <li>Terms & Conditions</li> 
    </ul>

    <div className="footer-contact">
        <h3>Contact</h3>
        <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
        <p> <i class="fa-solid fa-phone"></i> 0131 556 7901</p>
        <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
        <p> <i class="fa-solid fa-phone"></i> 01324 629 011</p>
        <div className="footer-icons">
            <Link to="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></Link>
            <Link to="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></Link>
            <Link to="https://twitter.com/"><i class="fa-brands fa-twitter"></i></Link>
            <Link to="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></Link>
            
            
            </div>

    </div>
    </div>
    <hr/>
    <div className="footer-bottom">
<p>Hi Fi Corner Edinburgh Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
<p>Designed & Built by WU07</p>
</div>
        </footer>

     );
}

export default Footer;