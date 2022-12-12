import "./cart.scss"


const Cart = () => {

    return (

        <>
        <section className="cart__icons">
            <div className="cart icon shadow"><i className="fa-solid fa-cart-shopping cart-widget__icon"></i></div>
            <div className="card icon shadow"><i class="fa-solid fa-credit-card"></i></div>
            <div className="bill icon shadow"><i class="fa-solid fa-receipt"></i></div>
            <div className="grey--line"></div>
        </section>
        <h1 className="page-header__title">Cart</h1>

        <section className="cart__items">
            <article className="cart__item shadow"></article>

            <div className="cart__items--btn">
                <p>Sub total <span className="orange">funtion here</span></p>
                <button className="btn shadow">Go to payment</button>
            </div>
        </section>
        </>

     );
     
}

export default Cart;