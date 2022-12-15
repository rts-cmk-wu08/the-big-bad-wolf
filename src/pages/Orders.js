import "./orders.scss"
import { Link } from "react-router-dom";


const Orders = () => {
    return ( 
        <section className="orders">
        <article className="orders__btns">
            <Link to="/profile"><button className="orders__btn--profile">Profile</button></Link>
            <button className="orders__btn--orders">Orders</button>
        </article>
        <article className="orders__information">
        <p>You have no Orders</p>
           
        </article>
    </section>   
    );
}
 
export default Orders;