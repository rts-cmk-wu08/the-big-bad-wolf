import "./profile.scss"
import { Link } from "react-router-dom";

const Profile = () => {
    return ( 
        <section className="profile">
        <article className="profile__btns--profile">
            <button className="profile__btn--profile">Profile</button>
            <Link to="/orders"><button className="profile__btn--orders">Orders</button></Link>
            
        </article>
        <article className="profile__information">
            <p>Cheack and udpate your information</p>

            <div className="profile__icons grey__line">
                <div className="profile__icon"><i className="fa-solid fa-user"></i></div>
                <div className="profile__info">
                <h3>Name</h3>
                <p>John Doe</p>
                </div>
            </div>

            <div className="profile__icons grey__line">
                <div className="profile__icon"><i class="fa-solid fa-phone"></i></div>
                <div className="profile__info">
                <h3>Phone Number</h3>
                <p>7875 149753</p>
                </div>
            </div>

            <div className="profile__icons grey__line">
            <div className="profile__icon"><i class="fa-solid fa-envelope"></i></div>
                <div className="profile__info">
                <h3>Mail</h3>
                <p>johndoe@hotmail.com</p>
                </div>
            </div>

            <div className="profile__icons grey__line">
                <div className="profile__icon"><i class="fa-solid fa-lock"></i></div>
                <div className="profile__info">
                <h3>Password</h3>
                <p>**********</p>
                </div>
            </div>

            <div className="profile__icons">
            <div className="profile__icon"><i class="fa-solid fa-location-dot"></i></div>
                <div className="profile__info">
                <h3>Address</h3>
                <p>61 Church st.</p>
                <p>Berwick-upon-tweed</p>
                <p>Northumberland</p>
                <p>TD15 1EE</p>
                <p>United Kingdom</p>
                </div>
            </div>
        </article>
    </section>   
     );
}
 
export default Profile;