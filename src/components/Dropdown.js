import { Link } from "react-router-dom";
import "./Dropdown.scss";

const Dropdown = () => {

<>
             <ul className="dropdown-menu">
            <li className="dropdown-menu__header">Browse Categories</li>
            <li className="dropdown-menu__item"><Link to={"/route1"}>Route 1</Link></li>
            <li className="dropdown-menu__item"><Link to={"/route2"}>Route 2</Link></li>
            <li className="dropdown-menu__item"><Link to={"/route3"}>Route 3</Link></li>
            <li className="dropdown-menu__item"><Link to={"/route4"}>Route 4</Link></li>
            <li className="dropdown-menu__item"><Link to={"/route5"}>Route 5</Link></li>
            <li className="dropdown-menu__item"><Link to={"/route6"}>Route 6</Link></li>
            <li className="dropdown-menu__item"><Link to={"/route7"}>Route 7</Link></li>
            <li className="dropdown-menu__item"><Link to={"/route8"}>Route 8</Link></li>
          </ul>
          
          </>
    
}


 
export default Dropdown;