import { Link } from "react-router-dom";

const Header = () => {

    return (

        <header>

            <Link to={"/"}><img src="/logo_sml.png" alt="Logo" /></Link>

            <nav>
                <Link to={"/shop"}>Shop</Link>
                <Link to={"/about"}>About Us</Link>
                <Link to={"/contact"}>Contact Us</Link>
            </nav>

        </header>

     );

}

export default Header;