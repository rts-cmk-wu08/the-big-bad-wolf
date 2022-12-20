import { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TypeContext } from "../contexts/TypeContext";
import "./Dropdown.scss";


const Dropdown = () => {

    const [selectedType, setSelectedType] = useContext(TypeContext);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    console.log(selectedType, 'selectedType');
    
    let navigate = useNavigate();
    const location = useLocation();
    const isShopPage = location.pathname === '/shop';


    const handleClick = (type) => {
        if (isShopPage) {
            setSelectedType([type]);
            setIsOpen(false);
        } else {
            navigate(`/shop`);
            setSelectedType([type]);
            setIsOpen(false);
        }
    }

    useEffect(() => {
        const handleClickOutside = event => { if (dropdownRef.current && !dropdownRef.current.contains(event.target)) { setIsOpen(false); } };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
  
        <>
            <Link to={"/shop"} className="nav-menu__item" onMouseEnter={() => setIsOpen(true)}> Shop</Link>

            {isOpen && (
                <div ref={dropdownRef} className="dropdown-menu__wrapper">
                    <ul  className="dropdown-menu">
                        <li className="dropdown-menu__header">Browse Categories</li>
                        <li className="dropdown-menu__item">
                            <button onClick={() => handleClick('CD Players')}
                            >CD Players</button> 
                        </li>
                        <li className="dropdown-menu__item">
                            <button onClick={() => handleClick('DVD Players')}
                            >DVD Players</button> 
                        </li>
                        <li className="dropdown-menu__item">
                            <button onClick={() => handleClick('Preamps')}
                            >Preamps</button> 
                        </li>
                        <li className="dropdown-menu__item">
                            <button onClick={() => handleClick('Speakers')}
                            >Speakers</button> 
                        </li>
                        <li className="dropdown-menu__item">
                            <button onClick={() => handleClick('Turntabels')}
                            >Turntabels</button> 
                        </li>
                        <li className="dropdown-menu__item">
                            <button onClick={() => handleClick('Integrated Amplifiers')}
                            >Integrated Amplifiers</button> 
                        </li>
                        <li className="dropdown-menu__item">
                            <button onClick={() => handleClick('Power Amplifiers')}
                            >Power Amplifiers</button> 
                        </li>
                        <li className="dropdown-menu__item">
                            <button onClick={() => handleClick('Tube Amplifiers')}
                            >Tube Amplifiers</button> 
                        </li>
                    </ul>
                </div>
            )}

        </>
    );
}


 
export default Dropdown;